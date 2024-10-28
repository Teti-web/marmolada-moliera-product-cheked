import React, { FC } from 'react';
import { RichTextProps } from './RichText.type';
import { Theme } from '@/constants/contstants';

const RichText: FC<RichTextProps> = ({ theme, text }) => {
  let className = '';

  if (theme === Theme.DEFAULT) {
    className = 'text-white-50 font-primary text-sm md:text-base';
  } else if (theme === Theme.PRIMARY) {
    className = 'text-white-50 font-primary text-xs md:text-sm';
  } else if (theme === Theme.SECONDARY) {
    className =
      'text-white-950 font-primary text-lg md:text-2xl leading-8 py-3 ';
  }

  return (
    <p className={className} dangerouslySetInnerHTML={{ __html: text }}></p>
  );
};

export default RichText;
