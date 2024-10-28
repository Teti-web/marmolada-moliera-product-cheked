'use client';

import Asset from '@/components/atoms/Assets/Asset';
import React, { FC, useEffect, useState } from 'react';
import { ScreenProps } from './Screen.type';
import Input from '@/components/atoms/Input/Input';
import ButtonIcon from '@/components/moleculs/ButtonIcon/ButtonIcon';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import Heading from '@/components/atoms/Heading/Heading';
import RichText from '@/components/atoms/RichText/RichText';
import Button from '@/components/atoms/Button/Button';
import { Theme } from '@/constants/contstants';

const Screen: FC<ScreenProps> = ({
  logo,
  productImage,
  input,
  searchButton,
  title,
  description,
  productInfo,
}) => {
  const [clientData, setClientData] = useState<number | null>(null);

  useEffect(() => {
    setClientData(Date.now());
  }, []);

  return (
    <div className="absolute left-1/2 top-1/2 z-10 h-full max-h-[90vh] w-full max-w-[80vw] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-3xl border border-solid bg-white-300 bg-opacity-55 backdrop-blur md:max-h-[70vh] md:max-w-[80vw]">
      <div className="w-hull flex h-full flex-col overflow-y-scroll md:flex-row">
        <div className="flex h-auto w-full flex-col gap-5 bg-white-100 bg-opacity-45 p-4 backdrop-blur md:h-full md:min-h-full md:min-w-[300px] md:max-w-[300px]">
          <div className="max-w-[138px]">
            <Asset {...logo} />
          </div>
          <div className="relative">
            <Input {...input} />
            <div className="absolute right-1 top-1/2 flex -translate-y-1/2 items-center">
              <ButtonIcon button={searchButton}>
                <MagnifyingGlassIcon className="h-5 w-5" />
              </ButtonIcon>
            </div>
          </div>
          {clientData && productImage && (
            <div className="overflow-hidden rounded-xl">
              <Asset {...productImage} />
            </div>
          )}
        </div>
        <div className="flex h-full w-full flex-col gap-5 p-5 text-center md:justify-center">
          <Heading {...title} />
          <RichText {...description} />
          {clientData && productInfo && (
            <div className="flex flex-col items-start gap-3 rounded-2xl bg-boulder-950 bg-opacity-85 p-4 text-sm text-white-50 backdrop-blur">
              <p>
                <b>SKU:</b> {productInfo.sku}
              </p>
              <p>
                <b>gtin:</b> {productInfo.gtin}
              </p>
              <p>
                <b>розмір:</b> {productInfo.size}
              </p>
              <p>
                <b>stock:</b> {productInfo.stock}
              </p>
              <p>
                <b>ціна:</b> {productInfo.price}
              </p>
              <Button isLink theme={Theme.DEFAULT} href={productInfo.link}>
                Викупити в Moliera
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Screen;
