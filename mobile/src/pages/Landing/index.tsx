import React, { useState, useEffect } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler'

import api from '../../services/api';

import styles from './styles';

import landingImage from '../../assets/images/landing.png';
import studyImage from '../../assets/images/icons/study.png';
import giveClassesImage from '../../assets/images/icons/give-classes.png';
import purpleHeartIcon from '../../assets/images/icons/heart.png';

function Landing() {
	const { navigate } = useNavigation();
    const [totalConnections, setTotalConnections] = useState(0);

    useEffect(() => {
        api.get('connections')
            .then(response => {
                const { total } = response.data;
                setTotalConnections(total)
            })
	}, []);

	function handleNavigateToGiveClassPage() {
		navigate('GiveClasses');
	}

	function handleNavigateToStudyPage() {
		navigate('Study');
	}

	return (
		<View style={ styles.container }>
				<Image source={ landingImage } style={ styles.banner }/>

				<Text style={ styles.title }>
						Welcome, {'\n'}
						<Text style={ styles.titleBold }>
								What do you want to do?
						</Text>
				</Text>

				<View style={ styles.buttonsContainer }>
					<RectButton
						style={ [styles.button, styles.buttonPrimary] }
						onPress={ handleNavigateToStudyPage }
					>
						<Image source={ studyImage } />
						<Text style={ styles.buttonText }>Study</Text>
					</RectButton>

					<RectButton
						style={ [styles.button, styles.buttonSecondary] }
						onPress={ handleNavigateToGiveClassPage }
					>
						<Image source={ giveClassesImage } />
						<Text style={ styles.buttonText }>Give classes</Text>
					</RectButton>
				</View>

				<Text style={ styles.totalConnections }>
					Total of { totalConnections } connections made {' '}
					<Image source={ purpleHeartIcon } />
				</Text>
		</View>
	);
}

export default Landing;