import React from "react";
import { Link } from "react-router";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Separator } from "~/components/ui/separator";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/ui/carousel";
import featuredImage from "~/assets/png/dashboard-image.png";
import articleImage from "~/assets/png/articles-image.png";

const articlesArr = [
  {
    image: articleImage,
    title: "Nationwide Nurses Strike Looms Amidst Contract Disputes",
  },
  {
    image: articleImage,
    title:
      "AI-Powered Scheduling Laws: How New Labor Rules Affect Shift Workers",
  },
  {
    image: articleImage,
    title: "Japan Rolls Out More Service Robots to Ease Labor Crisis",
  },
];

const NewsAndArticles = () => {
  return (
    <div className="flex flex-col gap-5 w-full relative">
      <div className="flex flex-col gap-4 bg-white rounded-xl w-full px-[1.5rem] py-4">
        <span className="text-lg font-bold text-left">Featured</span>

        <div
          style={{ backgroundImage: `url(${featuredImage})` }}
          className="flex items-end justify-start bg-cover bg-no-repeat min-h-[15rem] w-full rounded-[0.6rem]"
        >
          <div className="flex items-center justify-center p-1 bg-gold min-h-[1.875rem] rounded-bl-[0.6rem] w-full max-w-[6rem]">
            <span className="text-semibold text-sm">POLITICAL</span>
          </div>
        </div>

        <div className="flex flex-col w-full">
          <div className="flex flex-col gap-2 w-full">
            <span className="font-semibold text-base">
              Tax incentives for elderly care
            </span>

            <div className="flex flex-row items-center space-x-4 h-5 text-sm italic">
              <span>Tax incentives for elder care</span>
              <Separator orientation="vertical" className="bg-deepGray" />
              <span>Time Horizon: 2years</span>
              <Separator orientation="vertical" className="bg-deepGray" />
              <span>Impact severity: Critical</span>
            </div>

            <Separator className="my-1 bg-deepGray w-full max-w-[50%]" />
          </div>

          <span>
            Families caring for aging relatives may soon lose critical financial
            support as key tax incentives for elder care face elimination.{" "}
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-4 bg-white rounded-xl w-full px-[1.5rem] py-4">
        <div className="flex flex-row items-center justify-between w-full">
          <div className="flex flex-col w-full">
            <span className="text-lg font-bold text-left">Articles</span>
            <Separator className="my-1 bg-deepGray w-full max-w-[30%]" />
          </div>

          <div className="flex flex-row items-center gap-4">
            <Button
              variant={"text"}
              className="flex items-center justify-center rounded-full bg-primary text-white w-[20px] h-[24px]"
            >
              <ChevronLeft />
            </Button>
            <Button
              variant={"text"}
              className="flex items-center justify-center rounded-full bg-primary text-white w-[20px] h-[24px]"
            >
              <ChevronRight />
            </Button>
          </div>
        </div>

        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent>
            {articlesArr.map((item, index) => (
              <CarouselItem
                key={index}
                className="flex flex-row items-start gap-3 md:basis-1/2 lg:basis-1/3"
              >
                <img
                  src={item.image}
                  alt={item.title.slice(0, 5)}
                  className="w-full min-h-[3.5rem] max-w-[5.125rem]"
                />
                <div className="flex flex-col gap-2 w-full">
                  <span>{item.title}</span>
                  <Link to={"/dashboard"} className="underline">
                    Read More
                  </Link>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* <CarouselPrevious />
          <CarouselNext /> */}
        </Carousel>
      </div>
    </div>
  );
};

export default NewsAndArticles;
