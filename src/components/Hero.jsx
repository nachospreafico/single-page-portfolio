import { useEffect, useState } from "react";
import MobileProfile from "./../assets/images/image-profile-mobile.webp";
import TabletProfile from "./../assets/images/image-profile-tablet.webp";
import DesktopProfile from "./../assets/images/image-profile-desktop.webp";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const handleWindowSizeChange = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleWindowSizeChange);

    setIsMobile(window.innerWidth < 768);

    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);
  return (
    <main>
      {/* Mobile hero section */}
      {isMobile && (
        <div className="flex flex-col items-center justify-center gap-6 px-4 pb-[92px]">
          <img
            src={MobileProfile}
            alt="profile picture"
            className="object-cover w-44 mb-3"
          ></img>
          <div className="flex flex-col justify-center items-center gap-6 m-auto max-w-[344px]">
            <h1 className="text-[40px] font-bold leading-10 tracking-[-1.136px] text-center text-white">
              Nice to meet you! <br></br> I’m{" "}
              <span className="border-b-4 border-green-300">Adam Keyes</span>.
            </h1>
            <p className="font-mono text-center text-[1rem] font-medium leading-6 text-[#D9D9D9]">
              Based in the UK, I’m a front-end developer passionate about
              building accessible web apps that users love.
            </p>
            <button className="text-white font-bold leading-6 pb-2 border-b-4 border-green-300 tracking-[2.28px]">
              CONTACT ME
            </button>
          </div>
        </div>
      )}

      {/* Tablet & Desktop Hero */}
      {!isMobile && (
        <div className="flex justify-start items-start md:py-7 xl:py-10 md:px-[30px] lg:px-[90px] xl:px-[165px] mb-40">
          <picture>
            <source media="(min-width: 1280px)" srcSet={DesktopProfile} />
            <img
              src={TabletProfile}
              alt="profile picture"
              className="absolute right-0 xl:right-[165px] top-0 z-[-1] md:w-[322px] xl:w-[445px]"
            />
          </picture>
          <div className="flex flex-col items-start gap-10 xl:gap-12 pr-[305px]  pt-5">
            <h1 className="w-[445px] xl:w-[710px] text-[72px] xl:text-[88px] font-bold leading-[72px] xl:leading-[88px] tracking-[-2.045px] xl:tracking-[-2.5px]  text-white">
              Nice to meet you! I’m{" "}
              <span className="border-b-4 border-green-300">Adam Keyes</span>.
            </h1>
            <p className="font-mono w-[445px] text-[1rem] font-medium leading-6 text-[#D9D9D9]  xl:mb-5">
              Based in the UK, I’m a front-end developer passionate about
              building accessible web apps that users love.
            </p>
            <button className="text-white font-bold leading-6 pb-2 border-b-4 border-green-300 tracking-[2.28px] lg:hover:text-green-300 duration-200">
              CONTACT ME
            </button>
          </div>
        </div>
      )}
    </main>
  );
};

export default Hero;
