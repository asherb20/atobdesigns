import * as React from 'react';
import { Link } from 'gatsby';
import NavList from './navList';
import { CaretDownIcon, CaretUpIcon } from '../lib/icons';

export interface NavLinkType {
  slug: string;
  title: string;
  children?: NavLinkType[];
}

const NavLink = ({ title, slugs, children }: { title: string; slugs: string[]; children?: NavLinkType[] }) => {
  const [expList, setExpList] = React.useState<boolean>(false);

  if (children && children.length > 0)
    return (
      <li>
        <div className='d-flex jc-space-between ai-center'>
          <div>
            <Link to={`/${slugs.join('/')}`} className='c-white td-none fs-20 d-block p-05'>
              {title}
            </Link>
          </div>
          <div>
            <button onClick={() => setExpList(!expList)}>
              {expList ? <CaretUpIcon height={24} width={24} color='#fff' /> : <CaretDownIcon height={24} width={24} color='#fff' />}
            </button>
          </div>
        </div>
        <NavList links={children} slugs={slugs} isParent={false} visible={expList} />
      </li>
    );

  return (
    <li>
      <div className='d-flex jc-space-between ai-center'>
        <Link className='c-white td-none fs-20 d-block p-05' to={`/${slugs.join('/')}`}>
          {title}
        </Link>
      </div>
    </li>
  );
};

export default NavLink;
