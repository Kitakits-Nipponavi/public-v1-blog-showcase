import { useState } from 'react';
import Header from './Header';
import BurgerMenu from './BurgerMenu';
import { LayoutProps } from '../../types';// adjust the path if needed

const Layout = ({ children, isLoggedIn, logo, user }:LayoutProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const menuItems = isLoggedIn && user ? [{ label: 'Logout', onClick: () => console.log('Logout') }] : [{ label: 'Login', onClick: () => console.log('Login') }];

  return (
    <>
      <Header logo = {logo} onClick={toggleMenu} />
      <BurgerMenu isOpen={isOpen} onClose={closeMenu} menuItems ={menuItems} />
      <main>{children}</main>
    </>
  );
};

export default Layout;
