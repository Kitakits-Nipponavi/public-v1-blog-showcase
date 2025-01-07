import InputField from "../Global/InputField";
import ActionButton from "../Buttons/ActionButtons";

const Newsletter = () => {
  return (
    <div className="w-full h-[136px] relative flex flex-col justify-center text-center mt-6">
      <div className="text-black text-lg font-semibold font-body">
        JOIN OUR NEWSLETTER
      </div>
      <div className="w-full h-12 flex justify-center bg-neutral rounded-base mt-1">
        <InputField
          onChange={() => {}}
          className="bg-neutral self-center"
        />
      </div>
      <div className="w-full flex justify-center mt-2">
        <ActionButton label="SUBSCRIBE" onClick={() => {}} type="primary" />
      </div>
    </div>
  );
};

export default Newsletter;
