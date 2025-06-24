import { useState } from 'react';

interface Tab {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
  defaultActive?: string;
}

const Tabs = ({ tabs, defaultActive }: TabsProps) => {
  const [activeTab, setActiveTab] = useState(defaultActive || tabs[0].id);

  const activeContent = tabs.find(tab => tab.id === activeTab)?.content;

  return (
    <div>
      <div className='flex justify-between bg-black'>
        <div className="flex bg-black py-4 pr-4 pl-2">
          {tabs.map(tab => (
            <button
              key={tab.id}
              className={`px-4 py-1 text-sm ml-3 font-medium text-white hover:cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-[#242424] bg-text-blue-600 border-[#5A5A5A] border-[1px] rounded-sm'
                  : 'text-gray-60'
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className='py-4 mr-8 relative grid items-center'> 
            <img
              src="./search.svg"
              alt="Search"
              className="bg-[#242424] absolute left-4"
            />       
            <input type="text" placeholder='Search' className='bg-[#242424] pl-12 placeholder-white text-white py-1 rounded-sm outline-[#5A5A5A] border-0 outline-1'/>
        </div>
      </div>
      <div >{activeContent}</div>
    </div>
  );
};

export default Tabs;
