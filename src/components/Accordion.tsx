import { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io'; // still using react-icons for UX polish

interface AccordionItem {
  id: string;
  title: React.ReactNode;
  titleStyle?:string,
  opened?:string,
  content: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[],
  opened?:string
}

const Accordion = ({ items,opened }: AccordionProps) => {
  const [openItem, setOpenItem] = useState<string | null>(opened||null);

  const toggle = (id: string) => {
    setOpenItem(prev => (prev === id ? null : id));
  };

  return (
    <div className="">
      {items.map(item => {
        const isOpen = openItem === item.id;
        return (
          <div key={item.id}>
            <button
              onClick={() => toggle(item.id)}
              className={`w-full mb-4 flex justify-between text-[#DCFF7F] items-center hover:cursor-pointer ${item.titleStyle}`}
            >
              <span className="text-left font-medium py-2">{item.title}</span>
              <span className='rounded-xl border-[1px] p-1 px-2'>
                <IoIosArrowDown
                    className={`transform transition-transform duration-500 ease-linear ${
                    isOpen ? 'rotate-180' : ''
                    }`}
                />
              </span>
            </button>
            <div
              className={`overflow-hidden transition-[max-height] duration-500 ease-linear ${
                isOpen ? 'max-h-96' : 'max-h-0'
              } text-sm`}
            >
              <div className="text-[#DCFF7F]">{item.content}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
