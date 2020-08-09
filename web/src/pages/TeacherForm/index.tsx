import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';

import PageHeader from '../../components/PageHeader'
import Input from '../../components/Input'
import Textarea from '../../components/Textarea'
import Select from '../../components/Select'

import api from '../../services/api';

import './styles.css'

import warningIcon from '../../assets/icons/warning.svg'


function TeacherForm() {
    const history = useHistory();

    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [bio, setBio] = useState('');
    const [subject, setSubject] = useState('');
    const [cost, setCost] = useState('');

    const [scheduleItems, setScheduleItems] = useState([
        { week_day: 0, from: '', to: '' }
    ]);

    function addNewScheduleItem() {
        setScheduleItems([
            ...scheduleItems,
            { week_day: 0, from: '', to: '' }
        ]);
    }

    function setScheduleItemValue(position: number, field: string, value: string) {
        const updatedScheduleItem = scheduleItems.map((scheduleItem, index) => {
            if (index === position) {
                return {
                    ...scheduleItem,
                    [field]: value
                }
            }

            return scheduleItem;
        })

        setScheduleItems(updatedScheduleItem);
    }

    function handleCreateClass(event: FormEvent) {
        event.preventDefault();

        api.post('classes', { 
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost: Number(cost),
            schedule: scheduleItems
        }).then(() => {
            alert('Successful registration!');

            history.push('/');
        }).catch(() => {
            alert('Registration error!');
        })
    }

    return (
        <div id="page-teacher-form" className="container">
           <PageHeader 
                title="That's amazing that you want to teach!"
                description="The first step is to fill out the registration form"
            />

            <main>
                <form onSubmit={ handleCreateClass }>
                    <fieldset>
                        <legend>Your personal data</legend>

                        <Input 
                            name="name"
                            label="Complete name"
                            value={ name }
                            onChange={ (e) => { setName(e.target.value)} }
                        />
                        <Input 
                            name="avatar" 
                            label="Avatar"
                            value={ avatar }
                            onChange={ (e) => { setAvatar(e.target.value)} }
                        />
                        <Input 
                            name="whatsapp" 
                            label="Whatsapp"
                            value={ whatsapp }
                            onChange={ (e) => { setWhatsapp(e.target.value)} }
                        />
                        <Textarea 
                            name="bio" 
                            label="Biography"
                            value={ bio }
                            onChange={ (e) => { setBio(e.target.value)} }
                        />
                    </fieldset>

                    <fieldset>
                        <legend>About the class</legend>
                        
                        <Select 
                            name="subject" 
                            label="Subject"
                            value={ subject }
                            onChange={ (e) => { setSubject(e.target.value)} }
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
                        <Input 
                            name="cost" 
                            label="Cost of your class per hour"
                            value={ cost }
                            onChange={ (e) => { setCost(e.target.value)} }
                        />
                    </fieldset>

                    <fieldset>
                        <legend>
                            Available schedules
                            <button type="button" onClick={ addNewScheduleItem } >
                                + New schedule
                            </button>
                        </legend>
                        
                            {scheduleItems.map((scheduleItem, index) => {
                                return (
                                    <div key={ scheduleItem.week_day } className="schedule-item">
                                        <Select 
                                            name="week_day" 
                                            label="Week Day"
                                            value={ scheduleItem.week_day }
                                            onChange={ (e) => { setScheduleItemValue(index, 'week_day', e.target.value)} }
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
                                        <Input 
                                            name="from" 
                                            label="From" 
                                            type="time"
                                            value={ scheduleItem.from }
                                            onChange={ (e) => { setScheduleItemValue(index, 'from', e.target.value)} }
                                        />
                                        <Input 
                                            name="to" 
                                            label="To" 
                                            type="time"
                                            value={ scheduleItem.to }
                                            onChange={ (e) => { setScheduleItemValue(index, 'to', e.target.value)} }
                                        />
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
                        <button type="submit">
                            Save register
                        </button>
                    </footer>
                </form>
            </main>
        </div>
    );
}

export default TeacherForm;
  