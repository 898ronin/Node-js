import React from 'react';
import { Anchor, Carousel } from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';
import './Home.css';
import img1 from './img/img1.png';
import img2 from './img/img2.png';
import img3 from './img/img3.png';

const Home = () => {
  return (
    <div>
      {/* Encabezado */}
      <header className="d-flex align-items-center p-3">
        <img src={logo} alt="Logo" style={{ width: '100px', height: '100px' }} />
        <h1 className="ms-3">Ronin Img´s</h1>
      </header>
      
      {/* Menú de navegación */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="/">Inicio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/registro">Registro</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/acerca">Acerca</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
      {/* Carrusel de imágenes */}
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img1}
            alt="Primera imagen"
          />
          <Carousel.Caption>
            <br></br>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img2}
            alt="Segunda imagen"
          />
          <Carousel.Caption>
            <br></br>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img3}
            alt="Tercera imagen"
          />
          <Carousel.Caption>
            <br></br>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      
      {/* Pié de página */}
      <footer class="small bg-light">
      <div class="container py-3 py-sm-5">
        <div class="row">
          <div class="col-12 col-sm-6 col-md-3">
            <h6>Links rapidos</h6>
            <ul class="list-unstyled">
              <li><a href="#">Inicio</a></li>
              <li><a href="#">Qué hay de nuevo</a></li>
              <li><a href="#">Imagenes destacadas</a></li>
              <li><a href="#">Mi cuenta</a></li>
            </ul>
          </div>
          <div class="col-12 col-sm-6 col-md-3">
            <h6>Información</h6>
            <ul class="list-unstyled">
              <li><a href="#">Sobre nosotros</a></li>
              <li><a href="#">Membresia</a></li>
              <li><a href="#">Cantacto</a></li>
              <li><a href="#">Tienda fisica</a></li>
            </ul>
          </div>
          <div class="col-12 col-sm-6 col-md-3">
            <h6>Siguenos</h6>
            <ul class="list-unstyled">
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">LinkedIn</a></li>
              <li><a href="#">YouTube</a></li>
            </ul>
          </div>
          <div class="col-12 col-sm-6 col-md-3">
            <address>
              <h6>Ronin S.P.A</h6>
              Chile<br />
              Maipú, Av. 2da Transversal<br />
              <abbr title="Telephone">Telefono: </abbr
              ><a href="#">(+56 9) 1234 3214</a><br />
              <abbr title="Mail">Mail: </abbr
              ><a href="#">ronin@contacto.cl</a>
            </address>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-sm-6 col-md-9">
            <ul class="list-inline">
              <li class="list-inline-item">&copy; 2024 Compañía Web, Inc.</li>
              <li class="list-inline-item">Todos los Derechos Reservados.</li>
              <li class="list-inline-item">
                <a href="#">Términos de uso y políticas de privacidad</a>
              </li>
            </ul>
          </div>
          <div class="col-12 col-sm-6 col-md-3">
            <div class="dropdown dropup p-0">
             
              
            </div>
          </div>
        </div>
      </div>
    </footer>

    
        <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css"
        integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb"
        crossorigin="anonymous"/>

    </div>
  );
}

export default Home;