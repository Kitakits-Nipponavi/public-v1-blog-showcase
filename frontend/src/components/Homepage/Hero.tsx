import { HeroProps } from "@/types";
import Image from "next/image";
import ActionButton from "../Buttons/ActionButtons";

const Hero = ({ backgroundImage, title, logo, subtitle, actionButton }: HeroProps) => {
  return (
    <div
      className="relative w-full bg-center bg-cover bg-no-repeat aspect-square rounded-base"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute top-0 left-1 right-1 bottom-2 bg-black/50 opacity-70 rounded-[16px]"></div>
      <div className="flex flex-col justify-center items-center gap-1 h-full">
        <div className="flex justify-center gap-3 z-10">
          <div className="max-w-fit">
            <h1 className="font-display font-bold text-displayMD text-white">{title}</h1>
          </div>
          <div className="rounded-full">
            <Image
              src={logo.props.src}
              alt={logo.props.alt}
              width={30}
              height={30}
              className="rounded-full"
              />
          </div>

        </div>
        <h2 className="text-displayXS font-semibold text-white text-center mb-2 z-10">{subtitle}</h2>
        <div className="z-10">
          <ActionButton
            label={actionButton.label}
            onClick={actionButton.onClick}
            type="primary"
            />
        </div>
      </div>
    </div>
  );
};

export default Hero;
