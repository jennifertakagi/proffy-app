import React, { useState } from 'react';

import PageHeader from '../../components/PageHeader'
import Input from '../../components/Input'
import Textarea from '../../components/Textarea'
import Select from '../../components/Select'

import warningIcon from '../../assets/icons/warning.svg'

import './styles.css'

function TeacherForm() {
    const [scheduleItems, setScheduleItem] = useState([
        { week_day: 0, from: '', to: '' }
    ]);

    function addNewScheduleItem () {
        setScheduleItem([
            ...scheduleItems,
            { week_day: 0, from: '', to: '' }
        ]);
    }

    return (
        <div id="page-teacher-form" className="container">
           <PageHeader 
                title="That's amazing that you want to teach!"
                description="The first step is to fill out the registration form"
            />

            <main>
                <fieldset>
                    <legend>Your personal data</legend>

                    <Input name="name" label="Complete name" />
                    <Input name="avatar" label="Avatar" />
                    <Input name="whatsapp" label="Whatsapp" />
                    <Textarea name="bio" label="Biography"/>
                </fieldset>

                <fieldset>
                    <legend>About the class</legend>
                    
                    <Select 
                        name="subject" 
                        label="Subject"
                        options={[
                            { value: 'Angular JS', label: 'Angular JS' },
                            { value: 'Cypress', label: 'Cypress' },
                            { value: 'Javascript', label: 'Javascript' },
                            { value: 'Jest', label: 'Jest' },
                            { value: 'Molecular JS', label: 'Molecular JS' },
                            { value: 'Mongo DB', label: 'Mongo DB' },
                            { value: 'Node JS', label: 'Node JS' },
                            { value: 'React', label: 'React' },
                            { value: 'React Native', label: 'React Native' },
                            { value: 'Vue JS', label: 'Vue JS' }
                        ]}
                    />
                    <Input name="cost" label="Cost of your class per hour" />
                </fieldset>

                <fieldset>
                    <legend>
                        Available schedules
                        <button type="button" onClick={ addNewScheduleItem } >
                            + New schedule
                        </button>
                    </legend>
                    
                        {scheduleItems.map(scheduleItem => {
                            return (
                                <div key={ scheduleItem.week_day } className="schedule-item">
                                    <Select 
                                        name="week_day" 
                                        label="Week Day"
                                        options={[
                                            { value: '0', label: 'Sunday' },
                                            { value: '1', label: 'Monday' },
                                            { value: '2', label: 'Tuesday' },
                                            { value: '3', label: 'Wednesday' },
                                            { value: '4', label: 'Thursday' },
                                            { value: '5', label: 'Friday' },
                                            { value: '6', label: 'Saturday' }
                                        ]}
                                    />
                                    <Input name="from" label="From" type="time" />
                                    <Input name="to" label="To" type="time" />
                                </div>
                            )
                        })}
                       
                </fieldset>
                <footer>
                    <p>
                        <img src={ warningIcon } alt="Important warning" />
                        Warning! <br />
                        Fill in all the data
                    </p>
                    <button type="button">
                        Save register
                    </button>
                </footer>
            </main>
        </div>
    );
}

export default TeacherForm;
  