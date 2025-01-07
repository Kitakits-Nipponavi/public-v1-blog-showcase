import { IndexArticleProps } from "@/types";
import BookmarkButton from "../Buttons/BookmarkButton";
import Image from "next/image";
import Icon from "../Icons/Icon";

const IndexArticle = ({
  title,
  subtitle,
  date,
  timestamp,
  src,
  alt,
  width,
  height,
  onClick,
}: IndexArticleProps) => {
  return (
    <div
      className="w-full h-auto relative"
      onClick={onClick}
    >
      <div className="w-full h-[2px] bg-neutral rounded-lg mt-4" />
      <div className="h-full w-full flex-col justify-center items-start gap-2 inline-flex">
        <div className="h-full w-full justify-between items-start gap-[43px] flex">
          <div className="w-full flex-col justify-start items-start inline-flex">
            <div className="w-full h-auto text-black text-lg font-semibold font-body mt-6">
              {title}
            </div>
            <div className="w-full h-auto text-black text-sm font-normal font-body mt-1">
              {subtitle}
            </div>
            <div className="w-full text-black text-sm font-normal font-body mt-1">
              {date} | {timestamp}
            </div>
          </div>
          <Image
            className="rounded-lg mt-6"
            src={src}
            alt={alt}
            width={width}
            height={height}
          />
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


export default IndexArticle;
