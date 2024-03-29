import React, { useState, useEffect } from 'react';
import LoginPage from './login-page';
import Square from './ticTacToe';
import UserPage from './user-page';
import CreateNewUser from './user-creation';
import { GlobalStyle, ThemeProvider} from '@react95/core';

function ParentComponent() {
  const [component, setComponent] = useState(1);

  useEffect(() => {
    return () => {
      // This cleans up memory leaks...
      console.log(`Component ${component} unmounted.`);
    };
  }, [component]);

  const handleClick = (newComponent) => {
    setComponent(newComponent);
  }

  let componentToRender;
  switch (component) {
    case 1:
      componentToRender = <LoginPage />;
      break;
    case 2:
      componentToRender = <CreateNewUser />;
      break;
    case 3:
      componentToRender = <LoginPage />;
      break;
    case 4:
      componentToRender = <UserPage />;
      break;
    case 5:
      componentToRender = <LoginPage />;
      break;
    default:
      componentToRender = <LoginPage />;
      break;
  }

  return (
    <>
    <ThemeProvider>    
      <GlobalStyle></GlobalStyle>
      <div>
        <div>
          <button onClick={() => handleClick(1)}>Log In Page</button>
          <button onClick={() => handleClick(2)}>Create New User (week 4)</button>
          <button onClick={() => handleClick(3)}>Log In Page</button>
          <button onClick={() => handleClick(4)}>UserPage</button>
          <button onClick={() => handleClick(5)}>UserPage</button>
        </div>
        {componentToRender}
      </div>
    </ThemeProvider>    
    </>
  );
}

export default ParentComponent;