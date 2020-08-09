import React from 'react';

import PageHeader from '../../components/PageHeader'

import './styles.css'

function TeacherForm() {
    return (
        <div id="page-teacher-form" className="container">
           <PageHeader 
                title="That's amazing that you want to teach!"
                description="The first step is to fill out the registration form"
            />

            <main>
                <fieldset>
                    <legend>Your personal data</legend>

                    <div className="input-block">
                        <label htmlFor="name">Complete name</label>
                        <input type="text" id="name" />
                   </div>

                   <div className="input-block">
                        <label htmlFor="avatar">Avatar</label>
                        <input type="text" id="avatar" />
                   </div>

                   <div className="input-block">
                        <label htmlFor="whatsapp">Whatsapp</label>
                        <input type="text" id="whatsapp" />
                   </div>
                </fieldset>
            </main>
        </div>
    );
}

export default TeacherForm;
  