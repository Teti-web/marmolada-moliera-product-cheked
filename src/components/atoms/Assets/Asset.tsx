import React, { FC, useEffect, useState } from 'react';
import Image from 'next/image';
import { AssetProps } from './Asset.type';

const Asset: FC<AssetProps> = ({
  imgDesktop,
  imgMobile,
  widthMobile,
  widthDesktop,
  heightDesktop,
  heightMobile,
  alt,
}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div className="h-full w-full">
      {isMobile ? (
        <Image
          src={imgMobile}
          width={widthMobile}
          height={heightMobile}
          alt={alt}
          style={{
            display: 'block',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
          sizes="(max-width: 768px) 100vw, (min-width: 769px) 50vw"
          priority={true}
        />
      ) : (
        <Image
          src={imgDesktop}
          width={widthDesktop}
          height={heightDesktop}
          alt={alt}
          style={{
            display: 'block',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
          sizes="(max-width: 768px) 100vw, (min-width: 769px) 50vw"
        />
      )}
    </div>
  );
};

export default Asset;
