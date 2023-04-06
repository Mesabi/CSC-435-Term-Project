import React, { useState } from 'react';
import LoginPage from './login-page';
import Square from './ticTacToe';
import UserPage from './user-page';

//use this to switch between web pages. 
function ParentComponent() {
    const [component, setComponent] = useState(1);
  
    const handleClick = (newComponent) => {
      setComponent(newComponent);
    }
  
    let componentToRender;
    switch (component) {
      case 1:
        componentToRender = <LoginPage />;
        break;
      case 2:
        componentToRender = <Square />;
        break;
      case 3:
        componentToRender = <LoginPage />;
        break;
      case 4:
        componentToRender = <UserPage />;
        break;
      default:
        componentToRender = <LoginPage />;
        break;
    }
  
    return (
      <div>
        <div>
          <button onClick={() => handleClick(1)}>Log In Page</button>
          <button onClick={() => handleClick(2)}>Tic Tac Toe</button>
          <button onClick={() => handleClick(3)}>Log In Page</button>
          <button onClick={() => handleClick(4)}>UserPage</button>
        </div>
        {componentToRender}
      </div>
    );
  }
  
  export default ParentComponent;