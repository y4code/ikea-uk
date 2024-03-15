'use client';
import Image from "next/image";

// import data from "../../public/data.json";
import { Product, Room, RoomNameContextType } from "./types";
import { createContext, useEffect, useState } from "react";
import { RoomName } from "./const";
import Logo from "@/components/logo";
import Banner from "@/components/banner";
import Category from "@/components/category";
import CardList from "@/components/card-list";

export const RoomNameContext = createContext<Partial<RoomNameContextType>>({
  // TODO: use other default type
  roomName: RoomName.Garden,
  isDarkMode: false,
});

export default function Home() {
  // TODO: use other default type
  const [roomName, setRoomName] = useState<RoomName>(RoomName.Garden);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    setIsDarkMode(
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    )
  }, []);

  return (
    <div>
      <Logo />
      <div className="sm:px-16 xl:px-48 2xl:px-64" >
        <RoomNameContext.Provider value={{ roomName, isDarkMode, setRoomName }}>
          <Banner />
          <Category />
          <CardList />
        </RoomNameContext.Provider>
      </div>
    </div>
  );
}
