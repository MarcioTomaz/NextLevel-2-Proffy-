import React from 'react';

import whatsappIcon from './../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://www.jbox.com.br/wp/wp-content/uploads/2018/12/dr-stone-anime-destacada.jpg" alt="Dr Stone " />
        <div>
          <strong>Dr stone</strong>
          <span>Química</span>
        </div>
      </header>

      <p>
        Entusiasta das melhores tecnologias de química avançada.
        <br /> <br />
        Apaixonado por explodir coisas em laboratorio e por mudar a vida das pessoas através de experiências.
    </p>

      <footer>
        <p>
          Preço/Hora
        <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="whatsapp" />
        Entrar em Contato
      </button>
      </footer>
    </article>
  );
}

export default TeacherItem;