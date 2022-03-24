import React from 'react';

export const Cabecera = () => {
  return <div>
       {/* Cabecera */}
       <div className="cabecera">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="logo">
                  <img src="assets/images/logo.png" alt="" />
                </div>
              </div>
              <div className="col-md-12">
                <div className="cabecera-menu">
                  <ul>
                    <li><a href="index.html">Inicio</a></li>
                    <li><a href="#">Oferta</a></li>
                    <li><a href="#">Nosotros</a></li>
                    <li><a href="#">Cursos</a></li>
                    <li><a href="#">Galería</a></li>
                    <li><a href="#">Visítanos</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Cabecera */}
  </div>;
};
