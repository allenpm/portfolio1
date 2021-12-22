import '../styles/pages/Home.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faTerminal, faWindowRestore } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core';
import { far } from '@fortawesome/free-regular-svg-icons';


library.add(
  faWindowRestore,
  faTerminal,
  faCode,
  far,
  
);

const Home = (props) => {
    return (
        <main>
         <section className="name">
          <h2>
            Allen Dante Perez Mari
          </h2>
  
         </section>
         <section className="descripcion">
          <br />
          <h3>Un poco sobre mí</h3>
            <br/>
          <p>Soy un desarrollador web frontend que trabaja con JavaScript, HTML, CSS y React.</p>
          <p>Realizo diseño y maquetado web a través de esos medios. Me apasiona mucho este área y estoy constantemente aprendiendo cosas nuevas para mejorar mis habilidades.</p>
          <br/>
          <br/>
          <div className="iconos">
            <FontAwesomeIcon icon={ faCode } /> 
            <FontAwesomeIcon icon={ faWindowRestore} />
            <FontAwesomeIcon icon={ faTerminal } /> 
          </div>  
          <a href= "https://cvinteractivoadpm.000webhostapp.com/" target="_blank" className="buttonhome">CV Interactivo</a>
         </section>
        </main>
    )
}
export default Home;