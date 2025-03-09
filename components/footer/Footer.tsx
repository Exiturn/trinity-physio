import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="pt-[15vh] w-full">
      <div className="w-full flex justify-between items-center">
        <figure className="flex items-center">
          <img
            className="min-w-[3.5em] max-w-[3.5em]"
            src="/assets/tpc-logo.webp"
            alt="Trinity Physiotherapy Clinic Logo"
          />
          <header>
            <h1 className="font-semibold pt-1 text-[12px]">
              Trinity <br /> Physiotherapy <br /> Clinic
            </h1>
          </header>
        </figure>
        <Link
          className="px-6 py-2 bg-tpcBlue text-white font-semibold rounded-md text-[14px] transition-all ease-in-out duration-150 hover:bg-tpcDarkBlue text-center h-fit"
          href={"/contact"}
        >
          Get In Touch
        </Link>
      </div>
      <div className="w-full flex flex-col md:flex-row justify-between items-center mt-2 text-tpcGray text-[10px] md:text-[12px]">
        <p>©Trinity Physiotherapy Clinic. All rights reserved.</p>
        <p>
          Designed & Developed by{" "}
          <span className="underline hover:cursor-pointer">
            <a target="_blank" href="https://brymagistrado.vercel.app/">
              OpenAxis Studios©
            </a>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
