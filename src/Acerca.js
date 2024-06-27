import React from 'react';
import logo from './logo.svg';

const Acerca = () => {
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
      
      {/* Acerca De */}
      <div className="container">
    <div className="row">
        <div className="col-12 p-5" style={{ backgroundColor: '#4a4a4a', color: 'white', textAlign: 'center', fontSize: '20px', boxShadow: '0 5px 15px rgb(177, 177, 177)' }}>
            <h2 style={{ textAlign: 'center', fontSize: '30px' }} className="pt-5">Preguntas Frecuentes (FAQ)</h2>
            
            <h2 style={{ textAlign: 'left', fontSize: '25px'}} className="pt-5">1. ¿Qué es Ronin Img's?</h2>
            <p style={{ textAlign: 'left' }} className="pt-5">Ronin Img's es una plataforma dedicada al intercambio y la visualización de imágenes. Aquí puedes subir, compartir y descubrir imágenes de una comunidad diversa de usuarios.</p>
            
            <h2 style={{ textAlign: 'left', fontSize: '25px' }} className="pt-5">2. ¿Cómo me registro en Ronin Img's?</h2>
            <p style={{ textAlign: 'left' }} className="pt-5">Para registrarte, haz clic en el botón "Registro" en la parte superior izquierda de la página de inicio, completa el formulario de registro con tu información y sigue las instrucciones enviadas a tu correo electrónico para verificar tu cuenta.</p>
            
            <h2 style={{ textAlign: 'left', fontSize: '25px' }} className="pt-5">3. Subir y Compartir Imágenes</h2>
            <p style={{ textAlign: 'left' }} className="pt-5">Después de iniciar sesión, haz clic en el botón "Subir Imagen" y selecciona los archivos que deseas subir desde tu dispositivo. Puedes añadir descripciones, etiquetas y categorías para facilitar la búsqueda de tus imágenes.</p>
            
            <h2 style={{ textAlign: 'left', fontSize: '25px' }} className="pt-5">4. ¿Hay algún límite en el tamaño o la cantidad de imágenes que puedo subir?</h2>
            <p style={{ textAlign: 'left' }} className="pt-5">Sí, cada imagen no debe superar los 10 MB y puedes subir hasta 100 imágenes al mes con una cuenta gratuita. Los usuarios premium tienen mayores límites de subida.</p>

            <h2 style={{ textAlign: 'left', fontSize: '25px' }} className="pt-5">5. ¿Qué formatos de imagen son compatibles?</h2>
            <p style={{ textAlign: 'left' }} className="pt-5">Ronin Img's admite los formatos más comunes, como JPEG, PNG, GIF y BMP.</p>
            
            <h2 style={{ textAlign: 'center', fontSize: '25px' }} className="pt-5">Privacidad y Seguridad</h2>

            <h2 style={{ textAlign: 'left', fontSize: '25px' }} className="pt-5">6. ¿Mis imágenes son públicas o privadas?</h2>
            <p style={{ textAlign: 'left' }} className="pt-5">Puedes elegir la visibilidad de tus imágenes al subirlas. Tienes la opción de hacerlas públicas para que toda la comunidad pueda verlas, o privadas para que solo tú y las personas con quienes compartas el enlace puedan acceder a ellas.</p>
            
            <h2 style={{ textAlign: 'left', fontSize: '25px' }} className="pt-5">7. ¿Cómo protegen mi privacidad en Ronin Img's?</h2>
            <p style={{ textAlign: 'left' }} className="pt-5">Nos tomamos muy en serio la privacidad y seguridad de nuestros usuarios. Utilizamos cifrado para proteger tus datos y ofrecemos configuraciones de privacidad para que controles quién puede ver tus imágenes.</p>

            <h2 style={{ textAlign: 'center', fontSize: '25px' }} className="pt-5">Interacción y Comunidad</h2>
            
            <h2 style={{ textAlign: 'left', fontSize: '25px' }} className="pt-5">8. ¿Cómo puedo interactuar con otros usuarios?</h2>
            <p style={{ textAlign: 'left' }} className="pt-5">Puedes seguir a otros usuarios, comentar en sus imágenes y enviar mensajes privados. También puedes unirte a grupos y participar en discusiones.</p>
            
            <h2 style={{ textAlign: 'left', fontSize: '25px' }} className="pt-5">9. ¿Qué debo hacer si veo contenido inapropiado?</h2>
            <p style={{ textAlign: 'left' }} className="pt-5">Si encuentras contenido que infringe nuestras políticas, puedes reportarlo usando el botón "Reportar" junto a la imagen. Nuestro equipo revisará el reporte y tomará las medidas adecuadas.</p>

            <h2 style={{ textAlign: 'center', fontSize: '25px' }} className="pt-5">Cuenta y Configuración</h2>
            
            <h2 style={{ textAlign: 'left', fontSize: '25px' }} className="pt-5">10. ¿Cómo puedo cambiar mi nombre de usuario o contraseña?</h2>
            <p style={{ textAlign: 'left' }} className="pt-5">Ve a la sección "Configuración de la cuenta" en tu perfil. Desde allí, puedes actualizar tu información personal, incluyendo tu nombre de usuario y contraseña.</p>

            <h2 style={{ textAlign: 'left', fontSize: '25px' }} className="pt-5">11. ¿Qué hago si olvidé mi contraseña?</h2>
            <p style={{ textAlign: 'left' }} className="pt-5">Haz clic en "¿Olvidaste tu contraseña?" en la página de inicio de sesión y sigue las instrucciones para restablecer tu contraseña mediante el correo electrónico registrado.</p>

            <h2 style={{ textAlign: 'center', fontSize: '25px' }} className="pt-5">Suscripción y Pagos</h2>

            <h2 style={{ textAlign: 'left', fontSize: '25px' }} className="pt-5">12. ¿Ronin Img's es gratuito?</h2>
            <p style={{ textAlign: 'left' }} className="pt-5">Sí, ofrecemos una cuenta gratuita con acceso a la mayoría de las funciones. También tenemos planes de suscripción premium con beneficios adicionales como mayor capacidad de almacenamiento y características exclusivas.</p>

            <h2 style={{ textAlign: 'left', fontSize: '25px' }} className="pt-5">13. ¿Cómo puedo suscribirme a una cuenta premium?</h2>
            <p style={{ textAlign: 'left' }} className="pt-5">En tu perfil, ve a la sección "Suscripción" y selecciona el plan premium que mejor se adapte a tus necesidades. Sigue las instrucciones para completar el pago.</p>

            <h2 style={{ textAlign: 'center', fontSize: '25px' }} className="pt-5">Soporte</h2>

            <h2 style={{ textAlign: 'left', fontSize: '25px' }} className="pt-5">14. ¿Cómo puedo contactar al soporte de Ronin Img's?</h2>
            <p style={{ textAlign: 'left' }} className="pt-5">Puedes contactar a nuestro equipo de soporte a través del formulario de contacto en la página "Soporte" o enviando un correo electrónico a soporte@roninimgs.com. Estamos aquí para ayudarte con cualquier problema o pregunta que tengas.</p>
        </div>
    </div>
    
    <link rel='stylesheet'
		href= 
'https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css'></link>

</div>
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

export default Acerca;
