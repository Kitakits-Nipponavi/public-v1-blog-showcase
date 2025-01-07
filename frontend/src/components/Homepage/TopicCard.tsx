import { TopicProps } from "@/types";
import Image from "next/image";

const Topic = ({ src, alt, label, width, height, onClick }: TopicProps) => {
  return (
    <div
      className="flex flex-col items-center cursor-pointer"
      onClick={onClick}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="rounded-lg w-[92%]"
        />
      <h2 className="font-body text-xl">
        {label}
      </h2>
    </div>
  );
};

export default Topic;
