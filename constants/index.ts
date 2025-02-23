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

type servicesBentoT = {
  name: string;
  colSpan?: string;
  rowSpan?: string;
  id: number;
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

export const servicesBento: servicesBentoT[] = [
  {
    name: "Injury Assessment & Treatment",
    id: 1,
    colSpan: "col-span-3",
    rowSpan: "row-span-3",
  },
  {
    name: "Musculoskeletal Physiotherapy",
    id: 2,
    colSpan: "col-span-2",
  },
  {
    name: "Post-Surgery Rehabilitation",
    id: 3,
    colSpan: "col-span-2",
  },
  {
    name: "Chronic Pain Management",
    id: 4,
    colSpan: "col-span-3",
    rowSpan: "row-span-3",
  },
  {
    name: "Deep Tissue Massage",
    id: 5,
    rowSpan: "row-start-2 row-span-2",
  },
  {
    name: "Home Visit Physiotherapy",
    id: 6,
  },
];
