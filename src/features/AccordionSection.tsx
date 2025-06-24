import Accordion from '../components/Accordion';

const AccordionTitle=()=>{
    return (
        <div className='flex gap-4'>
            <span className='self-center'>
                <img src="./star.svg" alt=""/>
            </span>
            <span className='self-center text-2xl'>
                Best Scenario Results
            </span>
        </div>
    )
}

const AccordionPanel=()=>{
    return (
        <div className='flex flex-col gap-4'>
            <div className='flex justify-between py-2 border-[0.5px] border-[#C8E972] rounded-sm px-6'>
                <p className='self-center'>
                    The best found configuration based on profit is characterized by 11 zones 
                    (max) with charging stations and 48 total number of poles.
                </p>
                <span className="text-xl">⋯</span>
            </div>
            <div className='flex justify-between py-2 border-[0.5px] border-[#C8E972] rounded-sm px-6'>
                <p  className='self-center'>
                    The best found configuration based on satisfied demand is characterized by 11 
                zones (max) with charging stations and 48 total number of poles.
                </p>
                <span className="text-xl">⋯</span>
            </div>
        </div>
    )
}

const accordionItems = [
  {
    id: 'section-1',
    title: <AccordionTitle/>,
    content: <AccordionPanel/>,
  }
];

const AccordionSection = () => (
  <div className="mb-8">
    <Accordion items={accordionItems} opened='section-1' />
  </div>
);

export default AccordionSection;
