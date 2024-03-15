'use client';
import { useEffect, useState } from "react";
import { RoomName } from "./const";
import Logo from "@/components/logo";
import Banner from "@/components/banner";
import Category from "@/components/category";
import CardList from "@/components/card-list";
import { RoomNameContext } from "./context/room-name-context";


export default function Home() {
  const [roomName, setRoomName] = useState<RoomName>(RoomName.All);
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
