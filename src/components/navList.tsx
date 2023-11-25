import * as React from 'react';
import NavLink, { NavLinkType } from './navLink';

const NavList = ({ links, slugs = [], isParent = false, visible = false }: { links: NavLinkType[]; slugs?: string[]; isParent?: boolean; visible?: boolean }) => {
  return (
    <ul className={`lst-none m-0 pl-1 pr-1 ${visible ? 'd-block' : 'd-none'}`}>
      {links.map((link: NavLinkType) => (
        <NavLink key={link.slug} title={link.title} slugs={[...slugs, link.slug]} children={link.children} />
      ))}
    </ul>
  );
};

export default NavList;
