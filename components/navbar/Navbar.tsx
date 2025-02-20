"use client";

import { navItems, socialMediaIcons } from "@/constants";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
import { throttle } from "lodash";
import handleMenuClick from "@/utils/handleMenuClick";
import MenuSvg from "../menuSvg/MenuSvg";

const Navbar: React.FC = () => {
  const navRefDesktop = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  useGSAP(() => {
    let lastScrollY = window.scrollY;
    const negativeYDesktop = (navRefDesktop.current?.offsetHeight ?? 0) * -1;
    let ticking = false;

    const handleScroll = throttle(() => {
      const currentScrollY = window.scrollY;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (
            currentScrollY < lastScrollY &&
            currentScrollY < window.innerHeight
          ) {
            gsap.set("#DesktopNavbar", { translateY: 0 });
          } else if (currentScrollY > lastScrollY) {
            gsap.set("#DesktopNavbar", { translateY: negativeYDesktop - 20 });
          }
          lastScrollY = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    }, 200);

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useGSAP(() => {
    const tl = gsap.timeline();
    if (isOpen) {
      tl.to("#MobileMenu", { opacity: 1, duration: 0.2 });
      tl.to("#MobileMenu", { translateX: "0", duration: 0.75 }, 0.2);
    } else if (!isOpen) {
      tl.to("#MobileMenu", { opacity: 0, duration: 0.5 });
      tl.set("#MobileMenu", { translateX: "100%" });
    }
  }, [isOpen]);

  const handleIconClick = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <nav
      id="nav"
      className="fixed z-10 top-0 left-0 w-full h-min bg-transparent pt-[0.675rem] px-5 md:px-7 lg:px-5 md:pt-5 flex items-center"
    >
      <div
        id="DesktopNavbar"
        ref={navRefDesktop}
        className="w-full hidden lg:flex justify-between items-center translate-y-[0] transition-all duration-300 ease-in-out will-change-transform"
      >
        <figure className="flex">
          <img
            className="min-w-[4em] max-w-[4em]"
            src="/assets/tpc-logo.webp"
            alt="Trinity Physiotherapy Clinic Logo"
          />
          <header className="hidden md:block">
            <h1 className="font-semibold pt-1">
              Trinity <br /> Physiotherapy <br /> Clinic
            </h1>
          </header>
        </figure>
        <ul className="hidden lg:flex gap-7 justify-center h-full">
          {navItems.map((item) => (
            <li className="cursor-pointer hover:underline" key={item.name}>
              {item.name}
            </li>
          ))}
        </ul>
        <a
          target="_blank"
          href="https://trinityphysiotherapyclinic.uk2.cliniko.com/bookings"
          className="hidden md:block px-6 py-2 bg-white text-black font-semibold rounded-md"
        >
          Book Now
        </a>
      </div>

      <div
        id="MobileNavbar"
        className="flex w-full lg:hidden items-center justify-between"
      >
        <figure className="flex">
          <img
            className="min-w-[4em] max-w-[4em]"
            src="/assets/tpc-logo.webp"
            alt="Trinity Physiotherapy Clinic Logo"
          />
          <header className="hidden md:block">
            <h1 className="font-semibold pt-1">
              Trinity <br /> Physiotherapy <br /> Clinic
            </h1>
          </header>
        </figure>
        <div
          onClick={handleIconClick}
          className="w-[50px] h-[50px] mt-3 mr-3 rounded-full text-black p-3 bg-tpcBento pointer-events-auto flex lg:hidden z-10"
        >
          <MenuSvg />
        </div>
      </div>

      <div
        id="MobileMenu"
        className="fixed top-0 right-0 px-2 py-2 pointer-events-auto bg-transparent w-[100vw] h-[90vh] lg:hidden block z-[5] transition-all ease-[cubic-bezier(.16,1,.3,1)] translate-x-[100%] will-change-transform"
      >
        <div className="w-full h-full rounded-md bg-tpcBento px-10 pt-2 pb-5 flex flex-col justify-between">
          <figure className="flex">
            <img
              className="min-w-[4em] max-w-[4em]"
              src="/assets/tpc-logo.webp"
              alt="Trinity Physiotherapy Clinic Logo"
            />
          </figure>

          <ul>
            {navItems.map((item) => (
              <li className="py-2" key={`${item.name}_mobile`}>
                <a className="text-3xl" href={item.href}>
                  {item.name}
                </a>
              </li>
            ))}
            <a
              target="_blank"
              href="https://trinityphysiotherapyclinic.uk2.cliniko.com/bookings"
              className="block md:hidden px-6 py-2 mt-10 bg-tpcDarkBlue text-white rounded-md w-fit"
            >
              Book Now
            </a>
          </ul>

          <ul className="flex gap-3">
            {socialMediaIcons.map((icon) => (
              <a target="_blank" key={icon.name} href={icon.href}>
                <img
                  className={icon.name == "TikTok" ? "w-[1.5em]" : "w-[1.7em]"}
                  src={icon.src}
                  alt={icon.name}
                />
              </a>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
