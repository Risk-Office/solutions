import React, { type ReactNode } from "react";

const AppSizeProvider = ({ children }: { children: ReactNode }) => {
  return <section className="max-w-[100rem] mx-auto w-full">{children}</section>;
};

export default AppSizeProvider;
