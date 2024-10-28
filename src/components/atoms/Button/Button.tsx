import React, { FC } from 'react';
import { ButtonProps } from './Button.type';
import { Theme } from '@/constants/contstants';

const Button: FC<ButtonProps> = ({
  children,
  href,
  isLink,
  theme,
  onClick,
}) => {
  let className = '';

  if (theme == Theme.DEFAULT) {
    className =
      'bg-white-100 transition-all duration-300 bg-opacity-65 hover:bg-opacity-95 hover:text-white-900 text-white-50 rounded-lg px-4 py-2';
  } else if (theme == Theme.PRIMARY) {
    className =
      'bg-primary-100 bg-opacity-65 hover:bg-opacity-95 text-white-900 px-4 py-2';
  } else if (theme == Theme.SECONDARY) {
    className =
      'bg-none p-1 text-white-50  hover:scale-95 transition-all duration-300 ';
  }

  if (isLink) {
    return (
      <a className={className} href={href} target="_blank">
        {children}
      </a>
    );
  } else {
    return (
      <button className={className} onClick={onClick}>
        {children}
      </button>
    );
  }
};

export default Button;
