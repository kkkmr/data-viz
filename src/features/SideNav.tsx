export default function SideNav(){
    return (
        <div className="side-nav bg-black w-[4.5rem] flex flex-col justify-between px-4">
           <ol className="nav-links flex flex-col gap-3.5 mt-4">
                <li className="hover:cursor-pointer hover:bg-[rgba(255,255,255,0.1)] hover:rounded-[10px] hover:border-[1px] border-[#525252]">
                    <img src="./menu.svg" alt="" className="p-2" />
                </li>
                <li className="hover:cursor-pointer hover:bg-[rgba(255,255,255,0.1)] hover:rounded-[10px] hover:border-[1px] border-[#525252]">
                    <img src="./home.svg" alt="" className="p-2" />
                </li>
                <li className="hover:cursor-pointer hover:bg-[rgba(255,255,255,0.1)] hover:rounded-[10px] hover:border-[1px] border-[#525252]">
                    <img src="./bell.svg" alt="" className="p-2" />
                </li>
                <li className="hover:cursor-pointer hover:bg-[rgba(255,255,255,0.1)] hover:rounded-[10px] hover:border-[1px] border-[#525252]">
                    <img src="./clipboard.svg" alt="" className="p-2" />
                </li>
                <li className="hover:cursor-pointer hover:bg-[rgba(255,255,255,0.1)] hover:rounded-[10px] hover:border-[1px] border-[#525252]">
                    <img src="./settings.svg" alt="" className="p-2" />
                </li>
           </ol>
            <span className="user-profile mb-8 hover:cursor-pointer hover:bg-[rgba(255,255,255,0.1)] hover:rounded-[10px] hover:border-[1px] border-[#525252]">
                <img src="./user_profile.svg" alt="" className="p-2" />
            </span>
        </div>
    )
}