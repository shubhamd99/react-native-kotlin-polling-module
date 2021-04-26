
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class App extends React.Component {
	public render() {
		return (
			<View style={styles.sectionContainer}>
				<Text style={styles.title}>Kotlin Polling Module</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	sectionContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	title: {
		fontSize: 22,
	}
});

export default App;
