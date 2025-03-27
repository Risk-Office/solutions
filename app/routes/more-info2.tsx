import React from "react";
import type { Route } from "./+types/more-info2";
import AdditionalInfo from "~/views/more-info/additionalInfo";
import { useLocation } from "react-router";
import type { SolutionProps } from "~/constants/solutions";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Risk Office Solutions" },
    { name: "description", content: "Risk Office Solutions" },
  ];
}

export default function MoreInformation2() {
  const { state } = useLocation();

  return <AdditionalInfo solutionInformation={state as SolutionProps} />;
}
