import { RAProps } from "@/types";
import Icon from "../Icons/Icon";

const ArticleRAList = ({ action }: RAProps) => {
  return (
    <div className="w-full h-auto relative grid grid-cols-4">

      <div className="text-black text-base self-center justify-self-center font-normal font-body col-start-2 col-end-4">
        Recommended Actions
      </div>
      <div className="col-start-4 justify-self-end">
        <Icon
          src="/images/task_icon.svg"
          alt="Recommended Task Icon"
          width={30}
          height={30}
        />
      </div>

      <div className="w-full h-px bg-black col-span-4 mt-2" />
      <div className="w-full text-black text-base font-normal font-body leading-10 col-start-2 col-end-4 mt-2 -ml-14 -mr-14">
        <ul>
          {action.map((item, index) => (
            <li key={index}>
              {index + 1}. {item.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ArticleRAList;
