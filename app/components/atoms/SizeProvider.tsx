import React, {
  type DetailedHTMLProps,
  type HTMLAttributes,
  type ReactNode,
} from "react";

interface AppSizeProviderProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  children: ReactNode;
  className?: string;
}

const AppSizeProvider = ({
  children,
  className,
  ...rest
}: AppSizeProviderProps) => {
  return (
    <section {...rest} className={`max-w-[100rem] mx-auto w-full ${className}`}>
      {children}
    </section>
  );
};

export default AppSizeProvider;
