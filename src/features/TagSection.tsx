import { useState } from "react";
import TagItem from "../components/Tag"

export default function TagSection(){
    const [hoveredTag, setHoveredTag] = useState<string | null>(null);

    return (
        <div className="max-h-fi">
            <div className="my-scrollbar mt-4 border-[1px] border-[#525252] bg-[#161618] p-8 flex flex-col gap-8 rounded-t-sm max-h-96 overflow-y-scroll">
                <div className="flex flex-col gap-4">
                    <div className="text-[#D5D5D5]">
                        Variable category 1
                    </div>
                    <div className="flex gap-4 items-center">
                        <TagItem label="Carbon 1" selected={false} onHoverLong={() => setHoveredTag("Carbon 1")}/>
                        <TagItem label="Co2 Distribution" selected={true} onHoverLong={() => setHoveredTag("Co2 Distribution")}/>
                        <TagItem label="Fleet sizing" selected={true} onHoverLong={() => setHoveredTag("Fleet sizing")}/>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="text-[#D5D5D5]">
                        Variable category 2
                    </div>
                    <div className="flex gap-4 items-center flex-wrap">
                        <TagItem label="Parking Rate" selected={false} onHoverLong={() => setHoveredTag("Parking Rate")}/>
                        <TagItem label="Border Rate" selected={true} onHoverLong={() => setHoveredTag("Border Rate")}/>
                        <TagItem label="Request Rate" selected={true} onHoverLong={() => setHoveredTag("Request Rate")}/>
                        <TagItem label="Variable 1" selected={false} onHoverLong={() => setHoveredTag("Variable 1")}/>
                        <TagItem label="Variable 1" selected={false} onHoverLong={() => setHoveredTag("Variable 1")}/>
                        <TagItem label="Variable 1" selected={true} onHoverLong={() => setHoveredTag("Variable 1")}/>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="text-[#D5D5D5]">
                        Variable category 3
                    </div>
                    <div className="flex gap-4 items-center">
                        <TagItem label="Variable 1" selected={false} onHoverLong={() => setHoveredTag("Variable 1")}/>
                        <TagItem label="Variable 1" selected={true} onHoverLong={() => setHoveredTag("Variable 1")}/>
                        <TagItem label="Variable 1" selected={true} onHoverLong={() => setHoveredTag("Variable 1")}/>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="text-[#D5D5D5]">
                        Variable category 4
                    </div>
                    <div className="flex gap-4 items-center">
                        <TagItem label="Variable 1" selected={false} onHoverLong={() => setHoveredTag("Variable 1")}/>
                        <TagItem label="Variable 1" selected={true} onHoverLong={() => setHoveredTag("Variable 1")}/>
                        <TagItem label="Variable 1" selected={true} onHoverLong={() => setHoveredTag("Variable 1")}/>
                    </div>
                </div>
            </div>
            {hoveredTag && (
                <div className="context-panel p-4 border-[1px] bg-[#222324] border-[#525252] rounded-b-sm">
                    <div className="flex gap-2 items-baseline pl-4">
                        <span className="text-xl">{hoveredTag}</span>
                        <span><img src="./info.svg" alt=""/></span>
                    </div>
                    <p className="text-sm text-[#BBBBBB] mt-4 px-4 pb-4">
                        But what truly sets Switch apart is its versatility. It can be used as a scooter, a bike, 
                        or even a skateboard, making it suitable for people of all ages. Whether you're a student, 
                        a professional, or a senior citizen, Switch adapts to your needs and lifestyle.
                    </p>
            </div>
            )}
        </div>
    )
}