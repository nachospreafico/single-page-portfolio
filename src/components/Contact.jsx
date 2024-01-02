import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="bg-[#242424]">
      <div
        style={{ gridTemplateColumns: "1fr 1fr" }}
        className="p-4 py-[60px] flex flex-col items-center justify-center m-auto gap-5 max-w-[445px] lg:max-w-[600px] xl:max-w-full xl:grid xl:gap-32 md:py-7 xl:py-10 md:px-[30px] lg:px-[90px] xl:px-[165px]"
      >
        <div className="flex flex-col gap-5  mb-5">
          <h1 className="text-white text-[40px] md:text-[72px] leading-[40px] md:leading-[72px] xl:text-[88px]  xl:leading-[88px] tracking-[-1.136px] md:tracking-[-2.045px] xl:tracking-[-2.5px] font-bold text-center xl:text-left">
            Contact
          </h1>
          <p className="text-[16px] md:text-[18px] font-medium leading-[26px] md:leading-[28px] text-[#D9D9D9] text-center xl:text-left">
            I would love to hear about your project and how I could help. Please
            fill in the form, and I’ll get back to you as soon as possible.
          </p>
        </div>
        <form className="w-full flex flex-col gap-8 justify-end items-end">
          <input
            type="text"
            placeholder="NAME"
            className="border-b-2 py-4 px-6 bg-transparent w-full text-white"
          ></input>
          <input
            type="email"
            placeholder="EMAIL"
            className="border-b-2 py-4 px-6 bg-transparent w-full text-white"
          ></input>
          <textarea
            rows={3}
            placeholder="MESSAGE"
            className="border-b-2 py-4 px-6 bg-transparent w-full text-white"
          ></textarea>
          <button
            type="button"
            className="text-white w-fit lg:hover:text-green-300 duration-200  font-bold leading-6 pb-2 border-b-4 border-green-300 tracking-[2.28px]"
          >
            SEND MESSAGE
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
