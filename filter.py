import json

def organize_data(jsonl_data):
    organized_data = {}
    for item in jsonl_data:
        room = item["room_name"]
        # Convert price string to a pure number
        price = float(item["price"].replace("£", "").strip())
        product_info = {
            "name": item["name"],
            "url": item["url"],
            "image_urls": item["image_urls"],
            "price": price,
            "description": item["description"],
            "category_name": item["category_name"],
        }

        if room not in organized_data:
            organized_data[room] = []

        organized_data[room].append(product_info)

    # Sort products by price in each room and keep only the lowest-priced 200
    for room in organized_data:
        organized_data[room].sort(key=lambda x: x["price"])
        organized_data[room] = organized_data[room][:200]

    # Convert organized data into the required format
    result = []
    for room, products in organized_data.items():
        room_info = {"room_name": room, "products": products}
        result.append(room_info)

    return result


# Read JSONL file
jsonl_data = []
with open("data.jsonl", "r") as file:
    for line in file:
        jsonl_data.append(json.loads(line))

# Call the function to process the data
organized_json = organize_data(jsonl_data)

# Identify duplicate data
seen = set()
repeated = []
for item in organized_json:
    for product in item["products"]:
        key = (
            product["name"],
            product["url"],
            product["price"],
            product["category_name"],
        )
        if key in seen:
            repeated.append(key)
        else:
            seen.add(key)

if repeated:
    print("The following products are duplicated:")
    for name, url, price, category in repeated:
        print(f"Name: {name}\nURL: {url}\nPrice: {price}\nCategory: {category}")
else:
    print("No duplicated products")

# Print all room_names
print("All room_names:")
for item in organized_json:
    print(item["room_name"])


# Save the processed result to data.json
with open("data.json", "w") as json_file:
    json.dump(organized_json, json_file, indent=2)

print("Data has been saved as data.json")
