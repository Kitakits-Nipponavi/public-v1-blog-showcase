import { BookmarkSVGProps } from "@/types";
import clsx from "clsx";

const BookmarkSvg = ({ width = 30, height = 30, fill = 'currentColor' }: BookmarkSVGProps) => {
  return (
    <svg width={width} height={height} viewBox="0 -3 14 25" fill={fill} className={clsx('')}>
      <path d="M1 17V1H13V17L7 12L1 17Z" stroke="#FFFFFF" stroke-linejoin="round"/>
    </svg>
  );
};

export default BookmarkSvg;
