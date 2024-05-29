import CollectionScrollpage from "./CollectionScrollpage";
import EventScrollpage from "./EventScrollpage";
import { useState } from "react";

function Mainpage() {
  const [activeButton, setActiveButton] = useState("events");

  const handleButtonClick = (buttonType) => {
    setActiveButton(buttonType);
  };

  return (
    <div className="bg-black w-full h-screen px-12 overflow-hidden relative">
      <div
        className="bg-gray-800 w-full h-full overflow-y-scroll"
        style={{ "-ms-overflow-style": "none", "scrollbar-width": "none" }}
      >
        <nav className="p-4">
          <a className="text-yellow-500 p-2 text-lg font-extrabold sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
            Astrix .
          </a>
        </nav>
        <div className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold text-slate-700 flex flex-col gap-28 px-8 mt-24 relative">
          <div>
            <span>ASTR</span>
            <br />
            <span>IX</span>
          </div>

          <div className="absolute inset-x-0" style={{ top: "-169px", zIndex: 10 }}>
            {activeButton === "events" ? (
              <EventScrollpage className="text-white text-lg" />
            ) : (
              <CollectionScrollpage />
            )}
          </div>

          <div>
            <span>EVE</span>
            <br />
            <span>NTS</span>
          </div>
          <div className="w-72 flex bg-gray-400 justify-between h-16 rounded-full cursor-pointer mt-52 ml-24 mb-6 relative z-20">
            <button
              onClick={() => handleButtonClick("events")}
              className={`${
                activeButton === "events" ? "bg-gray-700" : ""
              } text-white font-bold text-xl h-full w-full rounded-full cursor-pointer`}
            >
              Events
            </button>
            <button
              onClick={() => handleButtonClick("collections")}
              className={`${
                activeButton === "collections" ? "bg-gray-700" : ""
              } text-white font-bold text-xl h-full w-full rounded-full cursor-pointer`}
            >
              Collections
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mainpage;
