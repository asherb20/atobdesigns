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
    <Link
      to={path}
      className={`td-none d-flex jc-space-between ai-center bg-${backgroundColor} c-white pt-1 pr-2 pb-1 pl-1 fs-20 fw-bold lg-pt-3 lg-pb-3 hov-bg-dark trans-all`}
    >
      <p>{title}</p>
      <ArrowRightIcon height={32} width={32} color='white' />
    </Link>
  );
};

export default BoxLink;
