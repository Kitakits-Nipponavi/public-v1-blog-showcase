import { IconProps } from "@/types";
import Image from "next/image";

const Icon = ({ src, alt, width, height }: IconProps) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
    />

  );

};

export default Icon;
