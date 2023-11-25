import * as React from 'react';
import { Link } from 'gatsby';
import NavList from './navList';
import * as styles from '../styles/nav.module.css';

export interface NavLinkType {
  slug: string;
  title: string;
  children?: NavLinkType[];
}

const NavLink = ({ title, slugs, children }: { title: string; slugs: string[]; children?: NavLinkType[] }) => {
  return (
    <li className={styles.navLink}>
      <div>
        <div>
          <Link to={`/${slugs.join('/')}`}>{title}</Link>
        </div>
        <div>
          <button></button>
        </div>
      </div>
      {children && children.length > 0 ? <NavList links={children} slugs={slugs} /> : null}
    </li>
  );
};

export default NavLink;
