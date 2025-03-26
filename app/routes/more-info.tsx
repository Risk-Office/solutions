import React from "react";
import MoreInformationPage from "~/views/more-info";
import type { Route } from "./+types/more-info";
import { useLocation } from "react-router";
import type { SolutionProps } from "~/constants/solutions";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Risk Office Solutions" },
    { name: "description", content: "Risk Office Solutions" },
  ];
}

export default function MoreInformation() {
  const { state } = useLocation();

  return <MoreInformationPage solutionInformation={state as SolutionProps} />;
}
