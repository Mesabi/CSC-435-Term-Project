import React, { useState } from 'react';

import { Route } from "react-router-dom";
import MyContext from "./context.js"
import AppStore from './react_store.js';

const Delta = () => {
    return (
        <>
        <h1>This is a Test of Redux Store:</h1>
        <AppStore></AppStore>
        </>
      );


    };

export default Delta;