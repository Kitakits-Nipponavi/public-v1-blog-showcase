import { SubheaderProps } from "@/types";

const Subheader = ({ label }: SubheaderProps) => {
  return (
    <div className="w-full h-[72px] flex-col justify-center items-center gap-3.5 inline-flex">
      <div className="w-full h-md bg-neutral" />
      <div className="text-black text-[28px] font-semibold font-body">{label}</div>
      <div className="w-full h-md bg-neutral" />
    </div>
  );
};

export default Subheader;
