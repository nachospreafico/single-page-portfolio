const SkillItem = ({ title, exp }) => {
  return (
    <div className="flex flex-col gap-2 items-start">
      <h2 className="text-[32px] md:text-[48px]  text-white font-bold md:text-left leading-10 md:leading-[56px] tracking-[-1px] md:tracking-[-1.5px]">
        {title}
      </h2>
      <p className="text-[#D9D9D9] font-medium leading-6 ">{exp}</p>
    </div>
  );
};

const Skills = () => {
  const skills = [
    {
      title: "HTML",
      exp: "4 Years Experience",
    },
    {
      title: "CSS",
      exp: "4 Years Experience",
    },
    {
      title: "JavaScript",
      exp: "4 Years Experience",
    },
    {
      title: "Accessibility",
      exp: "4 Years Experience",
    },
    {
      title: "React",
      exp: "3 Years Experience",
    },
    {
      title: "Sass",
      exp: "4 Years Experience",
    },
  ];

  return (
    <section
      id="skill"
      className="flex flex-col  items-center justify-center gap-6 skill-section md:py-7 xl:py-10 md:px-[30px] lg:px-[90px] xl:px-[165px]"
    >
      {skills.map((elem, index) => {
        return <SkillItem title={elem.title} key={index} exp={elem.exp} />;
      })}
    </section>
  );
};

export default Skills;
