import React from 'react';

export const ContenedorCursos = () => {
  return <div>
       <div className="pagina-destacados">
          <div className="container">
            <div className="row">
              <div className="col-md-4 col-sm-12">
                <div className="cabecera-seccion">
                  <div className="line-dec" />
                  <h1>Cursos <span>disponibles.</span></h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="destacados container no-gutter">
          <div className="row posts">
            <div className="item low col-md-3">
              <a href="#">
                <div className="destacados-item">
                  <img src="assets/images/galeria/curso1.png" alt="" />
                  <h4>COMPUTACIÓN</h4>
                </div>
              </a>
            </div>
            <div className="item low col-md-3">
              <a href="#">
                <div className="destacados-item">
                  <img src="assets/images/galeria/curso2.png" alt="" />
                  <h4>INGLÉS</h4>
                </div>
              </a>
            </div>
            <div className="item new high col-md-3">
              <a href="#">
                <div className="destacados-item">
                  <img src="assets/images/galeria/curso3.png" alt="" />
                  <h4>ARTES PLÁSTICAS</h4>
                </div>
              </a>
            </div>
            <div className="item new high col-md-3">
              <a href="#">
                <div className="destacados-item">
                  <img src="assets/images/galeria/curso4.png" alt="" />
                  <h4>EDUCACIÓN ESPECIAL</h4>
                </div>
              </a>
            </div>
           
          
         
          
          </div>
        </div>
  </div>;
};
