import React, { forwardRef } from 'react';
import styled, { css, th } from '@xstyled/styled-components';

import {
  radioChecked,
  radioCheckedDisabled,
  radioUnchecked,
  radioUncheckedDisabled,
} from './radioButtonStates';

export type RadioButtonProps = React.InputHTMLAttributes<HTMLInputElement>;

const Icon = styled.span`
  width: 12px;
  height: 12px;

  content: '';
  display: inline-block;

  position: absolute;
  left: 0;
  top: 0;

  background-image: url(${radioUnchecked});
`;

const Text = styled.span`
  padding: 1;
  user-select: none;

  position: absolute;
  top: 0;
  left: 18px;
`;

const Field = styled.input.attrs<RadioButtonProps>({
  type: 'radio',
})`
  margin: 0;
  opacity: 0;

  &:focus ~ ${Text}, &:active + ${Text} {
    border-width: 1;
    border-style: dotted;
    padding: 0;
  }

  &:checked + ${Icon} {
    background-image: url(${radioChecked});
  }

  &:disabled + ${Icon} {
    background-image: url(${radioUncheckedDisabled});
  }

  &:checked:disabled + ${Icon} {
    background-image: url(${radioCheckedDisabled});
  }
`;

const Label = styled.label<Pick<RadioButtonProps, 'disabled'>>`
  position: relative;
  margin-bottom: 10;
  display: block;

  ${({ disabled }) =>
    disabled &&
    css`
      color: materialTextDisabled;
      text-shadow: 0.5px 0.5px ${th('colors.materialTextDisabledShadow')};
    `}
`;

const RadioButton = forwardRef<HTMLInputElement, RadioButtonProps>(
  ({ children, disabled, ...props }, ref) => (
    <Label disabled={disabled}>
      <Field disabled={disabled} {...props} ref={ref} />
      <Icon />
      <Text>{children}</Text>
    </Label>
  ),
);

RadioButton.defaultProps = {
  children: '',
  disabled: false,
};

export default RadioButton;
