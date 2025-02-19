const Navbar = () => {
  return (
    <nav className="sticky top-0 w-full h-min bg-transparent pt-[0.675rem] md:pt-5 flex justify-between items-center">
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
      <ul className="hidden md:flex gap-10 justify-center h-full">
        <li className="cursor-pointer hover:underline">Home</li>
        <li className="cursor-pointer hover:underline">Services</li>
        <li className="cursor-pointer hover:underline">Testimonials</li>
        <li className="cursor-pointer hover:underline">About Us</li>
        <li className="cursor-pointer hover:underline">Find Us</li>
      </ul>
      <a
        href=""
        className="px-6 py-2 bg-white text-black font-semibold rounded-md"
      >
        Book Now
      </a>
    </nav>
  );
};

export default Navbar;
