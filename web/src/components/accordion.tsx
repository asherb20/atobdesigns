import * as React from 'react';
import { CaretUpIcon, CaretDownIcon } from '../lib/icons';

interface AccordionItem {
  title: string;
  content: string;
}

interface AccordionType {
  items: AccordionItem[];
}

const Accordion = ({ items }: AccordionType) => {
  const [selAccInd, setSelAccInd] = React.useState<number>(0);

  return items.map((item, ind) => (
    <div key={ind} className='pb-1'>
      <button onClick={() => setSelAccInd(ind)} className='bg-light d-flex w-100 jc-space-between ai-center p-2 c-white pointer'>
        <p className='fs-20'>{item.title}</p>
        {selAccInd === ind ? <CaretDownIcon width={24} height={24} color='white' /> : <CaretUpIcon width={24} height={24} color='white' />}
      </button>
      <div className={`${selAccInd === ind ? 'd-block' : 'd-none'} pt-1 pr-2 pl-2 fs-20`}>
        <p>{item.content}</p>
      </div>
    </div>
  ));
};

export default Accordion;
