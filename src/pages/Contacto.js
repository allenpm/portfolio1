import '../styles/pages/Contacto.css';

const ContactoPage = (props) => {
    return(
        <main>
         <section className="contacto">
          <h2>Información de contacto</h2>
          <br/>
          <h5>email: allen.perezma@gmail.com</h5>
  
          <br/>
          <p>Puede llenar el formulario que se encuentra a un lado en caso de requerir hacer una consulta o preferir contactar por ese medio. Le solicito que brinde la información de contacto requerida para tener una mejor devolución por mi parte.</p>
         </section>
          <form method="post" name= "contacto-formulario"  action="https://formspree.io/f/moqrabpy" method="POST" id="form">
              <label for="name">Dejeme su nombre y apellido</label><br/>
              <input type="text" name="name" id="name" placeholder="Juan Perez"/><br/>
              <br/>
              <label for="email">Ingrese su email por favor</label><br/>
              <input type="email" name="email" id="email" placeholder="ejemplo@mail.com"/><br/>
              <br/>
              <label for="motivo">¿Motivo de contacto?</label><br/>
              <select name="motivo" id="motivo">
                  <option value="0">Elija el motivo</option> 
                  <option value="1">Oferta de empleo</option> 
                  <option value="2">Otro (aclare en el email)</option>  
              </select><br/>
              <br/>
              <label for="texto">Deje su mensaje aquí:</label><br/>
              <textarea name="texto" rows="10" cols="40"></textarea><br/>
                  <br/>
               <input type="submit" id="enviarCorreo" value="¡Enviar!" class="button"/>
           </form>
      </main>
    )
} 
export default ContactoPage