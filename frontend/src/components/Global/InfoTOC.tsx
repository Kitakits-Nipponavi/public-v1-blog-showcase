import { InfoTOCProps } from "@/types";

const InfoTOC = ({ toc }: InfoTOCProps) => {
  return (
    <div className="w-full text-black text-base font-normal font-body leading-loose">
      <ul>
        {toc.map((item, index) => (
          <li key={index} onClick={item.onClick} className="cursor-pointer">
            {index + 1}. {item.title}
          </li>
        ))}
      </ul>
      <br />
    </div>
  );
};

export default InfoTOC;
