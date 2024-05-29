import { useEffect, useRef, useState, } from "react";
import photo1 from "../../media/photo1.jpg";
import photo2 from "../../media/DILJIT DOSANJH (1).jpg";
import photo3 from "../../media/2ad76970-afbd-4fa9-8dfb-28475df4c7cb.jpg";
import photo4 from "../../media/Diljit Dosanjh B&W Aesthetic picture_wallpaper.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faClock } from "@fortawesome/free-solid-svg-icons";
import Qr from "../../media/qrcode.jpg";

function EventScrollpage() {
  const images = [photo1, photo2, photo3, photo4];
  const scrollRef = useRef(null);
  const scrollPadding = 150;
  const [currentIndex, setCurrentIndex] = useState(0);
  const pauseDuration = 900;
  
 
  useEffect(() => {
    const scrollToNextImage = () => {
      if (scrollRef.current) {
        const { clientWidth, scrollLeft } = scrollRef.current;
        const totalImages = images.length;

        let newScrollLeft;
        if (currentIndex === totalImages - 1) {
          newScrollLeft = scrollPadding;
        } else {
          newScrollLeft = scrollLeft + clientWidth - scrollPadding;
        }

        scrollRef.current.scrollTo({ left: newScrollLeft, behavior: "smooth" });

        setTimeout(() => {
          setCurrentIndex((currentIndex + 1) % totalImages);
        }, pauseDuration);
      }
    };

    const interval = setInterval(scrollToNextImage, pauseDuration + 800);

    return () => clearInterval(interval);
  }, [currentIndex, images.length, pauseDuration, scrollPadding]);



  return (
    <div className="flex">
      <div className="flex flex-col w-[52vw] h-full ml-42 mt-36">
        <div
          ref={scrollRef}
          className="flex flex-row gap-4 overflow-x-hidden w-[60vw]"
          style={{ paddingLeft: scrollPadding, paddingRight: scrollPadding }}
        >
          {images.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 overflow-hidden object-cover pt-28"
              style={{ width: `calc(100% - ${scrollPadding}px)` }}
            >
              <img src={item} alt={`img-${index}`} className="h-full w-full mx-6" />
            </div>
          ))}
        </div>
      
      </div>
      <div className="vertical-marquee bg-purple-500 w-[20vw]  overflow-hidden">
        <span className="text-2xl text-black font-bold animate-marquee">
          Event: Diljit Dosanjh tour in Gurgaon at the DLF CyberHub
        </span>
      </div>
      <div className="bg-slate-700 text-white flex flex-col  w-[99vw]  gap-16">
        <span className="text-3xl pt-12 mx-10 font-bold">
          Explore Your First <br /> Event
        </span>
        <div className=" gap-18 mx-10  text-2xl">
          <h2 className="text-6xl    font-bold">GOAT</h2>
          <div className="flex items-center gap-4 pt-6 text-2xl mx-4 ">
            <FontAwesomeIcon icon={faMapMarkerAlt} size="lg" />
            <span>Ebola</span>
            <FontAwesomeIcon icon={faClock} className="pl-4" />
            <span>04/3/2023</span>
          </div>
         
          <p className="pt-6 mx-4 text-xl ">
          Go ahead, book your seat and be part of this memorable experience. Feel the voice of the greatest artist 
          </p>
        </div>
        
        <span className="text-3xl pt-10 mx-10 font-bold">Artist LineUp</span>
        <div className="h-[30vh] rounded-lg relative flex items-center justify-center pt-20 ">
          <img
            src={photo1}
            className="rounded-lg w-[10vw] h-[30vh] absolute right-6 z-0"
            alt=""
          />
          <img
            src={photo1}
            className="rounded-lg w-[12vw] h-[35vh] relative z-10"
            alt=""
          />
          <img
            src={photo1}
            className="rounded-lg w-[10vw] h-[30vh] absolute left-6 z-0"
            alt=""
          />
        </div>
        <div className="flex items-center gap-28 px-6 mt-48">
          <img src={Qr} className="rounded-lg h-[15vh]" alt="" />
          <button
            type="button"
            className="text-white bg-amber-300 cursor-not-allowed font-medium rounded-lg text-lg px-5 py-2.5 text-center"
            disabled
          >
            Join Waitlist
          </button>
        </div>
      </div>
    </div>
  );
}

export default EventScrollpage;
