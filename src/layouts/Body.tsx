import { useState } from "react"
import AccordionSection from "../features/AccordionSection"
import CardSection from "../features/cardSection"
import LineChart from "../components/LineChart"
import RightSlideDialog from "../features/Dialog"

export default function BodyPanel(){

    const [dialogOpen, setDialogOpen] = useState(false);
    return (
        <div className="border-[#525252] border-[1px] text-white bg-[#161618] flex flex-col py-12 px-10">
            <div className="flex justify-between pb-8">
                <div className="flex self-center">
                    <span className="self-center">
                        <img src="./lightning.svg" alt=""/>
                    </span>
                    <span className="text-3xl ml-4">
                        <strong>Charging Station</strong>
                    </span>
                </div>
                <div className="flex gap-4">
                    <span className="bg-[rgba(255,255,255,0.1)] rounded-sm border-[1px] border-[#525252] self-center">
                        <img src="./clock.svg" alt="" className="px-1.5 py-2 hover:cursor-pointer" />
                    </span>
                    <span onClick={() => setDialogOpen(true)} className="px-1.5 py-1.5 hover:cursor-pointer bg-[rgba(255,255,255,0.1)] rounded-sm border-[1px] border-[#525252] self-center">
                        Edit Variables
                    </span>
                    {dialogOpen && (
                        <div className="fixed inset-0 z-40 backdrop-blur-xs bg-black/10 transition-opacity" />
                        )}
                    <RightSlideDialog isOpen={dialogOpen} onClose={() => setDialogOpen(false)} />
                    <span className="bg-[rgba(255,255,255,0.1)] rounded-sm border-[1px] border-[#525252] self-center">
                        <img src="./upload.svg" alt="" className="px-2 py-1.5 hover:cursor-pointer" />
                    </span>
                </div>
            </div>
            <AccordionSection/>
            <div className="flex flex-col lg:flex-row">
                <LineChart/>
                <div className="w-[100%] lg:w-[50%] lg:pl-8 h-[100%]">
                    <div className="flex justify-between mb-4 lg:mb-3 items-center">
                        <p className="text-2xl">Key Performance Indicators</p>
                        <p className="flex justify-between py-1  px-3 border-[1px] border-[#5A5A5A] rounded-md gap-2 hover:cursor-pointer">
                            <span>Variables</span>
                            <span className="self-center"> <img src="./plus.svg" alt=""/>
                            </span>
                        </p>
                    </div>
                    <CardSection/>
                </div>
            </div>
        </div>
    )
}