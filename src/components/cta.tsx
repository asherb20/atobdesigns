import * as React from 'react';
import { Link } from 'gatsby';

interface CallToActionType {
  to: string;
  title: string;
  backgroundColor?: string;
}

const CallToAction = ({ to, title, backgroundColor = 'light' }: CallToActionType) => {
  return (
    <Link to={to} className={`bg-${backgroundColor} c-white fs-18 fw-bold td-none d-inline-block d-flex jc-center ai-center`} style={{ width: 250, height: 60 }}>
      {title}
    </Link>
  );
};

export default CallToAction;
