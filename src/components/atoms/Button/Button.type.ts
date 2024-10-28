import { Theme } from '@/constants/contstants';
import { ReactNode } from 'react';

export interface ButtonProps {
  children: string | ReactNode;
  isLink: boolean;
  href?: string;
  theme: Theme;
  onClick?: () => void;
}
