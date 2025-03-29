import React, { useState } from "react";
import { CircleX } from "lucide-react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { Label } from "~/components/ui/label";
import { RadioGroup, RadioGroupItem } from "~/components/ui/radio-group";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "~/components/ui/collapsible";
import { Checkbox } from "~/components/ui/checkbox";
import { Separator } from "~/components/ui/separator";
import type { SolutionProps } from "~/constants/solutions";
import { Button } from "~/components/ui/button";
import SvgIcon from "~/components/atoms/Icon";
import AppSizeProvider from "~/components/atoms/SizeProvider";
import fullProgressIcon from "~/assets/svg/full-progress.svg";
import moreInfoImage from "~/assets/png/more-info-2.png";
import type { AdditionalInfoFormProps } from "~/types/more-info";
import { Input } from "~/components/ui/input";
import {
  legalStructure,
  businessStage,
  businessRevenueModel,
  businessSectors,
} from "~/constants/options";

const AdditionalInfo = ({
  solutionInformation,
}: {
  solutionInformation: SolutionProps;
}) => {
  const [isBusinessTypeOpen, setIsBusinessTypeOpen] = useState<boolean>(false);
  const [isSectorOpen, setIsSectorOpen] = useState<boolean>(false);
  const [sectors, setSectors] = useState<string[]>([]);
  const [businessType, setBusinessTypes] = useState<string[]>([]);
  const {
    watch,
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm<AdditionalInfoFormProps>();

  const legalStructureValue = watch("legalStructure");

  const handleAddSectors = (newSector: string) => {
    setSectors([...sectors, newSector]);
  };
  const handleAddBusinessTypes = (type: string) => {
    setBusinessTypes([...businessType, type]);
  };

  const handleSubmitAdditionalInfo: SubmitHandler<AdditionalInfoFormProps> = (
    data
  ) => {
    const payload = {
      legalStructure: data.legalStructure
        ? data.legalStructure
        : data.legalStructureOther,
      businessStage: data.businessStage,
      sector: sectors,
      businessType: businessType,
    };

    console.log(payload);
  };

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
          <div className="flex-1 flex flex-row items-start lg:items-stretch bg-white mt-8 lg:mt-0 relative h-full">
            <div className="flex-1 flex flex-col items-start justify-start gap-8 bg-white px-4 lg:pt-[5rem]">
              <Button variant={"text"} className="self-end hidden lg:block">
                <CircleX strokeWidth="2.25px" size={16} className="text-red" />
              </Button>

              <form
                onSubmit={handleSubmit(handleSubmitAdditionalInfo)}
                className="flex flex-col gap-6 w-full"
              >
                <div className="flex flex-col gap-1 w-full">
                  <span className="font-medium text-[1.25rem]">
                    What is the legal structure of your business?
                  </span>

                  <RadioGroup
                    value={watch("legalStructure")}
                    onValueChange={(value) => setValue("legalStructure", value)}
                    className="grid grid-cols-1 md:grid-cols-2 w-full"
                  >
                    {legalStructure.map((item) => (
                      <div
                        key={item}
                        className="flex items-center space-x-2 justify-between"
                      >
                        <Label htmlFor={item}>{item}</Label>
                        <RadioGroupItem
                          value={item}
                          id={item}
                          {...register("legalStructure", {
                            required: "Please select a legal structure",
                          })}
                        />
                      </div>
                    ))}

                    {errors?.legalStructure && (
                      <small className="text-red">
                        {errors?.legalStructure?.message}
                      </small>
                    )}
                  </RadioGroup>

                  <Collapsible
                    open={
                      legalStructureValue ===
                      legalStructure[legalStructure.length - 1]
                    }
                    className="mt-4"
                  >
                    <CollapsibleContent className="CollapsibleContent">
                      <div className="flex flex-col gap-1 w-full">
                        <Input
                          placeholder="Specify the legal structure of your businesss"
                          {...register("legalStructureOther", {
                            required:
                              legalStructureValue ===
                              legalStructure[legalStructure.length - 1],
                          })}
                          className="border-deepGray w-full bg-gray rounded-md min-h-[2rem]"
                        />
                        {errors?.legalStructureOther && (
                          <small className="text-red">
                            Please specify your legal structure
                          </small>
                        )}
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                </div>

                <div className="flex flex-col gap-2 w-full">
                  <span className="font-medium text-base md:text-[1.25rem]">
                    What is the business type best describe your business?
                  </span>

                  <Collapsible
                    open={isSectorOpen}
                    onOpenChange={setIsSectorOpen}
                  >
                    <span className="font-medium text-base md:text-[1.25rem]">
                      Sector
                    </span>
                    <CollapsibleTrigger className="text-left p-2 border-deepGray w-full bg-gray rounded-md min-h-[2rem]">
                      Select all that apply
                    </CollapsibleTrigger>

                    <CollapsibleContent className="CollapsibleContent">
                      <div className="flex flex-col gap-1 w-full">
                        {businessSectors.map((item) => (
                          <div
                            key={item}
                            className="flex flex-col w-full min-h-[2rem]"
                          >
                            <Button
                              type="button"
                              variant={"text"}
                              onClick={() => handleAddSectors(item)}
                              className="my-auto flex flex-row items-center justify-between text-left gap-2 w-full"
                            >
                              <Label htmlFor={item}>{item}</Label>
                              <Checkbox
                                id={item}
                                value={item}
                                className="accent-primary"
                                checked={sectors.includes(item)}
                              />
                            </Button>

                            <Separator className="w-full bg-black" />
                          </div>
                        ))}
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                </div>

                <div className="flex flex-col gap-1 w-full">
                  <span className="font-medium text-[1.25rem]">
                    What is the business stage?
                  </span>

                  <RadioGroup
                    value={watch("businessStage")}
                    onValueChange={(value) => setValue("businessStage", value)}
                    className="grid grid-cols-1 md:grid-cols-2 w-full"
                  >
                    {businessStage.map((item) => (
                      <div
                        key={item}
                        className="flex items-center space-x-2 justify-between"
                      >
                        <Label htmlFor={item}>{item}</Label>
                        <RadioGroupItem
                          value={item}
                          id={item}
                          {...register("businessStage", {
                            required: "Please select a business Stage",
                          })}
                        />
                      </div>
                    ))}

                    {errors?.businessStage && (
                      <small className="text-red">
                        {errors?.businessStage?.message}
                      </small>
                    )}
                  </RadioGroup>
                </div>

                <div className="flex flex-col gap-2 w-full">
                  <span className="font-medium text-base md:text-[1.25rem]">
                    What is the your business revenue model?
                  </span>

                  <Collapsible
                    open={isBusinessTypeOpen}
                    onOpenChange={setIsBusinessTypeOpen}
                  >
                    <CollapsibleTrigger className="text-left p-2 border-deepGray w-full bg-gray rounded-md min-h-[2rem]">
                      Select business revenue model
                    </CollapsibleTrigger>

                    <CollapsibleContent className="CollapsibleContent">
                      <div className="flex flex-col gap-1 w-full">
                        {businessRevenueModel.map((item) => (
                          <div
                            key={item}
                            className="flex flex-col w-full min-h-[2rem]"
                          >
                            <Button
                              type="button"
                              variant={"text"}
                              onClick={() => handleAddBusinessTypes(item)}
                              className="my-auto flex flex-row items-center justify-between text-left gap-2 w-full"
                            >
                              <Label htmlFor={item}>{item}</Label>
                              <Checkbox
                                id={item}
                                value={item}
                                className="accesnt-primary"
                                checked={businessType.includes(item)}
                              />
                            </Button>

                            <Separator className="w-full bg-black" />
                          </div>
                        ))}
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                </div>

                <div className="ml-auto max-w-[70%] lg:max-w-[30%] mt-0 lg:mt-[2rem] w-full">
                  <Button type="submit" className="w-full">
                    SUBMIT
                  </Button>
                </div>
              </form>
            </div>

            <div className="hidden lg:block w-full max-w-[38rem]">
              <div className="sticky top-0 w-full">
                <img
                  src={moreInfoImage}
                  alt="step-1"
                  className="h-full w-full"
                />
              </div>
            </div>
          </div>
        </AppSizeProvider>
      </div>
    </main>
  );
};

export default AdditionalInfo;
