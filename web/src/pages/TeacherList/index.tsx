import React from 'react';

import PageHeader from '../../components/PageHeader'
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input'
import Select from '../../components/Select'

import './styles.css'

function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
           <PageHeader title="These are the available Proffys.">
               <form id="search-teachers">
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
                   <Input name="time" label="Time" type="time" />
               </form>
           </PageHeader>

          <main>
            <TeacherItem/>
            <TeacherItem/>
            <TeacherItem/>
          </main>
        </div>
    );
}

export default TeacherList;
  