import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Gcdef106_32x32_4 from '../../png/Gcdef106_32x32_4.png';

export const gcdef106Data = {
  '32x32_4': {
    imageSrc: Gcdef106_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Gcdef106Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Gcdef106: React.FC<Gcdef106Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = gcdef106Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
