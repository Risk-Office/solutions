import { useState } from "react";
import { Button } from "~/components/ui/button";
import { offeredSolutions, type SolutionProps } from "~/constants/solutions";
import logo from "~/assets/svg/risk-office-logo.svg";
import SvgIcon from "~/components/atoms/Icon";
import IconHeader from "~/components/atoms/IconHeader";
import AppSizeProvider from "~/components/atoms/SizeProvider";
import { useNavigate } from "react-router";

const SolutionTag = ({ solution }: { solution: SolutionProps }) => {
  return (
    <h3 className="text-[0.8rem] md:text-[1.25rem] font-rhodiumLibre font-normal">
      {solution?.reversed ? (
        <>
          {solution?.name}-
          <span className="text-red font-agbalumo">{solution?.tag}</span>
        </>
      ) : (
        <>
          <span className="text-red font-agbalumo">{solution?.tag}</span>-
          {solution?.name}
        </>
      )}
    </h3>
  );
};

export function HomePage() {
  const [solutionDescription, setSolutionDescription] = useState<string>("");
  const navigate = useNavigate();

  return (
    <main className="w-full p-4 min-h-screen">
      <AppSizeProvider>
        <div className="flex flex-col md:flex-row items-center justify-between gap-5 w-full">
          <SvgIcon path={logo} className="max-w-[7.5rem] w-full self-start" />

          <div className="flex flex-col items-center justify-center w-full max-w-full md:max-w-[calc(100%-7.5rem)] mx-auto gap-3">
            <div className="flex flex-col gap-1 w-full text-center">
              <span className="text-[1.25rem] md:text-[1.5rem] font-semibold">
                Navigate Your Risk Solutions
              </span>
              <span className="text-base">
                Select the Solutions that fits your needs and gain insights
                tailored to your industry's challenges.{" "}
              </span>
            </div>

            <div className="self-center flex flex-col items-center gap-1 mt-2 w-full">
              <IconHeader title="CURRENT SOLUTIONS IN USE" />

              <div
                style={{ placeContent: "center space-evenly" }}
                className="self-center flex flex-row flex-wrap gap-4 w-full max-w-full md:max-w-[50%] mx-auto"
              >
                {offeredSolutions.slice(0, 2).map((solution) => (
                  <Button
                    key={solution.name}
                    variant={"text"}
                    size={"text"}
                    onClick={() => navigate("/more-info", { state: solution })}
                    onMouseOver={() =>
                      setSolutionDescription(solution.description)
                    }
                    onMouseOut={() => setSolutionDescription("")}
                    className="flex flex-col gap-3"
                  >
                    <SvgIcon
                      path={solution.icon}
                      className="w-full h-full max-w-[3.4rem] md:max-w-[5rem] max-h-[3.4rem] md:max-h-[5rem]"
                    />
                    <SolutionTag solution={solution} />
                  </Button>
                ))}
              </div>
            </div>

            <div className="self-center flex flex-col items-center gap-1 w-full">
              <IconHeader title="EXPLORE MORE SOLUTIONS" />

              <div
                style={{ placeContent: "center space-evenly" }}
                className="self-center flex flex-row flex-wrap gap-4 w-full max-w-full md:max-w-[50%] mx-auto"
              >
                {offeredSolutions.slice(2).map((solution) => (
                  <Button
                    key={solution.name}
                    variant={"text"}
                    size={"text"}
                    onClick={() => navigate("/more-info", { state: solution })}
                    onMouseOver={() =>
                      setSolutionDescription(solution.description)
                    }
                    onMouseOut={() => setSolutionDescription("")}
                    className="flex flex-col gap-3"
                  >
                    <SvgIcon
                      path={solution.icon}
                      className="w-full h-full max-w-[3.4rem] md:max-w-[5rem] max-h-[3.4rem] md:max-h-[5rem]"
                    />
                    <SolutionTag solution={solution} />
                  </Button>
                ))}
              </div>
            </div>

            <span
              className={`text-base font-normal text-center duration-300 ease-linear ${
                solutionDescription ? "translate-y-0" : " translate-y-[100%]"
              }`}
            >
              {solutionDescription}
            </span>
          </div>
        </div>
      </AppSizeProvider>
    </main>
  );
}
