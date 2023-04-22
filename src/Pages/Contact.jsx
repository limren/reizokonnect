import React from "react";

export const Contact = () => {
  return (
    <div className='contact'>
      <div className='contact-info'>
        <h3>Notre mail : contact@reizokonnect.com</h3>
        <h4>Ou contactez-nous directement via ce formulaire :</h4>
      </div>
      <form>
        <label for='name'>Nom :</label>
        <input type='text' id='name' name='user_name' required />

        <label for='email'>Email :</label>
        <input type='email' id='email' name='user_email' required />

        <label for='message'>Message :</label>
        <textarea id='message' name='user_message' required></textarea>

        <input type='submit' value='Envoyer' />
      </form>
    </div>
  );
};
