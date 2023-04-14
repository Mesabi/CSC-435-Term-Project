import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import MyApp from './test_95.js'

import Aurora from './test.js';

import { withRouter } from "react-router-dom"; // this also works with 'react-router-native'



const Belt = () => {
    return (
        <>

<BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Aurora />} />
          <Route path="blogs" element={<MyApp />} />
          <Route path="contact" element={<Aurora />} />
          <Route path="*" element={<Aurora />} />
        </Route>
      </Routes>
    </BrowserRouter>




        </>
      );


    };

export default Belt;