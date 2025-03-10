import { expertCards, aboutCards } from "@/constants";
import { Card, CardContent } from "@/components/ui/card";
import Separator from "../separator/Separator";

const About = () => {
  return (
    <div
      id="About"
      className="pt-[12vh] pb-[6vh] flex flex-col md:items-center gap-y-3"
    >
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
      <div className="flex flex-col lg:flex-row gap-16 justify-center items-center w-full py-10">
        {expertCards.map((expert) => (
          <Card
            key={expert.name}
            className="border-none bg-none flex flex-col items-center gap-5 shadow-none"
          >
            <CardContent className="p-0">
              <img
                className="w-[80vw] md:w-[40vw] lg:w-[80vw] xl:min-w-[18vw] xl:max-w-[18vw] h-[50vh] rounded-md"
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
      <div className="flex flex-col md:flex-row gap-10 pt-10">
        {aboutCards.map((card) => (
          <Card
            key={card.title}
            className="w-full md:w-[40vw] lg:w-[35vw] xl:h-[20vw] border-none bg-tpcBento flex flex-col items-center gap-5 shadow-none"
          >
            <CardContent className="py-5">
              <h1 className="h-[100px] lg:h-[75px] xl:h-[50px] xl:w-[100%] leading-tight text-[32px] text-transparent bg-clip-text bg-gradient-to-r from-tpcBlue via-tpcBlue to-white">
                {card.title}
              </h1>
              <p className="pt-2 leading-tight text-[16px] xl:text-[20px]">
                {card.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default About;
