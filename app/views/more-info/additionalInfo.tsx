import React from "react";
import { CircleX } from "lucide-react";
import type { SolutionProps } from "~/constants/solutions";
import { Button } from "~/components/ui/button";
import SvgIcon from "~/components/atoms/Icon";
import AppSizeProvider from "~/components/atoms/SizeProvider";
import fullProgressIcon from "~/assets/svg/full-progress.svg";
import moreInfoImage from "~/assets/png/more-info-2.png";

const AdditionalInfo = ({
  solutionInformation,
}: {
  solutionInformation: SolutionProps;
}) => {
  return (
    <main className="flex items-stretch justify-stretch w-full min-h-screen">
      <div className="flex flex-col w-full h-full">
        <div className="w-full bg-white md:bg-gray">
          <AppSizeProvider>
            <div className="flex flex-row items-center justify-between w-full p-4">
              <SvgIcon
                path={solutionInformation.solutionLogo}
                className="w-full max-w-[7.8rem] md:max-w-[12rem]"
              />

              <div className="hidden md:flex flex-col items-center text-center gap-1">
                <span className="text-[1.5rem] font-semibold">
                  Welcome Fikayo
                </span>
                <span className="text-base">
                  More Information about your business
                </span>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-base">Step 2 of 2</span>
                <SvgIcon path={fullProgressIcon} className="w-full" />
              </div>
            </div>
          </AppSizeProvider>
        </div>

        <div className="md:hidden flex flex-col items-center text-center gap-1">
          <span className="text-[1.25rem] font-semibold">Welcome Fikayo</span>
          <span className="text-base">
            More Information about your business
          </span>
        </div>

        <AppSizeProvider>
          <div className="flex-1 flex flex-row items-start lg:items-stretch bg-white mt-8 lg:mt-0">
            <div className="flex-1 flex flex-col items-start justify-start gap-8 bg-white px-4 lg:pt-[5rem]">
              <Button variant={"text"} className="self-end hidden lg:block">
                <CircleX strokeWidth="2.25px" size={16} className="text-red" />
              </Button>

              <Button type="submit" className="w-full">
                SUBMIT
              </Button>
            </div>

            <div className="hidden lg:block w-full max-w-[38rem]">
              <img src={moreInfoImage} alt="step-1" className="h-full w-full" />
            </div>
          </div>
        </AppSizeProvider>
      </div>
    </main>
  );
};

export default AdditionalInfo;
