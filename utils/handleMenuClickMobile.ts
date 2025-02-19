const handleClickMobile = (
  e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  setFunction: React.Dispatch<React.SetStateAction<boolean>>
) => {
  e.preventDefault();

  const href = e.currentTarget.getAttribute("href");
  if (!href) return;

  if (href.startsWith("#")) {
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);

    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setFunction((prevState) => !prevState);
    } else {
      console.error(`Element with ID "${targetId}" not found.`);
    }
  } else {
    window.open(href, "_blank");
  }
};

export default handleClickMobile;
