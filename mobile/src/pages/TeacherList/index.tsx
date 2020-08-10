import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView } from 'react-native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import AsyncStorage from '@react-native-community/async-storage';

import api from '../../services/api';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';

import styles from './styles';

function TeacherList() {
	const [isFiltersVisible, setIsFiltersVisible] = useState(false);
	
	const [teachers, setTeachers] = useState([]);
	const [favorites, setFavorites] = useState<number[]>([]);

	const [subject, setSubject] = useState('');
    const [week_day, setWeekDay] = useState('');
    const [time, setTime] = useState('');

	function loadFavorites() {
		AsyncStorage.getItem('favorites')
		.then(response => {
			if (response) {
				const favoritesTeachers = (JSON.parse(response));
				const favoritesTeachersId = favoritesTeachers.map((teacher: Teacher) => teacher.id);

				setFavorites(favoritesTeachersId);
			}
		});
	}

	function handleToggleFiltersVisible() {
		setIsFiltersVisible(!isFiltersVisible);
	}

	function handleFilterSubmit() {
		loadFavorites();
		
		api.get('classes', {
            params: {
                subject,
                week_day,
                time
            }
        }).then((response) => {
			setIsFiltersVisible(false);
            setTeachers(response.data)
        });
	}

	return (
		<View style={ styles.container }>
			<PageHeader 
				title="Available Proffys" 
				headerRight={(
					<BorderlessButton onPress={ handleToggleFiltersVisible }>
						<Feather name="filter" size={ 20 } color="#FFF" />
					</BorderlessButton>
				)}>
				{ isFiltersVisible && (
					<View style={ styles.searchForm }>
						<Text style={ styles.label }>Subject</Text>
						<TextInput 
							style={ styles.input}
							value={ subject }
							onChangeText={ text => setSubject(text) }
							placeholder="What's the subject?"
							placeholderTextColor="#C1bCCC"
						/>

						<View style={ styles.inputGroup }>
							<View style={ styles.inputBlock }>
								<Text style={ styles.label }>Week Day</Text>
								<TextInput 
									style={ styles.input}
									value={ week_day }
									onChangeText={ text => setWeekDay(text) }
									placeholder="Which day?"
									placeholderTextColor="#C1bCCC"
								/>
							</View>

							<View style={ styles.inputBlock }>
								<Text style={ styles.label }>Schedule</Text>
								<TextInput
									style={ styles.input}
									value={ time }
									onChangeText={ text => setTime(text) }
									placeholder="At what time?"
									placeholderTextColor="#C1bCCC"
								/>
							</View>
						</View>

						<RectButton style={ styles.submitButton } onPress={ handleFilterSubmit }>
							<Text style={ styles.submitButtonText }>Filter</Text>
						</RectButton>
					</View>
				)}

			</PageHeader>

			<ScrollView 
				style={ styles.teacherList }
				contentContainerStyle={{
					paddingHorizontal: 16,
					paddingBottom: 16
				}}
			>
				{teachers.map((teacher: Teacher) => {
					return (
						<TeacherItem 
							key={ teacher.id } 
							teacher={ teacher }
							setAsFavorite={ favorites.includes(teacher.id) }
						/>
					)
				})}
			</ScrollView>
			
		</View>
	);
}

export default TeacherList;