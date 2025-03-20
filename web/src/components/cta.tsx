import * as React from 'react';
import { Link } from 'gatsby';

interface CallToActionType {
  to: string;
  title: string;
  backgroundColor?: string;
}

const CallToAction = ({ to, title, backgroundColor = 'light' }: CallToActionType) => {
  return (
    <Link
      to={to}
      className={`cta-${backgroundColor} trans-all bg-${backgroundColor} border-1 border-solid border-${backgroundColor} c-white fs-18 fw-bold td-none d-inline-block d-flex jc-center ai-center box-shadow-hover`}
      style={{ width: 249, height: 59 }}
    >
      {title}
    </Link>
  );
};

export default CallToAction;
