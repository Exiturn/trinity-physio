type navItemsT = {
  name: string;
  href: string;
};

type socialMediaIconT = {
  name: string;
  src: string;
  href: string;
  width?: string;
};

export const navItems: navItemsT[] = [
  {
    name: "Home",
    href: "#Home",
  },
  {
    name: "Services",
    href: "#Services",
  },
  {
    name: "Testimonials",
    href: "#Testimonials",
  },
  {
    name: "About",
    href: "#About",
  },
  {
    name: "Find Us",
    href: "#Find",
  },
];

export const socialMediaIcons: socialMediaIconT[] = [
  {
    name: "Facebook",
    src: "/assets/fb-icon.webp",
    href: "https://facebook.com",
  },
  {
    name: "Instagram",
    src: "/assets/ig-icon.webp",
    href: "https://instagram.com",
  },
  {
    name: "TikTok",
    src: "/assets/tt-icon.webp",
    href: "https://tiktok.com",
    width: "w-[1.5em]",
  },
];
