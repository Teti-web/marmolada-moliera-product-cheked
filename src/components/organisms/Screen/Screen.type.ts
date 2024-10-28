import { AssetProps } from '@/components/atoms/Assets/Asset.type';
import { HeadingProps } from '@/components/atoms/Heading/Heading.type';
import { InputProps } from '@/components/atoms/Input/Input.type';
import { RichTextProps } from '@/components/atoms/RichText/RichText.type';
import { ButtonIconProps } from '@/components/moleculs/ButtonIcon/ButtonIcon.type';

export interface ScreenProps {
  logo: AssetProps;
  productImage?: AssetProps;
  input: InputProps;
  searchButton: ButtonIconProps['button'];
  title: HeadingProps;
  description: RichTextProps;
  productInfo?: {
    sku: string;
    gtin: string;
    size: string;
    stock: string;
    link: string;
    price: string;
  };
}
