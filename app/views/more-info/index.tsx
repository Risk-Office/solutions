import React from "react";
import type { SolutionProps } from "~/constants/solutions";

const MoreInformationPage = ({
  solutionInformation,
}: {
  solutionInformation: SolutionProps;
}) => {
  return <div>{solutionInformation.name}</div>;
};

export default MoreInformationPage;
