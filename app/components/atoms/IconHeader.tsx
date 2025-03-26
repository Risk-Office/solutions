import React from "react";
import SvgIcon from "./Icon";
import leftArrow from "~/assets/svg/left-arrow.svg";
import rightArrow from "~/assets/svg/right-arrow.svg";

const IconHeader = ({ title }: { title: string }) => {
  return (
    <div className="flex flex-row items-center gap-2">
      <SvgIcon path={leftArrow} className="w-full max-w-[4rem]" />
      <span className="text-[0.68rem] md:text-base font-semibold text-primary">
        {title}
      </span>
      <SvgIcon path={rightArrow} className="w-full max-w-[5rem]" />
    </div>
  );
};

export default IconHeader;
