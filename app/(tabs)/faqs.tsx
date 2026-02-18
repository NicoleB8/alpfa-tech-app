import { View, StyleSheet, Text } from "react-native";
import { ThemedView } from "@/components/themed-view";
import { ThemedText } from "@/components/themed-text";

import {
	SafeAreaView,
	SafeAreaProvider
} from 'react-native-safe-area-context';

export default function FAQScreen() {
	return(
		<SafeAreaProvider>	
			<ThemedView style={styles.themedContainer}>	
				<SafeAreaView style={styles.container}>
				<ThemedText style={styles.text}> Hello there </ThemedText>	
				</SafeAreaView>
			</ThemedView>	
		</SafeAreaProvider>
	);
}

const styles = StyleSheet.create({
	themedContainer: {
		flex: 1,
	},
	container: {
		flex: 1,
		backgroundColor: '##25292e',
		alignItems: 'center',
		justifyContent: 'center',
	},
	text: {
		color: '#fff',
	},

});
