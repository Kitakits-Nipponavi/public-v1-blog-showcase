import { PageSubheaderProps } from "@/types";

const PageSubheader = ({ order, title }: PageSubheaderProps) => {
  return (
    <div className="w-full text-black text-xl font-semibold font-body">
      {order}. {title}
    </div>
  );
};

export default PageSubheader;
