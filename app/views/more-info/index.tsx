import React from "react";
import { useNavigate } from "react-router";
import { useForm, type SubmitHandler } from "react-hook-form";
import {
  User,
  Mail,
  BriefcaseBusiness,
  Smartphone,
  CircleX,
} from "lucide-react";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import SvgIcon from "~/components/atoms/Icon";
import type { SolutionProps } from "~/constants/solutions";
import type { MoreInformationFormProps } from "~/types/more-info";
import AppSizeProvider from "~/components/atoms/SizeProvider";
import halfProgressIcon from "~/assets/svg/half-progress.svg";
import moreInfoImage from "~/assets/png/more-info.png";

const MoreInformationPage = ({
  solutionInformation,
}: {
  solutionInformation: SolutionProps;
}) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<MoreInformationFormProps>({
    mode: "all",
  });

  const handleProceedToNextSteps: SubmitHandler<MoreInformationFormProps> = (
    data
  ) => {
    navigate("/more-info-2", { state: solutionInformation });
  };

  const navigate = useNavigate();

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
                <span className="text-base">Step 1 of 2</span>
                <SvgIcon path={halfProgressIcon} className="w-full" />
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

              <form
                onSubmit={handleSubmit(handleProceedToNextSteps)}
                className="flex flex-col gap-5 w-full"
              >
                <div className="flex flex-col gap-1 w-full">
                  <div className="flex flex-row items-center gap-1 py-1 px-2 rounded-lg border border-deepGray bg-gray">
                    <User size={16} />
                    <Input
                      type="text"
                      placeholder="Company Name"
                      {...register("companyName", {
                        required: "Company name is required",
                      })}
                      className="flex-1"
                    />
                  </div>
                  {errors?.companyName && (
                    <small className="text-red">
                      {errors?.companyName?.message}
                    </small>
                  )}
                </div>

                <div className="flex flex-col gap-1 w-full">
                  <div className="flex flex-row items-center gap-1 py-1 px-2 rounded-lg border border-deepGray bg-gray">
                    <Mail size={16} />
                    <Input
                      type="email"
                      placeholder="Work Email"
                      {...register("email", {
                        required: "Work email is required",
                      })}
                      className="flex-1"
                    />
                  </div>
                  {errors?.email && (
                    <small className="text-red">{errors?.email?.message}</small>
                  )}
                </div>

                <div className="flex flex-col gap-1 w-full">
                  <div className="flex flex-row items-center gap-1 py-1 px-2 rounded-lg border border-deepGray bg-gray">
                    <BriefcaseBusiness size={16} />
                    <Input
                      type="text"
                      placeholder="Job Title"
                      {...register("jobTitle", {
                        required: "Job title is required",
                      })}
                      className="flex-1"
                    />
                  </div>
                  {errors?.jobTitle && (
                    <small className="text-red">
                      {errors?.jobTitle?.message}
                    </small>
                  )}
                </div>

                <div className="flex flex-col gap-1 w-full">
                  <div className="flex flex-row items-center gap-1 py-1 px-2 rounded-lg border border-deepGray bg-gray">
                    <Smartphone size={16} />
                    <Input
                      type="text"
                      placeholder="Phone"
                      {...register("phoneNumber", {
                        required: "Phone number is required",
                      })}
                      className="flex-1"
                    />
                  </div>
                  {errors?.phoneNumber && (
                    <small className="text-red">
                      {errors?.phoneNumber?.message}
                    </small>
                  )}
                </div>

                <div className="ml-auto max-w-[70%] lg:max-w-[30%] mt-0 lg:mt-[2rem] w-full">
                  <Button type="submit" className="w-full">
                    PROCEED
                  </Button>
                </div>
              </form>
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

export default MoreInformationPage;
