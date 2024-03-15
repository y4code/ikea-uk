import scrapy


# response.css('a.pub__card::attr(href)').getall()
# response.css('.pub__h2::text').getall()
class IkeaSpider(scrapy.Spider):
    name = "ikea-spider"
    start_urls = ["https://www.ikea.com/gb/en/rooms/"]

    def parse(self, response):
        for room in response.css("a.pub__card"):
            room_url = room.css("::attr(href)").get()
            room_name = room.css(".pub__card__title::text").get()
            yield scrapy.Request(
                room_url,
                callback=self.parse_category,
                meta={"depth": 0, "room_name": room_name},
            )

    # response.css('.vn-link::attr(href)').getall()
    # response.css('.vn-link .vn__nav__title::text').getall()
    def parse_category(self, response):
        depth = response.meta.get("depth", 0)
        for category in response.css(".vn-link"):
            category_url = category.css("::attr(href)").get()
            # print("category_url: " + str(category_url))
            if category_url is None:
                self.crawler.engine.close_spider(
                    self, "closing spider due to no category url found " + response.url
                )
            yield scrapy.Request(
                category_url,
                callback=self.pre_parse_product,
                meta={
                    "depth": depth,
                    "room_name": response.meta.get("room_name"),
                    "category_name": category.css(".vn__nav__title::text").get(),
                },
            )

    # plp-filter-information__total-count
    def pre_parse_product(self, response):
        depth = response.meta.get("depth", 0)
        amount_with_text = response.css(
            ".catalog-product-list__total-count::text"
        ).get()
        # amount_with_text = "Showing 9 of 9"
        # print("amount_with_text: " + str(amount_with_text))
        if amount_with_text is None:
            if depth < 3:
                print("no amount with text found " + response.url)
                yield scrapy.Request(
                    response.url,
                    callback=self.parse_category,
                    meta={
                        "depth": depth + 1,
                        "room_name": response.meta.get("room_name"),
                        "category_name": response.meta.get("category_name"),
                    },
                )
            else:
                self.crawler.engine.close_spider(
                    self,
                    "closing spider due to no amount with text found " + response.url,
                )
        else:
            # Showing 12 of 442 results
            # "Showing 9 of 9"
            amount = amount_with_text.split("of")[-1].split()[0].strip()
            category_id = (
                response.css('meta[property="og:url"]::attr(content)')
                .get()
                .split("-")[-1]
                .split("/")[0]
            )
            # print("amount: " + amount)
            # print("category_id: " + category_id, response.url)
            if int(amount) > 0:
                yield scrapy.Request(
                    f"https://sik.search.blue.cdtapps.com/gb/en/product-list-page/more-products?category={category_id}&start=0&end={amount}",
                    callback=self.parse_product,
                    meta={
                        "room_name": response.meta.get("room_name"),
                        "category_name": response.meta.get("category_name"),
                    },
                )

    def parse_product(self, response):
        data = response.json()
        for product in data.get("moreProducts").get("productWindow"):
            yield {
                "url": product.get("pipUrl"),
                "name": product.get("name"),
                "description": product.get("typeName")
                + " "
                + (
                    product.get("colors")[0].get("name")
                    if len(product.get("colors")) == 1
                    else "multiple colors"
                ),
                "price": str(
                    product.get("salesPrice").get("current").get("prefix") or ""
                )
                + " "
                + str(product.get("salesPrice").get("numeral") or ""),
                "image_urls": product.get("mainImageUrl"),
                "room_name": response.meta.get("room_name"),
                "category_name": response.meta.get("category_name"),
            }

    def close(self, reason):
        self.logger.info("Spider closed (%s)", reason)
