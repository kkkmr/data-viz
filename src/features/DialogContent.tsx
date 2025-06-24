import Accordion from '../components/Accordion';
import TagSection from './TagSection';

const accordionItems = [
  {
    id: 'section-1',
    title: <span className='text-xl'>Primary Variables</span>,
    titleStyle:'bg-[#222324] rounded px-8 border-[#525252] border-[1px]',
    content: <div>Accordion Panel 1</div>,
  },
  {
    id: 'section-2',
    title: <span className='text-xl'>Secondary Variables</span>,
    titleStyle:'bg-[#222324] rounded px-8 border-[#525252] border-[1px]',
    content: <div>Accordion Panel 2</div>,
  }
];

export default function DialogContent(){
    return (
        <div>
            <div className="flex gap-2 mb-6">
                <span className='relative grid items-center flex-2'> 
                    <img
                    src="./search.svg"
                    alt="Search"
                    className="bg-[#242424] absolute left-4"
                    />       
                    <input type="text" placeholder='Search' className='bg-[#242424] pl-12 placeholder-white text-white py-1 rounded-sm outline-[#5A5A5A] border-0 outline-1'/>
                </span>
                <span className="hover:cursor-pointer flex gap-2 flex-1 bg-[#242424] border-[#5A5A5A] border-[1px] items-center justify-center rounded-sm">
                    <span>
                        <img src="./star_white.svg" alt=""/>
                    </span>
                    <span> 
                        Autofill
                    </span>
                </span>
                <span className="hover:cursor-pointer flex flex-1 gap-2 bg-[#242424] border-[1px] border-[#577113] items-center justify-center rounded-sm" style={{boxShadow: 'inset 0px 0px 12.7px 0px #FFFFFF0D', borderImageSource:'linear-gradient(180deg, #C8E972 0%, rgba(112, 131, 64, 0) 100%)',borderImageSlice: 1}}>
                    <span>
                        <img src="./reload.svg" alt=""/>
                    </span>
                    <span className="text-[#C9FF3B]">
                        Rerun
                    </span>
                </span>
            </div>
            <div>
                <TagSection/>
            </div>
            <div className='mt-8'>
                <Accordion items={accordionItems} />
            </div>
        </div>
    )
}