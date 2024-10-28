import { ButtonProps } from '@/components/atoms/Button/Button.type';
import { ReactNode } from 'react';

export interface ButtonIconProps {
  button: ButtonProps['onClick'];
  children: ReactNode;
}
