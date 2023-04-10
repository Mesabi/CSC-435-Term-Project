import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Mmsys109_32x32_4 from '../../png/Mmsys109_32x32_4.png';
import Mmsys109_16x16_4 from '../../png/Mmsys109_16x16_4.png';

export const mmsys109Data = {
  '32x32_4': {
    imageSrc: Mmsys109_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Mmsys109_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Mmsys109Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Mmsys109: React.FC<Mmsys109Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = mmsys109Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};
