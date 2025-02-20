import { socialMediaIcons } from "@/constants";

const Hero: React.FC = () => {
  return (
    <div className="w-full h-[100vh] flex flex-col justify-center items-start gap-y-[3em]">
      <h1 className="text-white leading-[1em] text-[43px] text-wrap w-full">
        Empowering your recovery through{" "}
        <span className="text-transparent bg-[length:100%] bg-clip-text bg-gradient-to-r from-tpcBlue via-tpcBlue to-white">
          Personalised Physiotherapy
        </span>
        .
      </h1>

      <div className="flex w-full gap-x-[1em]">
        <a
          target="_blank"
          href="https://trinityphysiotherapyclinic.uk2.cliniko.com/bookings"
          className="px-6 py-2 bg-white text-black font-semibold rounded-md text-sm"
        >
          Book Now
        </a>
        <a
          target="_blank"
          href="https://trinityphysiotherapyclinic.uk2.cliniko.com/bookings"
          className="px-6 py-2 bg-white rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 border border-gray-100 text-sm"
        >
          About Us
        </a>
      </div>

      <h2 className="text-[14px]">
        Trinity Physiotherapy empowers people on their journey to recovery with
        evidence-based care guided by excellence, compassion, and innovation —
        so our clients can keep doing what they love.
      </h2>

      <ul className="flex gap-4">
        {socialMediaIcons.map((icon) => (
          <a target="_blank" key={icon.name} href={icon.href}>
            <img
              className={icon.name == "TikTok" ? "w-[1em]" : "w-[1.2em]"}
              src={icon.src}
              alt={icon.name}
            />
          </a>
        ))}
      </ul>
    </div>
  );
};

export default Hero;
