import { useState } from "react";

const ProjectItemLarge = ({ title, techs, img }) => {
  const [hover, setHover] = useState(false);

  return (
    <div className="flex flex-col gap-2">
      {/* Project overlay & Img Container*/}

      <div
        className="relative overflow-hidden mb-3"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {hover && (
          <div className="absolute bg-black/60 h-full w-full flex flex-col gap-12 justify-center items-center">
            <button className="text-white hover:text-green-300 duration-200 font-bold leading-6 pb-2 border-b-4 border-green-300 tracking-[2.28px]">
              VIEW PROJECT
            </button>
            <button className="text-white hover:text-green-300 duration-200  font-bold leading-6 pb-2 border-b-4 border-green-300 tracking-[2.28px]">
              VIEW CODE
            </button>
          </div>
        )}
        <img
          src={img}
          alt="project thumbnail"
          className="max w-[545px] h-auto object-contain"
        />
      </div>

      <h1 className="text-[24px] text-white font-bold leading-8">{title}</h1>
      <p className="text-[#D9D9D9] text-[18px] font-medium leading-7">
        {techs}
      </p>
    </div>
  );
};

export default ProjectItemLarge;
