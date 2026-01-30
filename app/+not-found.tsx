import { View, StyleSheet } from 'react-native';
import { Link, Stack } from 'expo-router';


/* 
	This is a file for handling cases where the URL doesn't exist
	In here, we can modify how that screen looks like
	It's the same concept as the 404 error on other places

*/

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops! Not Found' }} />
      <View style={styles.container}>
        <Link href="/" style={styles.button}>
          Go back to Home screen!
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: 'center',
    alignItems: 'center',
  },

  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },
});
