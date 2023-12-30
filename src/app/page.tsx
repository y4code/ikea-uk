import Image from "next/image";

import data from "../../public/data.json";
import { Product, Room } from "./types";

export default function Home() {
  const rooms: Room[] = data;
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        {data.map((room, i) => {
          return room.products.map((product: Product, j) => {
            return (
              <a
                key={j}
                className="h-40 flex bg-white mb-6 sm:mb-0 rounded-xl p-2 relative"
                href={product.url}
              >
                <Image
                  alt={product.name}
                  key={j}
                  objectFit="contain"
                  width={120}
                  height={120}
                  src={product.image_urls}
                  placeholder="blur"
                  blurDataURL="https://tressays.files.wordpress.com/2015/09/test-clip-art-cpa-school-test.png"
                />
                <div className="ml-2 py-3 flex flex-col justify-between w-2/3">
                  <div className="font-bold">{product.name}</div>
                  <div className="text-sm text-gray-400 w-2/3">
                    {product.description}
                  </div>
                  <div className="bg-[#FFD800] font-bold px-3 py-1 w-fit shadow-[3px_3px_0px_rgba(250,0,0,1)]">
                    <span className="text-xs">¥</span>
                    <span className="ml-1">{product.price}</span>
                  </div>
                  <div className="absolute right-4 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    {/* <Image src={produc} height={12} width={8} /> */}
                  </div>
                </div>
              </a>
            );
          });
        })}
      </div>
    </main>
  );
}
