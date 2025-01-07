import { FeaturedIndexProps } from "@/types";
import Image from "next/image";
import BookmarkButton from "../Buttons/BookmarkButton";
import Icon from "../Icons/Icon";

const FeaturedIndex = ({ header, src, alt, width, height, title, subtitle, date, timestamp, onClick }: FeaturedIndexProps) => {
  return (
    <div className="w-full h-auto relative mt-12">
      <div className="w-full text-black text-4xl font-semibold font-display">
        {header}
      </div>
      <div className="w-full h-[2px] bg-neutral rounded-lg mt-4" />
      <Image
        className="w-full h-auto rounded-lg mt-6"
        onClick={onClick}
        src={src}
        alt={alt}
        width={width}
        height={height}
      />
      <div className="w-full h-auto text-black text-xl font-semibold font-body mt-4">
        {title}
      </div>
      <div className="w-full h-auto text-black text-sm font-normal font-body mt-1">
        {subtitle}
      </div>
      <div className="w-full h-auto text-black text-sm font-normal font-body mt-1">
        {date} | {timestamp}
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


export default FeaturedIndex;
