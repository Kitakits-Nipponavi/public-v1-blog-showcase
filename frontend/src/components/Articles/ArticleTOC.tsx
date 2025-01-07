import { InfoTOCProps } from "@/types";

const ArticleTOC = ({ toc }: InfoTOCProps) => {
  return (
    <div className="w-full text-black text-center text-base font-semibold font-body leading-loose">
      <ul>
        {toc.map((item, index) => (
          <li key={index} onClick={item.onClick} className="cursor-pointer">
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArticleTOC;
