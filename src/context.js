import React, { useState, useContext } from 'react';

const MyContext = React.createContext();

const MyComponent = () => {
  const [name, setName] = useState('Type here!');

  return (
    <MyContext.Provider value={{ name, setName }}>
      <ChildComponent />
    </MyContext.Provider>
  );
};

const ChildComponent = () => {
  const { name, setName } = useContext(MyContext);

  return (
    <div>
        <h2>The Line Below is equal to the textbox below</h2>
      <h2>{name}</h2>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
    </div>
  );
};

export default MyComponent;