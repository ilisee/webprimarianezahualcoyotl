import React from 'react';
import { Banner } from './components/principal/Banner';
import { Cabecera } from './components/Cabecera';
import { Destacados } from './components/principal/Destacados';
import { Pie } from './components/Pie';
import { Redes } from './components/principal/Redes';


export const WebPrimaria = () => {
  return <div>
    <Redes />
    <Cabecera />
    <Banner />
    <Destacados />
    <Pie />         
  </div>;
};
