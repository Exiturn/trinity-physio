import { servicesBento } from "@/constants";

const Services = () => {
  return (
    <div className="pt-[12vh] pb-[6vh] flex flex-col md:items-center gap-y-3">
      <h1 className="text-white leading-[1em] text-[32px] lg:text-[56px] xl:text-[64px] text-wrap w-full md:w-[70vw] lg:w-[50vw] md:text-center">
        Our range of services to help you get{" "}
        <span className="text-transparent bg-[length:100%] bg-clip-text bg-gradient-to-r from-tpcBlue via-tpcBlue to-white">
          back to your best.
        </span>
      </h1>
      <h2 className="text-tpcGray leading-tight md:text-center md:w-[50vw] lg:w-[30vw]">
        Reach out to us today to learn more about how physiotherapy can make a
        difference in your life. Take the first step towards a pain-free, active
        future.
      </h2>
      <div className="pt-5 flex flex-col gap-2 lg:gap-5 md:grid grid-cols-10 md:grid-rows-5 md:auto-rows-[200px] h-[60vh]">
        {servicesBento.map((service) => (
          <div
            className={`px-2 lg:px-4 py-6 bg-tpcBento rounded-md text-center text-wrap text-[20px] lg:text-[24px] flex justify-center items-center transition-all ease-in-out duration-150 hover:bg-tpcBlue hover:text-tpcBento ${
              service.rowSpan
            } ${service.colSpan} ${
              service.id == 6 && "col-span-full row-start-4 row-span-2"
            } ${service.id == 5 && "col-span-4"}`}
            key={service.name}
          >
            {service.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
