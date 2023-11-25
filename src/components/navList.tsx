import * as React from 'react';
import NavLink, { NavLinkType } from './navLink';
import * as styles from '../styles/nav.module.css';

const NavList = ({ links, slugs = [], isParent = false }: { links: NavLinkType[]; slugs?: string[]; isParent?: boolean }) => {
  let classNames = [styles.navList];
  return (
    <ul className={classNames.join(' ')}>
      {links.map((link: NavLinkType) => (
        <NavLink key={link.slug} title={link.title} slugs={[...slugs, link.slug]} children={link.children} />
      ))}
    </ul>
  );
};

export default NavList;
