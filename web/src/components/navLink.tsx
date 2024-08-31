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
      <li className='lg-dl-hover pl-1 pr-1'>
        <div className='d-flex jc-space-between ai-center'>
          <div>
            <Link to={`/${slugs.join('/')}`} className='c-white td-none fs-20 d-block p-05 lg-c-black'>
              {title}
            </Link>
          </div>
          <div className='lg-d-none'>
            <button onClick={() => setExpList(!expList)}>
              {expList ? <CaretUpIcon height={24} width={24} color='#fff' /> : <CaretDownIcon height={24} width={24} color='#fff' />}
            </button>
          </div>
        </div>
        <NavList links={children} slugs={slugs} isParent={false} visible={expList} />
      </li>
    );

  return (
    <li className='pl-1 pr-1'>
      <div className='d-flex jc-space-between ai-center'>
        <Link className='c-white td-none fs-20 d-block p-05 lg-c-black' to={`/${slugs.join('/')}`}>
          {title}
        </Link>
      </div>
    </li>
  );
};

export default NavLink;
