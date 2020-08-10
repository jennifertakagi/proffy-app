import React, { useState, FormEvent } from 'react';

import api from '../../services/api';

import PageHeader from '../../components/PageHeader'
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import Input from '../../components/Input'
import Select from '../../components/Select'

import './styles.css'

function TeacherList() {
    const [teachers, setTeachers] = useState([]);

    const [subject, setSubject] = useState('');
    const [week_day, setWeekDay] = useState('');
    const [time, setTime] = useState('');
    
    function searchTeachers (event: FormEvent) {
        event.preventDefault();

         api.get('classes', {
            params: {
                subject,
                week_day,
                time
            }
        }).then((response) => {
            setTeachers(response.data)
        });
    }

    return (
        <div id="page-teacher-list" className="container">
           <PageHeader title="These are the available Proffys.">
               <form id="search-teachers" onSubmit={ searchTeachers }>
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

                    <Select 
                        name="week_day" 
                        label="Week Day"
                        value={ week_day }
                        onChange={ (e) => { setWeekDay(e.target.value)} }
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
                        name="time" 
                        label="Time" 
                        type="time" 
                        value={ time }
                        onChange={ (e) => { setTime(e.target.value)} }
                    />

                    <button type="submit">
                        Search
                    </button>
               </form>
           </PageHeader>

          <main>
              {teachers.map((teacher: Teacher) => {
                return <TeacherItem key={ teacher.id } teacher={teacher} />
              })}
          </main>
        </div>
    );
}

export default TeacherList;
  