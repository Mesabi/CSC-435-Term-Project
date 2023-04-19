import React, { useState } from 'react';

import { Route } from "react-router-dom";
import MyContext from "./context.js"

const Aurora = () => {
    return (
        <>
                <h1>This is a Test of MyContext:</h1>
        <MyContext></MyContext>
        </>
      );


    };

export default Aurora;