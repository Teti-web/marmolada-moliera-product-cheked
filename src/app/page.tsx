'use client';
import Slider from '@/components/organisms/Slider/Slider';
import Screen from '@/components/organisms/Screen/Screen';
import { useState } from 'react';
import { HeadingTag } from '@/components/atoms/Heading/constants';
import { Theme } from '@/constants/contstants';
import { fetchProductData } from '@/helpers/fetchProductData';
import Loading from '@/components/moleculs/Loading/Loading';

export default function Home() {
  const [sku, setSku] = useState('');
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [product, setProduct] = useState<any | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleSearch = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const result = await fetchProductData(sku);
      if (result) {
        setProduct(result);
      } else {
        setError('Товар не знайдено');
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      setError('Помилка завантаження даних');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-screen">
      <Slider
        sliders={[
          {
            imgDesktop: '/assets/slider1.jpg',
            imgMobile: '/assets/slider1-mobile.jpg',
            widthDesktop: 1440,
            heightDesktop: 720,
            widthMobile: 768,
            heightMobile: 384,
            alt: '',
          },
          {
            imgDesktop: '/assets/slider2.jpg',
            imgMobile: '/assets/slider2-mobile.jpg',
            widthDesktop: 1440,
            heightDesktop: 720,
            widthMobile: 768,
            heightMobile: 384,
            alt: '',
          },
          {
            imgDesktop: '/assets/slider3.jpg',
            imgMobile: '/assets/slider3-mobile.jpg',
            widthDesktop: 1440,
            heightDesktop: 720,
            widthMobile: 768,
            heightMobile: 384,
            alt: '',
          },
          {
            imgDesktop: '/assets/slider4.jpg',
            imgMobile: '/assets/slider4-mobile.jpg',
            widthDesktop: 1440,
            heightDesktop: 720,
            widthMobile: 768,
            heightMobile: 384,
            alt: '',
          },
          {
            imgDesktop: '/assets/slider5.jpg',
            imgMobile: '/assets/slider5-mobile.jpg',
            widthDesktop: 1440,
            heightDesktop: 720,
            widthMobile: 768,
            heightMobile: 384,
            alt: '',
          },
          {
            imgDesktop: '/assets/slider6.jpg',
            imgMobile: '/assets/slider6-mobile.jpg',
            widthDesktop: 1440,
            heightDesktop: 720,
            widthMobile: 768,
            heightMobile: 384,
            alt: '',
          },
        ]}
      />
      <Screen
        logo={{
          imgDesktop: '/assets/site_logo.svg',
          imgMobile: '/assets/site_logo.svg',
          alt: 'Marmolada',
          widthDesktop: 138,
          widthMobile: 138,
          heightDesktop: 45,
          heightMobile: 45,
        }}
        input={{
          placeholder: 'sku',
          name: 'search',
          value: sku,
          onChange: e => setSku(e.target.value),
          onKeyDown: handleKeyDown,
        }}
        searchButton={handleSearch}
        title={{ tag: HeadingTag.H2, text: 'Інформація про продукти ' }}
        description={{
          text: 'За допогою SKU знайдеш більш детальну інформацію про продукт для того щоб створювати замовлення та викупу з Moliery ',
          theme: Theme.PRIMARY,
        }}
        productInfo={
          product && {
            sku: product.sku,
            gtin: product.gtin,
            size: product.size,
            stock: product.stock,
            link: product.link,
            price: product.price,
          }
        }
        productImage={
          product && {
            imgDesktop: product.image,
            imgMobile: product.image,
            alt: product.title,
            widthDesktop: 300,
            heightDesktop: 300,
            widthMobile: 300,
            heightMobile: 300,
          }
        }
      />
      {isLoading && <Loading />}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}
