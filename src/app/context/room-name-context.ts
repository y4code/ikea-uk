import { createContext } from "react";
import { RoomName } from "../const";
import { RoomNameContextType } from "../types";

export const RoomNameContext = createContext<Partial<RoomNameContextType>>({
    roomName: RoomName.All,
    isDarkMode: false,
});