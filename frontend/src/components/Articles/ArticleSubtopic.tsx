import { ArticleSubtopicProps } from "@/types";
import Image from "next/image";

const ArticleSubtopic = ({
  title,
  src,
  alt,
  width,
  height,
  subtitle,
}: ArticleSubtopicProps) => {
  return (
    <div className="w-full h-auto flex-col justify-center items-start gap-4 inline-flex">
      <div className="w-full text-center text-black text-2xl font-medium font-display">
        {title}
      </div>
      <Image
        className="w-full h-auto rounded-lg"
        src={src}
        alt={alt}
        width={width}
        height={height}
      />
      <div className="w-full text-center text-black text-xs font-normal font-body">
        {subtitle}
      </div>
    </div>
  );
};

export default ArticleSubtopic;
