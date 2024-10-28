import React, { FC } from 'react';
import { HeadingProps } from './Heading.type';
import { HeadingTag } from './constants';

const Heading: FC<HeadingProps> = ({ tag = HeadingTag.H2, text }) => {
  const className = 'text-white-50 font-primary font-semibold mx-auto my-0';
  switch (tag) {
    case HeadingTag.H1:
      return (
        <h1 className={`${className} text-3xl md:text-4xl lg:text-5xl`}>
          {text}
        </h1>
      );
    case HeadingTag.H2:
      return (
        <h2 className={`${className} text-xl md:text-2xl lg:text-3xl`}>
          {text}
        </h2>
      );
    case HeadingTag.H3:
      return (
        <h3 className={`${className} text-xl md:text-3xl lg:text-4xl`}>
          {text}
        </h3>
      );
    case HeadingTag.H4:
      return (
        <h4 className={`${className} text-lg md:text-2xl lg:text-3xl`}>
          {text}
        </h4>
      );
    case HeadingTag.H5:
      return (
        <h5 className={`${className} text-base md:text-lg lg:text-xl`}>
          {text}
        </h5>
      );
    case HeadingTag.H6:
      return <h6 className={`${className} text-base`}>{text}</h6>;
    default:
      return (
        <h2 className={`${className} text-2xl md:text-4xl lg:text-6xl`}>
          {text}
        </h2>
      );
  }
};

export default Heading;
