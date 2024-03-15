import { RoomName } from "@/app/const";
import { RoomNameContext } from "@/app/page";
// import arrowRight from "@/public/icons/arrow-right.svg";
import arrowRight from "../../public/icons/arrow-right.svg";
import { useContext, useMemo } from "react";
import Image from "next/image";
import { shimmer, toBase64 } from "@/util/image-processing";
import { Product } from "@/app/types";
import data from "../../data.json";

type CardProps = {
    title: string;
    description: string;
    imageSrc: string;
    price: number;
    url: string;
};

function Card({ title, description, imageSrc, price, url }: CardProps) {
    return (
        <a href={url} className="h-40 flex bg-white mb-6 sm:mb-0 rounded-xl p-2 relative">
            <Image
                src={imageSrc}
                placeholder="blur"
                height={120}
                width={120}
                blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
                alt={""}
                style={{
                    width: 120,
                    height: 120,
                    maxWidth: "100%",
                    objectFit: "contain"
                }} />
            <div className="ml-2 py-3 flex flex-col justify-between w-2/3">
                <div className="font-bold">{title}</div>
                <div className="text-sm text-gray-400 w-2/3">{description}</div>
                <div className="bg-[#FFD800] font-bold px-3 py-1 w-fit shadow-[3px_3px_0px_rgba(250,0,0,1)]">
                    <span className="text-xs">￡</span>
                    <span className="ml-1">{price}</span>
                </div>
                <div className="absolute right-4 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <Image
                        src={arrowRight}
                        height={12}
                        width={8}
                        alt={""}
                        style={{
                            maxWidth: "100%",
                            height: "auto",
                            objectFit: "contain"
                        }} />
                </div>
            </div>
        </a>
    );
}

export default function CardList() {
    const { roomName } = useContext(RoomNameContext);
    const products = useMemo(() => getProducts(roomName as RoomName), [roomName]);

    return (
        <div className="mt-6 px-5 relative sm:px-0 sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6 sm:gap-x-6 sm:gap-y-8">
            {products.map((product) => (
                <Card
                    key={`${product.name}-${product.url}-${product.price}-${product.category_name}`}
                    title={product.name}
                    description={product.description}
                    imageSrc={product.image_urls}
                    price={product.price}
                    url={product.url}
                />
            ))}
        </div>
    );
}

// {
//     "room_name": "Laundry",
//     "products": [
//       {
//         "name": "SLIBB",
//         "url": "https://www.ikea.com/gb/en/p/slibb-hanger-with-8-grip-clips-green-30567727/",
//         "image_urls": "https://www.ikea.com/gb/en/images/products/slibb-hanger-with-8-grip-clips-green__1232139_pe916424_s5.jpg",
//         "price": 0.5,
//         "description": "Hanger with 8 grip clips green",
//         "category_name": "Laundry accessories"
//       },
//       {
//         "name": "RENSHACKA",
//         "url": "https://www.ikea.com/gb/en/p/renshacka-clothes-cover-transparent-white-50530101/",
//         "image_urls": "https://www.ikea.com/gb/en/images/products/renshacka-clothes-cover-transparent-white__1085384_pe860087_s5.jpg",
//         "price": 0.75,
//         "description": "Clothes cover white",
//         "category_name": "Hanging clothes organisers"
//       },
// function useProducts(roomName: RoomName): { products: Room[] } {
//     const products = useMemo(() => getProducts(roomName), [roomName])
//     return { products }
// }

function getProducts(roomName: RoomName): Product[] {
    const roomData = data.find((item) => item.room_name === roomName);
    if (roomData) {
        const { products } = roomData;
        return products.sort((a, b) => a.price - b.price);
    }
    return [];
}