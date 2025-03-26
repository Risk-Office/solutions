import { type DetailedHTMLProps, type ImgHTMLAttributes } from "react";

interface CustomImageProps
  extends DetailedHTMLProps<
    ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {
  path: string;
  className?: string;
  addedStyles?: string;
}

const SvgIcon = ({ path, className, addedStyles, ...rest }: CustomImageProps) => {
  return (
    <img
      src={path}
      alt="icon"
      {...rest}
      className={
        className
          ? className
          : `object-contain w-full max-w-[25px] min-h-[25px] ${addedStyles}`
      }
    />
  );
};

export default SvgIcon;
