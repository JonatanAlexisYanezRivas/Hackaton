import github from '../img/icons8-github.svg';
import instagram from '../img/icons8-instagram.svg';
import tiktok from '../img/icons8-tiktok.svg';

function Footer() {
    return (
        <footer className='foot' id='footer'>
            <div className="Contenido">
           <h3 className='h3'>Redes Sociales</h3>
           <ul className="redes">
               
              <li className='listFoot'><a href="https://github.com/JonatanAlexisYanezRivas" className="Git aFoot">
                <img src={github}></img>  
                </a></li>
              <li className='listFoot'><a href="https://www.instagram.com/alexis7n7r/" className="Insta aFoot">
                <img src={instagram}></img>  
                </a></li>
              <li className='listFoot'><a href="#" className="TikTok aFoot">
                  <img src={tiktok}></img>
                  </a></li>
          </ul>
           <p className='textFoot'>
              Para mas informacion acerca de especies en extincion visite el sitio oficial de la Comision Nacional 
              para el Conocimiento y Uso la Biodiversidad (CONABIO).
              Puedes ingresar a su sitio web pulsando
              <a className="Cona" href="https://www.biodiversidad.gob.mx/"> Justo Aqui</a>
           </p>
           
           
           
        </div>

        <div className="Regreso">
            <a href="#" className='a-regreso'>Regresar al Inicio</a>
        </div>
        </footer>
    );
}

export default Footer;