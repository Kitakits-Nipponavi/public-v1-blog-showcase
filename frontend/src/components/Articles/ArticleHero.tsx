import { ArticleHeroProps } from "@/types";
import Image from "next/image";
import BookmarkButton from "../Buttons/BookmarkButton";

const ArticleHero = ({
  src,
  alt,
  width,
  height,
  category,
  title,
  subtitle,
  date,
  timestamp,
}: ArticleHeroProps) => {
  return (
    <div className="w-full h-auto relative">
      <Image
        className="w-full h-auto rounded-lg"
        src={src}
        alt={alt}
        width={width}
        height={height}
      />
      <div className="grid grid-cols-4 mt-2">
        <div className="self-center justify-self-center text-primary text-base font-semibold font-body col-start-2 col-end-4">
          {category}
        </div>
        <div className="col-start-4 justify-self-end">
          <BookmarkButton/>
        </div>
      </div>

      <div className="w-full h-auto text-center text-black text-4xl font-semibold font-display mt-1">
        {title}
      </div>
      <div className="w-full h-auto text-center text-black text-base font-normal font-body mt-1">
        {subtitle}
      </div>
      <div className="w-full h-auto text-center text-black text-sm font-normal font-body mt-3">
        {date} | {timestamp}
      </div>
    </div>
  );
};

export default ArticleHero;
