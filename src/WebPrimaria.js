import React from 'react';
import { Banner } from './components/Banner';
import { Cabecera } from './components/Cabecera';
import { Destacados } from './components/Destacados';
import { Pie } from './components/Pie';
import { Redes } from './components/Redes';


export const WebPrimaria = () => {
  return <div>
    <Redes />
    <Cabecera />
    <Banner />
    <Destacados />
    <Pie />         
  </div>;
};
