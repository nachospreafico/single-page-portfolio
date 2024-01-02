import { useEffect, useState } from "react";
import { projectDataMobile, projectDataDesktop } from "./projectsData";
import ProjectItem from "./ProjectItem";
import ProjectItemLarge from "./ProjectItemLarge";

const Projects = () => {
  const [isSmall, setIsSmall] = useState(true);

  useEffect(() => {
    const handleWindowSizeChange = () => {
      setIsSmall(window.innerWidth < 1024);
    };

    window.addEventListener("resize", handleWindowSizeChange);

    setIsSmall(window.innerWidth < 1024);

    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return (
    <section
      id="projects"
      className="flex flex-col gap-10 px-4 py-20 md:py-7 xl:py-10 md:px-[30px] lg:px-[90px] xl:px-[165px]"
    >
      <div className="flex flex-row justify-between border-t-2 py-20 items-end">
        <h2 className="text-[40px] md:text-[72px] xl:text-[88px] text-white font-bold leading-10 tracking-[-1.136px]">
          Projects
        </h2>
        <button className="text-white font-bold leading-6 pb-2 border-b-4 border-green-300 tracking-[2.28px] lg:hover:text-green-300 duration-200">
          CONTACT ME
        </button>
      </div>
      {/* Mobile & Tablet Projects */}
      {isSmall && (
        <div
          style={{
            gridTemplateColumns: "1fr 1fr",
            alignContent: "center",
            justifyItems: "center",
          }}
          className="flex flex-col justify-center items-center gap-10 md:grid"
        >
          {projectDataMobile.map((elem, index) => {
            return (
              <ProjectItem
                title={elem.title}
                img={elem.img}
                techs={elem.techs}
                key={index}
              />
            );
          })}
        </div>
      )}

      {/* Desktop Projects */}
      {!isSmall && (
        <div
          style={{
            alignContent: "center",
            justifyItems: "center",
            columnGap: "24px",
            rowGap: "69px",
          }}
          className="grid grid-cols-2 items-center justify-center"
        >
          {projectDataDesktop.map((elem, index) => {
            return (
              <ProjectItemLarge
                title={elem.title}
                key={index}
                img={elem.img}
                techs={elem.techs}
              />
            );
          })}
        </div>
      )}
    </section>
  );
};

export default Projects;
