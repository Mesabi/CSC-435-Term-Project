import React, { useState } from 'react';
import { Button, Checkbox, TitleBar, ThemeProvider } from '@react95/core';
import '@react95/icons/icons.css';


const MyApp = () => (
    <ThemeProvider>
        <TitleBar></TitleBar>
        <br></br>
      <Button>Click me!</Button>
        <Checkbox></Checkbox>
    </ThemeProvider>
  );

  export default MyApp;