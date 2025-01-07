'use client';
import { HeaderProps } from '../../types';
import Image from 'next/image';
import Icon from '../Icons/Icon';

const Header = ({ logo, width, height }: HeaderProps) => {
  return (
    <header
      className="flex justify-between items-center p-4 bg-neutral h-3xl w-full sticky top-0 z-10"
    >
      <Image
        src={logo}
        alt="logo"
        width={width}
        height={height}
        className="h-[40px] w-[40px] rounded-full ml-6"
      />
     <button
      onClick= {() => {}}
      className="toggle-button mr-6"
      area-label="Toggle menu">
        <Icon
          src='images/burger_icon.svg'
          alt='Burger Menu Icon'
          width={24}
          height={24}
          />
      </button>
    </header>
  );

};

export default Header;
