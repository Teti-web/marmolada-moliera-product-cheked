import Button from '@/components/atoms/Button/Button';
import React, { FC } from 'react';
import { ButtonIconProps } from './ButtonIcon.type';
import { Theme } from '@/constants/contstants';

const ButtonIcon: FC<ButtonIconProps> = ({ button, children }) => {
  return (
    <Button isLink={false} theme={Theme.SECONDARY} onClick={button}>
      {children}
    </Button>
  );
};

export default ButtonIcon;
