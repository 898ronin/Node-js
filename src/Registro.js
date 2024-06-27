import React from 'react';
import logo from './logo.svg';


const Registro = () => {
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
                <a className="nav-link" href="/acerca">Preguntas Frecuentes</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
      {/*Main*/}
      <section class="hero is-medium">
        <div class="hero-body">
          <div class="container">
            <div class="columns is-centered">
              <div class="column is-5-tablet is-4-desktop is-3-widescreen">
                <form action="" class="box">
                  <div class="field"></div>
                    <label for="" class="label">Email</label>
                    <div class="control has-icons-left">
                      <input type="email" placeholder="usuario@gmail.com" class="input" required></input>
                      <span class="icon is-small is-left">
                        <i class="fa fa-envelope"></i>
                      </span>
                    <label for="" class="label">Confirmar Email</label>
                    <div class="control has-icons-left">
                      <input type="email" placeholder="usuario@gmail.com" class="input" required></input>
                      <span class="icon is-small is-left">
                        <i class="fa fa-envelope"></i>
                      </span>
                    </div>
                  </div>
                  <div class="field">
                    <label for="" class="label">Constraseña</label>
                    <div class="control has-icons-left">
                      <input type="password" placeholder="*******" class="input" required></input>
                      <span class="icon is-small is-left">
                        <i class="fa fa-lock"></i>
                      </span>
                    </div>
                  </div>
                  <div class="field">
                    <label for="" class="label">Confirmar Constraseña</label>
                    <div class="control has-icons-left">
                      <input type="password" placeholder="*******" class="input" required></input>
                      <span class="icon is-small is-left">
                        <i class="fa fa-lock"></i>
                      </span>
                    </div>
                  </div>
                  <div class="field">
                    <label for="" class="label">RUT</label>
                    <div class="control has-icons-left">
                      <input type="search" placeholder="xx.xxx.xxx-x" class="input" required></input>
                      <span class="icon is-small is-left">
                        <i class="fa fa-lock"></i>
                      </span>
                    </div>
                  </div>
                  <div class="field">
                    <div class="field">
                      <button id="modal_button" class="js-modal-trigger button is-success" data-target="modal-js-example">Terminos y Condiciones</button>
                    </div>
                    <label for="" class="checkbox">
                      <input id="termsCheckbox" type="checkbox"></input>
                      Aceptar Terminos y Condiciones
                    </label>
                  </div>
                  <div class="field">
                    <button class="button is-success">
                      Registrarme
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <link rel='stylesheet'
		href= 
    'https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css'></link>

      
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

 


export default Registro;
