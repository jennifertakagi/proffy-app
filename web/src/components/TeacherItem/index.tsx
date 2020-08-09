import React from 'react';

import './styles.css'

import whatsappIcon from '../../assets/icons/whatsapp.svg'

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars2.githubusercontent.com/u/31541321?s=460&u=9ed794fbd85ae1e136fdd3910ec0eee70911a7cb&v=4" alt="Jennifer Takagi" />
                <div>
                    <strong>Jennifer Takagi</strong>
                    <span>Química</span>
                </div>
            </header>
            <p>
                Entusiasta das melhores tecnologias de quimica avançada.
                <br /><br />
                Apiaxonada por explodir coisas em laboratórios e por mudar a vida
                das pessoas atraves de experiencias!
            </p>
            <footer>
                <p>
                    Preço/Hora
                    <strong>R$ 90,00</strong>
                </p>
                <button type="button">
                    <img src={ whatsappIcon } alt="Whatsapp icon" />
                    Get in touch
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;
  