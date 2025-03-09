import React from "react";
import Map from "../map/Map";

const FindUs = () => {
  return (
    <div
      id="Findus"
      className="pt-[12vh] pb-[6vh] lg:px-10 flex flex-col md:items-center gap-y-3"
    >
      <h1 className="text-white leading-[1em] text-[42px] lg:text-[56px] xl:text-[64px] text-wrap w-full md:w-[70vw] lg:w-[70vw] md:text-center tracking-tighter transform">
        How to find us.
      </h1>
      <div className="w-full flex flex-col md:flex-row justify-between pt-10 gap-16">
        <div id="left-column" className="w-full md:w-[40vw]">
          <div className="flex flex-col">
            <h2 className="font-medium pb-4">Contact Information</h2>
            <p className="">07833824478</p>
            <p className="">info@trinity-physio.com</p>
            <a
              target="_blank"
              href="https://trinityphysiotherapyclinic.uk2.cliniko.com/bookings"
              className="px-6 py-2 bg-tpcBlue text-white font-semibold rounded-md text-sm w-[110px] text-center mt-2 transition-all ease-in-out duration-150 hover:bg-tpcDarkBlue"
            >
              Book Now
            </a>
          </div>
          <div className="mt-10">
            <h2 className="font-medium pb-4">Clinic Opening Hours</h2>
            <div className="w-full flex justify-between">
              <p>Monday - Wednesday</p>
              <p>5:00pm - 8:00pm</p>
            </div>
            <div className="w-full flex justify-between">
              <p>Saturday</p>
              <p>10:00am - 8:00pm</p>
            </div>
          </div>
          <div className="mt-10">
            <h2 className="font-medium pb-4">Home Visit Hours</h2>
            <div className="w-full flex justify-between">
              <p>Monday - Friday</p>
              <p>5:00pm - 9:00pm</p>
            </div>
            <div className="w-full flex justify-between">
              <p>Saturday</p>
              <p>10:00am - 9:00pm</p>
            </div>
            <div className="w-full flex justify-between">
              <p>Sunday</p>
              <p>2:00pm - 9:00pm</p>
            </div>
          </div>
        </div>
        <div id="right-column" className="w-full mt-10 md:mt-0 md:w-[45vw]">
          <Map />
          <h2 className="font-medium pb-4 mt-2">Clinic Address</h2>
          <p>
            3 Kelvin Street <br /> Manchester <br /> M4 1ET
          </p>
        </div>
      </div>
    </div>
  );
};

export default FindUs;
