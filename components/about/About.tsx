import { expertCards } from "@/constants";
import { Card, CardContent } from "@/components/ui/card";
import Separator from "../separator/Separator";

const About = () => {
  return (
    <div className="pt-[12vh] pb-[6vh] flex flex-col md:items-center gap-y-3">
      <h1 className="text-white leading-[1em] text-[42px] lg:text-[56px] xl:text-[64px] text-wrap w-full md:w-[70vw] lg:w-[70vw] md:text-center tracking-tighter transform">
        Meet our{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-tpcBlue via-tpcBlue to-white">
          Experts.
        </span>
      </h1>
      <h2 className="text-tpcGray leading-tight md:text-center md:w-[50vw] lg:w-[30vw]">
        Meet our expert physiotherapists, dedicated to helping you move better
        with personalized, evidence-based care.
      </h2>
      <div className="flex flex-col lg:flex-row gap-16 justify-center items-center w-full pt-10">
        {expertCards.map((expert) => (
          <Card
            key={expert.name}
            className="border-none bg-none flex flex-col items-center gap-5 shadow-none"
          >
            <CardContent className="p-0">
              <img
                className="w-[80vw] md:w-[35vw] lg:w-[80vw] xl:min-w-[20vw] xl:max-w-[20vw] h-[50vh] rounded-md"
                src={expert.picture}
                alt={expert.picture}
              />
            </CardContent>
            <p className="text-[18px] lg:text-[20px] font-semibold">
              {expert.name}
            </p>
          </Card>
        ))}
      </div>
      <Separator />
      <h1 className="text-white leading-[1em] text-[42px] lg:text-[56px] xl:text-[64px] text-wrap w-full md:w-[70vw] lg:w-[70vw] md:text-center tracking-tighter transform pt-[6vh]">
        Helping You Move Freely and{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-tpcBlue via-tpcBlue to-white">
          Feel Your Best.
        </span>
      </h1>
      <h2 className="text-tpcGray leading-tight md:text-center md:w-[50vw] lg:w-[30vw]">
        Find out more about who we are here at Trinity Physiotherapy Clinic and
        what motivates us to bring out the best in you.
      </h2>
    </div>
  );
};

export default About;
