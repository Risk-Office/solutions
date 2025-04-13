import React, { useState, useEffect } from "react";
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
import { SolutionTag } from "~/views/home";
import { offeredSolutions } from "~/constants/solutions";
import ArticlesDetails from "./articlesDetails"
import { useViewState } from '~/store/viewState';

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

interface RecommendedNewsItem {
  title: string;
  subTitle: string;
  description: string;
}

const recommendedNews = [
  {
    title: "Corporate tax policy changes",
    subTitle: "IRS, Congressional Budget Office",
    description:
      "A recent 5%+ increase in corporate tax rates for healthcare businesses has raised concerns among hospital networks, senior care providers, and private healthcare institutions",
  },
  {
    title: "Property tax changes",
    subTitle: "Local Government Tax Authorities",
    description: "An 8%+ annual rise in property taxes for senior care ",
  },
];

const articles = [
  {
    id: 1,
    category: "POLITICAL",
    title: "Tax incentives for elderly care",
    subtitle: "Tax incentives for elder care",
    timeHorizon: "2years",
    impactSeverity: "Critical",
    description:
      "Families caring for aging relatives may soon lose critical financial support as key tax incentives for elder care face elimination.",
    featuredImage: featuredImage,
  },
];

const NewsAndArticles = () => {
  const [selectedArticle, setSelectedArticle] = useState<any>(null);
  const setIsViewingDetails = useViewState((state) => state.setIsViewingDetails);

  useEffect(() => {
    setIsViewingDetails(!!selectedArticle);
    return () => {
      setIsViewingDetails(false);
    };
  }, [selectedArticle, setIsViewingDetails]);

  const handleBack = () => {
    setSelectedArticle(null);
  };

  if (selectedArticle) {
    return <ArticlesDetails {...selectedArticle} onBack={handleBack} />;
  }

  return (
    <div className="flex flex-row gap-2 w-full h-full">
      <div className="flex-[0.65] flex flex-col gap-5 w-full relative">
        <div className="flex flex-col gap-4 bg-white rounded-xl w-full px-[1.5rem] py-4">
          <span className="text-lg font-bold text-left">Featured</span>

          {articles.map((article) => (
  <div
    key={article.id}
    onClick={() => setSelectedArticle(article)}
    className="cursor-pointer"
  >
    <div
      style={{ backgroundImage: `url(${article.featuredImage})` }}
      className="flex items-end justify-start bg-cover bg-no-repeat min-h-[15rem] w-full rounded-[0.6rem]"
    >
      <div className="flex items-center justify-center p-1 bg-gold min-h-[1.875rem] rounded-bl-[0.6rem] w-full max-w-[6rem]">
        <span className="text-semibold text-sm">{article.category}</span>
      </div>
    </div>

    <div className="flex flex-col w-full">
      <div className="flex flex-col gap-2 w-full">
        <span className="font-semibold text-base">{article.title}</span>

        <div className="flex flex-row items-center space-x-4 h-5 text-sm italic">
          <span>{article.subtitle}</span>
          <Separator orientation="vertical" className="bg-deepGray" />
          <span>Time Horizon: {article.timeHorizon}</span>
          <Separator orientation="vertical" className="bg-deepGray" />
          <span>Impact severity: {article.impactSeverity}</span>
        </div>

        <Separator className="my-1 bg-deepGray w-full max-w-[50%]" />
      </div>

      <span>{article.description}</span>
    </div>
  </div>
))}
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

      <div className="flex-[0.35] flex flex-col items-stretch h-full overflow-auto">
        <div className="flex flex-col gap-5 w-full">
          <div className="flex flex-col gap-5 w-full bg-white py-2 px-4 rounded-lg">
            <span className="text-lg font-bold text-left">
              Recommended for You
            </span>

            <div className="flex flex-col gap-4 w-full">
              {recommendedNews.map((item: RecommendedNewsItem) => (
                <div
                  key={item.title}
                  className="flex flex-col gap-2 bg-gray p-4 w-full rounded-lg"
                >
                  <div className="flex flex-col gap-4 w-full">
                    <span className="text-base font-semibold">
                      {item.title}
                    </span>
                    <span className="italic">{item.subTitle}</span>
                  </div>

                  <Separator className="my-1 bg-deepGray" />

                  <span className="font-normal">{item.description}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white w-full flex flex-col gap-2 py-2 px-4 rounded-lg">
            <span className="text-lg font-bold text-left">
              Our Other Solutions
            </span>

            <div className="flex flex-row items-center justify-center gap-2 bg-gray p-2 w-full rounded-lg">
              <div className="flex-[0.4] flex flex-col gap-2">
                <img
                  src={offeredSolutions[8].icon}
                  alt={offeredSolutions[8].name}
                  className="w-[52px] h-[48px]"
                />
                <SolutionTag solution={offeredSolutions[8]} />
              </div>

              <div className="flex-1 flex items-center justify-start">
                <span className="font-normal text-sm">
                  {offeredSolutions[8].description}
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white w-full flex flex-col gap-2 py-2 px-4 rounded-lg">
            <span className="text-lg font-bold text-left">
              Take Our Survey
            </span>

            <div className="flex flex-row items-center justify-center gap-2 bg-gray p-2 w-full rounded-lg">
              <span className="font-normal text-sm">
                Join other Assisted Living Facilities to understand the
                trend in Labor Policy
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default NewsAndArticles;
