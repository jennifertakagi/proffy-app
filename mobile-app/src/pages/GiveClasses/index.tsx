import React from 'react';
import { View, ImageBackground, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler'

import styles from './styles';

import giveClassesBackgroundImage from '../../assets/images/give-classes-background.png';

function GiveClasses() {
	const { goBack } = useNavigation();

	function handleNavigateBack() {
		goBack();
	}

	return (
		<View style={ styles.container }>
			<ImageBackground 
				source={ giveClassesBackgroundImage }
				style={ styles.content }
				resizeMode="contain"
			>
				<Text style={ styles.title }>Do you want to be a Proffy?</Text>
				<Text style={ styles.description }>To get start you need to register as a Proffy on our web platform :)</Text>
			</ImageBackground>

			<RectButton style={ styles.okButton } onPress={ handleNavigateBack }>
				<Text style={ styles.okButtonText }>OK :( go back</Text>
			</RectButton>
		</View>
	);
}

export default GiveClasses;