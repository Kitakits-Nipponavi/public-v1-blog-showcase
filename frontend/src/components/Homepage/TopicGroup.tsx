import Topic from "./TopicCard";

const TopicGroup = () => {
  return (
    <div
    className="grid grid-cols-3 gap-3"
    >
      <Topic
        src="/images/relation.png"
        alt="Relations Topic Image"
        width={110}
        height={100}
        label="Relations"
        onClick={()=>{}}
      />
      <Topic
        src="/images/career.png"
        alt="Careers Topic Image"
        width={110}
        height={100}
        label="Careers"
        onClick={()=>{}}
      />
      <Topic
        src="/images/family.png"
        alt="Family Topic Image"
        width={110}
        height={100}
        label="Families"
        onClick={()=>{}}
      />
    </div>
  );
};

export default TopicGroup;
