import { FeaturedCardProps } from "@/types";
import BookmarkButton from "../Buttons/BookmarkButton";
import Icon from "../Icons/Icon";
import Image from "next/image";

const FeaturedArticle = ({
  src,
  alt,
  width,
  height,
  category,
  title,
  subtitle,
  date,
  timestamp,
  onClick,
}: FeaturedCardProps ) => {
  return (
    <div className="w-full h-auto relative flex flex-col">
      <Image
        className="w-full h-fit rounded-lg"
        onClick={onClick}
        src={src}
        alt={alt}
        width={width}
        height={height}
      />
      <div>
        <div className="w-full text-primary text-base font-semibold font-body mt-4">
          {category}
        </div>
        <div className="w-full text-black text-xl font-semibold font-body mt-2">
          {title}
        </div>
        <div className="w-full text-black text-sm font-normal font-body mt-1">
          {subtitle}
        </div>
        <div className="w-full bg-[#e6e6e6]" />
        <div className="w-full text-black text-sm font-normal font-body mt-1">
          {date} | {timestamp}
        </div>
      </div>
      <div className="flex justify-between mt-4">
        <BookmarkButton />
        <Icon
          src="/images/task_stamp.svg"
          alt="Task Stamp"
          width={100}
          height={50}
        />
      </div>
      <div className="w-full h-[2px] bg-neutral rounded-lg mt-4" />
    </div>
  );
};

export default FeaturedArticle;
