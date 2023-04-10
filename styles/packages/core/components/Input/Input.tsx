import * as React from 'react';
import styled from '@xstyled/styled-components';
import {
  padding,
  PaddingProps,
  borders,
  BorderProps,
  shadow,
  ShadowProps,
} from 'styled-system';

export type InputProps = PaddingProps &
  BorderProps &
  ShadowProps &
  React.HTMLAttributes<HTMLInputElement>;

const Input = styled.input<InputProps>`
  outline: none;
  border: none;
  cursor: text;

  padding: 3 3 5 3;

  color: materialText;
  background-color: inputBackground;

  border-radius: 0;

  border-top-width: 1;
  border-top-style: 1;
  border-top-color: borderDark;

  border-right-width: 0;
  border-bottom-width: 0;

  border-left-width: 1;
  border-left-style: 1;
  border-left-color: borderDark;

  box-shadow: input;

  -webkit-appearance: none;

  ${padding}
  ${borders}
  ${shadow}
`;

export default Input;
