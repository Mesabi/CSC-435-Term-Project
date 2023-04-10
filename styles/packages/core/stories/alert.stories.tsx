import * as React from 'react';
import { Meta } from '@storybook/react/types-6-0';

import Alert, { AlertType } from '../components/Alert/Alert';
import Button from '../components/Button';
import Dropdown from '../components/Dropdown';
import Checkbox from '../components/Checkbox';

export default {
  title: 'Alert',
  component: Alert,
} as Meta;

export const Simple = () => {
  const [showAlert, toggleShowAlert] = React.useState(false);
  const [withSound, toggleWithSound] = React.useState(false);
  const [type, setType] = React.useState<AlertType>('error');

  const handleOpenAlert = () => toggleShowAlert(true);
  const handleCloseAlert = () => toggleShowAlert(false);
  const onImageChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setType(e.target.value as AlertType);

  return (
    <>
      <div style={{ marginBottom: 10 }}>
        Alert Type:
        <Dropdown
          options={['error', 'info', 'question', 'warning']}
          onChange={onImageChange}
        />
        <Checkbox
          checked={withSound}
          onChange={() => toggleWithSound(!withSound)}
        >
          sound
        </Checkbox>
      </div>
      <Button onClick={handleOpenAlert}>Trigger Alert</Button>
      {showAlert && (
        <Alert
          title="Windows Networking"
          type={type}
          message="The Windows password you typed is incorrect."
          closeAlert={handleCloseAlert}
          hasSound={withSound}
          buttons={[{ value: 'OK', onClick: handleCloseAlert }]}
        />
      )}
    </>
  );
};

Simple.parameters = {
  design: {
    type: 'figma',
    url:
      'https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit?node-id=0%3A1',
  },
};
