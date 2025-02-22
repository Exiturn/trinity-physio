import { servicesBento } from "@/constants";

const Services = () => {
  return (
    <div className="h-screen pt-[12vh]">
      <h1 className="text-white leading-[1em] text-[32px] lg:text-[56px] xl:text-[64px] text-wrap w-full">
        Our range of services to help you get{" "}
        <span className="text-transparent bg-[length:100%] bg-clip-text bg-gradient-to-r from-tpcBlue via-tpcBlue to-white">
          back to your best.
        </span>
      </h1>
      <h2>
        Reach out to us today to learn more about how physiotherapy can make a
        difference in your life. Take the first step towards a pain-free, active
        future.
      </h2>
      <div className="flex flex-col md:grid grid-cols-12 grid-rows-5">
        {servicesBento.map((service) => (
          <div key={service.name}>{service.name}</div>
        ))}
      </div>
    </div>
  );
};

export default Services;
