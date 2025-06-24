type InfoCardProps = {
  title: string;
  description: string;
  value: string;
};

const InfoCard = ({
  title,
  description,
  value,
}: InfoCardProps) => {
  return (
    <div
      className={`rounded-sm bg-[#222324] border-[#525252] border-[1px] text-white pl-4 pr-8 py-4 w-full max-w-sm shadow-lg flex flex-col gap-4`}
    >
      <div className="flex items-center justify-between">
        <span className="text-lg font-medium tracking-wide text-white">
          {title}
        </span>
        <span>
            <img src="./question_mark.svg" alt=""/>
        </span>
      </div>
      <p className="text-xs text-[#BBBBBB] font-light leading-loose mb-6">{description}</p>
      <div className="text-3xl font-bold self-end">{value}</div>
    </div>
  );
};

export default InfoCard;
