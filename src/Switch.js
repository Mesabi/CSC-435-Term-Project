import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import MyApp from './Test.js'

import Aurora from './test_2.js';

import Delta from './test_3'

import { withRouter } from "react-router-dom"; // this also works with 'react-router-native'
import Landing from './landing';



const Belt = () => {
    return (
        <>

<BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Landing />} />
          <Route path="blogs" element={<MyApp />} />
          <Route path="context" element={<Aurora />} />
          <Route path="Redux" element={<Delta />} />
          <Route path="*" element={<Aurora />} />
        </Route>
      </Routes>
    </BrowserRouter>




        </>
      );


    };

export default Belt;