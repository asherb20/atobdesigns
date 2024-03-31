import * as React from 'react';
import { Link } from 'gatsby';
import { ArrowRightIcon } from '../lib/icons';

interface BoxLinkType {
  path: string;
  title: string;
  backgroundColor?: string;
}

const BoxLink = ({ path, title, backgroundColor = 'light' }: BoxLinkType) => {
  return (
    <Link to={path} className={`td-none d-flex flex-col bg-${backgroundColor} c-white p-1 fs-20 fw-bold hov-bg-dark trans-all h-100-px lg-h-200-px min-w-200-px`}>
      <div className='d-flex flex-1 flex-center lg-flex-end'>
        <p>{title}</p>
      </div>
      <div className='d-flex flex-1 flex-end'>
        <ArrowRightIcon height={32} width={32} color='white' />
      </div>
    </Link>
  );
};

export default BoxLink;
