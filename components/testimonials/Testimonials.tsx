import { reviewCards } from "@/constants";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Testimonials = () => {
  return (
    <div className="pt-[12vh] pb-[6vh] flex flex-col md:items-center gap-y-3">
      <h1 className="text-white leading-[1em] text-[42px] lg:text-[56px] xl:text-[64px] text-wrap w-full md:w-[70vw] lg:w-[70vw] md:text-center tracking-tighter transform">
        What our clients think about <br className="hidden lg:block" />
        <span className="text-transparent bg-[length:100%] bg-clip-text bg-gradient-to-r from-tpcBlue via-tpcBlue to-white">
          our work.
        </span>
      </h1>
      <h2 className="text-tpcGray leading-tight md:text-center md:w-[50vw] lg:w-[30vw]">
        Don’t just take our word for it, have a look at what our past clients
        have written about their experience with us:
      </h2>
      <Carousel className="w-full md:w-[70vw]">
        <CarouselContent>
          {reviewCards.map((review) => (
            <CarouselItem
              className="basis-[80vw] md:basis-[50vw] lg:basis-[35vw]"
              key={review.name}
            >
              <div className="p-1">
                <Card className="h-[30vh] md:h-[35vh] bg-tpcBento border-none">
                  <CardContent className="flex flex-col items-start justify-between p-4 h-full">
                    <p className="text-[16px] md:text-[24px] font-medium leading-tight text-wrap">
                      {"''"}
                      {review.text}
                      {"''"}
                    </p>
                    <div className="flex flex-col gap-y-1">
                      <span className="text-[14px] lg:text-[20px] font-medium">
                        {review.name}
                      </span>
                      <div className="flex rounded-full bg-[#2d2d2d] px-2 py-1 w-fit">
                        {Array.from({ length: 5 }).map((_, index) => (
                          <img
                            className="w-[20px] "
                            key={index}
                            src="/assets/star.webp"
                            alt="review-star"
                          />
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex text-black" />
        <CarouselNext className="hidden md:flex text-black" />
      </Carousel>
    </div>
  );
};

export default Testimonials;
