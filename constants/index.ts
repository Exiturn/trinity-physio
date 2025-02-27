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
  href?: string;
  id: number;
};

type reviewsT = {
  name: string;
  rating: number;
  text: string;
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
  {
    name: "Book Now",
    id: 7,
    href: "https://trinityphysiotherapyclinic.uk2.cliniko.com/bookings",
  },
];

export const reviewCards: reviewsT[] = [
  {
    name: "Aisha Malik",
    rating: 5,
    text: "Wonderful experience at Trinity! The staff are knowledgeable, and I noticed a huge improvement after a few sessions. Highly recommend!",
  },
  {
    name: "James O’Connor",
    rating: 5,
    text: "Top-notch service! My back pain is so much better thanks to the expert care I received. Best clinic I’ve been to.",
  },
  {
    name: "Priya Patel",
    rating: 5,
    text: "Trinity’s support was amazing. Professional, kind, and tailored treatment. I’m now pain-free!",
  },
  {
    name: "Kwame Mensah",
    rating: 5,
    text: "Fantastic experience! The team is warm and helped me recover from a sports injury quickly. Highly recommend!",
  },
  {
    name: "Elena Rossi",
    rating: 5,
    text: "Great experience at Trinity! Friendly staff, clear guidance, and a comfortable atmosphere. Very grateful!",
  },
];
