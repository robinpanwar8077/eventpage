import { useEffect, useRef, useState } from "react";
import cover1 from "../../media/cover1.jpg"
import cover2 from "../../media/cover2.jpg"
import cover3 from "../../media/cover3.jpg"
import cover4 from "../../media/cover4.jpg"
import photopeople1 from "../../media/tijs-van-leur-So6YckShOVA-unsplash.jpg";
import photopeople2 from "../../media/kilian-seiler-Ex8BVJwWPDw-unsplash.jpg";
import photopeople3 from "../../media/antoine-j-rtEX0NURTIc-unsplash.jpg";
import photopeople4 from "../../media/kilian-seiler-Ex8BVJwWPDw-unsplash.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faClock } from "@fortawesome/free-solid-svg-icons";
import Qr from "../../media/qrcode.jpg";
import album1 from "../../media/Goat1.webp"
import album2 from "../../media/goat2.webp"
import photo1 from "../../media/photo1.jpg";
function CollectionScrollpage() {
  const images = [cover1, cover2, cover3, cover4];
  const scrollRef = useRef(null);
  const scrollPadding = 150;
  const [currentIndex, setCurrentIndex] = useState(0);
  const pauseDuration = 900;
 
  const scrollContainerRef = useRef(null);


  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    let isDown = false;
    let startX;
    let scrollLeft;

    const mouseDownHandler = (e) => {
      isDown = true;
      startX = e.pageX - scrollContainer.offsetLeft;
      scrollLeft = scrollContainer.scrollLeft;
    };

    const mouseLeaveHandler = () => {
      isDown = false;
    };

    const mouseUpHandler = () => {
      isDown = false;
    };

    const mouseMoveHandler = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - scrollContainer.offsetLeft;
      const walk = (x - startX) * 2; // The number 2 determines the scroll speed
      scrollContainer.scrollLeft = scrollLeft - walk;
    };

    scrollContainer.addEventListener('mousedown', mouseDownHandler);
    scrollContainer.addEventListener('mouseleave', mouseLeaveHandler);
    scrollContainer.addEventListener('mouseup', mouseUpHandler);
    scrollContainer.addEventListener('mousemove', mouseMoveHandler);

    return () => {
      scrollContainer.removeEventListener('mousedown', mouseDownHandler);
      scrollContainer.removeEventListener('mouseleave', mouseLeaveHandler);
      scrollContainer.removeEventListener('mouseup', mouseUpHandler);
      scrollContainer.removeEventListener('mousemove', mouseMoveHandler);
    };
  }, []);
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
      <div className="flex flex-col h-full   w-[52vw] ml-42 mt-36">
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
      <div className="vertical-marquee bg-purple-500 w-[12vw] overflow-hidden">
        <span className="text-2xl text-black font-bold animate-marquee">
          Event: OSIS Tour at Delhiat to devid to all person akali the llo to la
        </span>
      </div>
      <div className="bg-slate-700 text-white flex flex-col w-[80vw] gap-16">
        <span className="text-3xl pt-12 mx-16 font-bold">
          Explore Your First <br /> Collectibles
        </span>
        <div className="px-16 gap-18 text-2xl">
          <h2 className="text-6xl font-bold">Lives</h2>
          <div className="flex items-center gap-4 pt-6 text-2xl">
            <FontAwesomeIcon icon={faMapMarkerAlt} size="lg" />
            <span>Ebola</span>
            <FontAwesomeIcon icon={faClock} />
            <span>04/3/2023</span>
          </div>
          <p className="mt-6">Live in Gurgaon</p>
          <p className="pt-6">
          Best album of Diljit Dosanjh  vibe on music..
          </p>
        </div>
        <div className="flex items-center">
          <div className="flex -space-x-2 px-12">
            <img src={photopeople1} alt="Avatar 1" className="rounded-full w-8 h-8" />
            <img src={photopeople2} alt="Avatar 2" className="rounded-full w-8 h-8" />
            <img src={photopeople3} alt="Avatar 3" className="rounded-full w-8 h-8" />
            <img src={photopeople4} alt="Avatar 4" className="rounded-full w-8 h-8" />
            <span className="text-white font-bold text-xl pl-4">22k people interested</span>
          </div>
          
        </div>
        <span className="text-3xl pt-10 mx-12 font-bold">Collectibles</span>
        
        <div className="h-[37vh]  relative overflow-x-hidden  gap-2 flex items-center justify-center ml-16 pl-20" ref={scrollContainerRef}>
        <img src={photo1} className="rounded-lg w-[12vw] h-[36vh]" alt="Photo 1" />
      <img src={album1} className="rounded-lg w-[12vw] h-[36vh]" alt="Album 1" />
      <img src={album2} className="rounded-lg w-[12vw] h-[36vh]" alt="Album 2" />
     
    </div>
        <div className="flex items-center gap-28 px-6 mt-10">
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

export default CollectionScrollpage;
