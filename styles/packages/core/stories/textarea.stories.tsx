import * as React from 'react';
import { Meta } from '@storybook/react/types-6-0';

import TextArea from '../components/TextArea';

export default {
  title: 'TextArea',
  component: TextArea,
} as Meta;

export const Simple = () => {
  const [text, setValue] = React.useState('');

  return (
    <TextArea
      rows={10}
      cols={50}
      value={text}
      onChange={({
        target: { value },
      }: React.ChangeEvent<HTMLTextAreaElement>) => setValue(value)}
    />
  );
};

Simple.parameters = {
  design: {
    type: 'figma',
    url:
      'https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=3%3A18',
  },
};
