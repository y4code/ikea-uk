import { RoomColorMap, RoomMap, RoomName } from "@/app/const";
import { RoomNameContext } from "@/app/page";
import Image from "next/image";
import { useContext } from "react";

export default function Banner() {
  const { roomName, isDarkMode } = useContext(RoomNameContext);
  const bgColor = RoomColorMap[roomName as RoomName];

  return (
    <div
      className={`h-72 sm:h-44 sm:rounded-md  w-full dark:bg-dark-black dark:sm:bg-dark-black bg-cover relative bg-[url('/hero-bg.png')] lg:bg-[url('/hero-bg-lg.png')] transition-all duration-200`}
      style={{ backgroundColor: `${isDarkMode ? "#35363a" : bgColor}` }}
    >
      <div className="sm:hidden absolute bottom-0 left-0 h-24 w-full bg-gradient-to-b from-ikea-orange/0 to-[#f2f2f2] dark:to-dark-black" />
      <div className="h-40 relative text-white flex flex-col items-center justify-end ">
        <div className="flex">
          <Image
            width={14}
            height={30}
            src="/icons/award-left.svg"
            alt={"award-left"}
            style={{
              width: 14,
              height: 30,
              maxWidth: "100%",
            }} />
          <span className="font-bold text-2xl mx-3">IKEA Special Offers</span>
          <Image
            width={14}
            height={30}
            src="/icons/award-right.svg"
            alt={"award-right"}
            style={{
              width: 14,
              height: 30,
              maxWidth: "100%",
            }} />
        </div>
        <div className="font-bold text-3xl mt-1">
          {RoomMap[roomName as RoomName]}
        </div>
        <div className="text-white text-xs mt-8 font-normal">
          Data from IKEA Official Website | Updated Weekly
        </div>
      </div>
    </div>
  );
}
