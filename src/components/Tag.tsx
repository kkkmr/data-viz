import { useState } from "react";

type TagItemProps = {
  label: string;
  selected: boolean;
  onHoverLong?: () => void;
};

const TagItem = ({ label, selected, onHoverLong }: TagItemProps) => {
  const [hoverTimer, setHoverTimer] = useState<NodeJS.Timeout | null>(null);
  const [isSelected, setIsSelected]=useState(selected);

  const handleMouseEnter = () => {
    const timer = setTimeout(() => {
      onHoverLong && onHoverLong();
    }, 1500); // 1.5 second delay
    setHoverTimer(timer);
  };

  const handleSelect=()=>{
    selected=!selected;
    setIsSelected(!isSelected);
  }
  const handleMouseLeave = () => {
    if (hoverTimer) clearTimeout(hoverTimer);
  };

  return (
    <div
      onClick={handleSelect}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`flex items-center gap-2 px-3 py-1.5 border rounded-full text-sm cursor-pointer transition
        ${isSelected ? 'border-lime-300 bg-lime-300/10 text-[#C8E972]': 'border-zinc-700 text-[#D5D5D5] hover:border-zinc-500'}
      )`}
    >
      <span>{label}</span>
      <span>
        {isSelected? <img src="./star_tag_selected.svg" alt=""/>: <img src="./star_tag_unselected.svg" alt=""/>}
      </span>
      <span>
        {isSelected? <img src="./tick.svg" alt=""/> : <img src="./plus_tag_unselected.svg" alt=""/>}
      </span>
    </div>
  );
};

export default TagItem;