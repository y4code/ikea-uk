import { RoomMap, RoomName } from "@/app/const";
import { RoomNameContext } from "@/app/page";
import { useContext } from "react";

export default function Category() {
    const { setRoomName, roomName: room } = useContext(RoomNameContext);

    return (
        <div className="px-4 sm:px-0 flex overflow-x-auto -mt-24 sm:mt-8 sm:mb-8 z-10 relative scrollbar-hide">

            {Object.keys(RoomMap).map((key) => (
                <button
                    role="button"
                    key={key}
                    onClick={() => setRoomName && setRoomName(key as RoomName)}
                    className={` rounded-full px-4 py-2 w-fit h-fit shrink-0 w-100 mx-2 ${room === key ? "bg-black text-white" : "bg-white text-black "
                        }`}
                >
                    {RoomMap[key as RoomName]}
                </button>
            ))}
        </div>
    );
}
