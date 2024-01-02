import FrontendMentor from "./../assets/images/icon-frontend-mentor.svg";
import GitHub from "./../assets/images/icon-github.svg";
import Linkedin from "./../assets/images/icon-linkedin.svg";

const Footer = () => {
  return (
    <footer className="bg-gray-500 py-2 flex flex-col gap-1">
      <p className="text-center text-sm">
        Developed by <span className="font-bold">Nacho Spreafico</span>
      </p>
      <div className="w-full flex items-center justify-center gap-4">
        <a
          href="https://www.linkedin.com/in/ignacio-spreafico"
          target="_blank"
          className="cursor-pointer flex items-center justify-center"
        >
          <img
            src={Linkedin}
            alt="social icon"
            className={`w-5 cursor-pointer lg:hover:scale-110 duration-200`}
          ></img>
        </a>
        <a
          href="https://www.github.com/nachospreafico"
          target="_blank"
          className="cursor-pointer flex items-center justify-center"
        >
          <img
            src={GitHub}
            alt="social icon"
            className={`w-5 cursor-pointer lg:hover:scale-110 duration-200`}
          ></img>
        </a>
        <a
          href="https://www.nachospreafico.com"
          target="_blank"
          className="cursor-pointer flex items-center justify-center"
        >
          <img
            src={FrontendMentor}
            alt="social icon"
            className={`w-5 cursor-pointer lg:hover:scale-110 duration-200`}
          ></img>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
