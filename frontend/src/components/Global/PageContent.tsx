import { PageContentProps } from "@/types";

const PageContent = ({ content }: PageContentProps) => {
  return (
    <div className="w-full h-auto text-black text-base font-normal font-body">
      {content}
    </div>
  );
};

export default PageContent;
