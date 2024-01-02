const ProjectItem = ({ title, techs, img }) => {
  return (
    <div className="flex flex-col gap-2">
      <img
        src={img}
        alt="project thumbnail"
        className="max w-[350px] h-auto object-cover mb-3"
      />
      <h1 className="text-[24px] text-white font-bold leading-8">{title}</h1>
      <p className="text-[#D9D9D9] text-[18px] font-medium leading-7">
        {techs}
      </p>
      <div className="flex flex-row gap-8">
        <button className="text-white font-bold leading-6 pb-2 border-b-4 border-green-300 tracking-[2.28px]">
          VIEW PROJECT
        </button>
        <button className="text-white font-bold leading-6 pb-2 border-b-4 border-green-300 tracking-[2.28px]">
          VIEW CODE
        </button>
      </div>
    </div>
  );
};

export default ProjectItem;
