import BookmarkSvg from "../SVGs/BookmarkSVG";
import { BookmarkButtonProps } from "@/types";
import clsx from "clsx";

const BookmarkButton = ({ onClick }: BookmarkButtonProps ) => {
  return (
    <button
      type="button"
      className={clsx(
        'flex items-center justify-center rounded-profile',
        'p-2 bg-secondary shadow-2xl hover:bg-secondary-300',
        'focus:border-2 focus:border-secondary-200 focus:bg-secondary-700',
        'disabled:bg-secondary-100 disabled:shadow-none disabled-cursor-not-allowed'
      )}
      onClick={onClick}
    >
      <BookmarkSvg
      fill="white"
      />
    </button>
  );
};

export default BookmarkButton;
