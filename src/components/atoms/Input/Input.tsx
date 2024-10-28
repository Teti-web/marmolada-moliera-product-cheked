import React, { FC } from 'react';
import { InputProps } from './Input.type';

const Input: FC<InputProps> = ({
  placeholder,
  name,
  onChange,
  value,
  onKeyDown,
}) => {
  return (
    <input
      className="w-full rounded-lg bg-boulder-700 p-1 text-base font-medium text-white-200 shadow-inner shadow-boulder-950"
      type="text"
      name={name}
      id={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  );
};

export default Input;
