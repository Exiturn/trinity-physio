import { servicesBento } from "@/constants";

const Services = () => {
  return (
    <div
      id="Services"
      className="pt-[12vh] pb-[6vh] flex flex-col md:items-center gap-y-3"
    >
      <h1 className="text-white leading-[1em] text-[42px] lg:text-[56px] xl:text-[64px] text-wrap w-full md:w-[70vw] lg:w-[70vw] md:text-center tracking-tighter transform">
        Our range of services to help you get <br className="hidden xl:block" />
        <span className="text-transparent h-full bg-gradient-to-r from-tpcBlue via-tpcBlue to-white bg-clip-text">
          back to your best.{" "}
        </span>
      </h1>
      <h2 className="text-tpcGray leading-tight md:text-center md:w-[50vw] lg:w-[30vw]">
        Reach out to us today to learn more about how physiotherapy can make a
        difference in your life. Take the first step towards a pain-free, active
        future.
      </h2>
      <div className="xl:w-[75vw] pt-5 flex flex-col flex-wrap items-center justify-center md:flex-row gap-2 lg:gap-5">
        {servicesBento.map((service) => (
          <div
            className={`px-2 lg:px-4 py-6 font-semibold rounded-md text-center text-wrap text-[20px] lg:text-[24px] flex justify-center items-center transition-all ease-in-out duration-150
                ${
                  service.id == 7
                    ? "bg-white text-black font-semibold cursor-pointer hover:bg-tpcDarkBlue hover:text-white w-full md:w-[50%]"
                    : "w-full md:w-[35%] lg:h-[20vh] bg-tpcBento text-tpcLighterBlue hover:bg-tpcBlue hover:text-white"
                }`}
            key={service.name}
          >
            {service.href ? (
              <a target="_blank" href={service.href}>
                {service.name}
              </a>
            ) : (
              <span className="pointer-events-none">{service.name}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
