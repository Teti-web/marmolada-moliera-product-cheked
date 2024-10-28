import { parseStringPromise } from 'xml2js';

export async function fetchProductData(sku: string) {
  const url =
    'https://s3.eu-central-1.amazonaws.com/static.moliera2.com/xml/1/gm-new.xml';

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Помилка завантаження XML');
    }

    const xml = await response.text();
    const result = await parseStringPromise(xml);

    // Знаходимо товар з потрібним SKU
    const items = result.rss.channel[0].item;
    const product = items.find(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (item: { [key: string]: any[] }) => item['g:id'][0] === sku
    );

    if (!product) {
      throw new Error('Товар не знайдено');
    }

    return {
      sku: product['g:id'][0],
      title: product.title[0],
      link: product.link[0],
      brand: product['g:brand'][0],
      gtin: product['g:gtin'][0],
      color: product['g:color'][0],
      size: product['g:size'][0],
      price: product['g:price'][0],
      stock: product['g:stock'][0],
      image: product['g:image_link'][0],
      description: product.description[0],
    };
  } catch (error) {
    console.error('Помилка завантаження даних:', error);
    return null;
  }
}
