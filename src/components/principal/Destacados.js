import React from 'react';
import { ContenedorCursos } from './ContenedorCursos';
import { ContenedorGaleria } from './ContenedorGaleria';
import { ContenedorNosotros } from './ContenedorNosotros';
import { ContenedrorAnuncios } from './ContenedrorAnuncios';


export const Destacados = () => {
  return <div>
       {/* Destacados*/}
        <ContenedorNosotros />
        <ContenedrorAnuncios />
        <ContenedorCursos />
        <ContenedorGaleria />
        {/* Destacados*/}
  </div>;
};
