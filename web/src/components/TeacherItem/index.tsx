import React from 'react';

import api from '../../services/api';

import './styles.css'

import whatsappIcon from '../../assets/icons/whatsapp.svg'

export interface Teacher {
    avatar: string,
    bio: string,
    cost: number,
    id: number,
    name: string,
    subject: string,
    whatsapp: number
}
interface TeacherItemProps {
    teacher: Teacher;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
    function createNewConnection() {
        api.post('connections', {
            user_id: teacher.id
        })
    }

    return (
        <article className="teacher-item">
            <header>
                <img src={ teacher.avatar } alt="Jennifer Takagi" />
                <div>
                    <strong>{ teacher.name }</strong>
                    <span>{ teacher.subject }</span>
                </div>
            </header>
            <p>{ teacher.bio }</p>
            <footer>
                <p>
                    Preço/Hora
                    <strong>R$ { teacher.cost }</strong>
                </p>
                <a 
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`https://wa.me/${teacher.whatsapp}`}
                    onClick={ createNewConnection }
                >
                    <img src={ whatsappIcon } alt="Whatsapp icon" />
                    Get in touch
                </a>
            </footer>
        </article>
    );
}

export default TeacherItem;
  