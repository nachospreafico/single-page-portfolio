import FrontendMentor from "./../assets/images/icon-frontend-mentor.svg";
import GitHub from "./../assets/images/icon-github.svg";
import Linkedin from "./../assets/images/icon-linkedin.svg";
import Twitter from "./../assets/images/icon-twitter.svg";

const NavBar = ({ bg }) => {
  const socials = [GitHub, FrontendMentor, Linkedin, Twitter];

  return (
    <nav
      className={`${
        bg && `bg-${bg}`
      } flex flex-col md:flex-row justify-center md:justify-between items-center gap-5 py-5 md:py-7 xl:py-10 md:px-[30px] lg:px-[90px] xl:px-[165px]`}
    >
      <p className="text-white font-bold leading-8 tracking-[-0.333px] text-[24px] cursor-pointer  lg:hover:scale-110 duration-200">
        adamkeyes
      </p>
      <div className="flex flex-row gap-5">
        {socials.map((elem, index) => {
          return (
            <img
              src={elem}
              alt="social icon"
              key={index}
              className={`w-5 cursor-pointer lg:hover:scale-110 duration-200`}
            ></img>
          );
        })}
      </div>
    </nav>
  );
};

export default NavBar;
