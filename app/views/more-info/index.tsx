import React from "react";
import SvgIcon from "~/components/atoms/Icon";
import type { SolutionProps } from "~/constants/solutions";

const MoreInformationPage = ({
  solutionInformation,
}: {
  solutionInformation: SolutionProps;
}) => {
  return (
    <div>
      {solutionInformation.name}
      <SvgIcon path={solutionInformation.solutionLogo} />
    </div>
  );
};

export default MoreInformationPage;
