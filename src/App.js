import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState, useEffect } from "react";
import Axios from 'axios';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Pagination from '@mui/material/Pagination';
import {useNavigate} from 'react-router-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './home';
import Filters from './filter'; 
import Catagory from './catagory';
import ProductDetails from './productDetails';

function App() {

 
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/searchItem' element={<Filters />} />
      <Route path='/catagory' element={<Catagory />} />
      <Route path='/ProductDetails' element={<ProductDetails />} /> 
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App; 
