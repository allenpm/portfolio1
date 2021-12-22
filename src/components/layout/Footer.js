import '../../styles/layout/Footer.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core';
import { far } from '@fortawesome/free-regular-svg-icons';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';

library.add(
  far,
  faCopyright,
  
);

const Footer = (props) => {
  return(
    <footer>
  <div className= "pie">
   <div className="copyright">
   <FontAwesomeIcon icon={ far, faCopyright } /><a>Allen Dante Perez Mari</a>
   </div>
   <div class="contactitos">
    <a href="https://github.com/allenpm" target="_blank"><FontAwesomeIcon icon={ faGithub } />GitHub</a>
    <a href="https://www.linkedin.com/in/allenperezmari/" target="_blank"><FontAwesomeIcon icon={ faLinkedin } />LinkedIn</a>
   </div>
 </div>
</footer>
  )
}

export default Footer;
