import { PageHeaderProps } from "@/types";

const PageHeader = ({ title }: PageHeaderProps) => {
  return (
    <div>
      <div className="text-black text-2xl font-semibold font-body">{title}</div>
      <div className="h-px bg-black mt-4" />
    </div>
  );
};

export default PageHeader;
