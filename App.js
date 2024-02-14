import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [guess, setGuess] = useState('');
  const [random, setRandom] =useState(Math.floor(Math.random() * 100) + 1);
  const[result, setResult] = useState('');

  const checkGuess = () => {
    const userGuess = parseFloat(guess);
    if (!isNaN(userGuess)) {
      setResult(result + 1)
      if (userGuess < random) {
        Alert.alert('Your guess was too low, guess again');
      } else if (userGuess > random) {
        Alert.alert('Your guess was too high, guess again');
      } else {
        Alert.alert(`You were right!!! Very nice nice! It took you ${result + 1} guesses.`);
        setRandom(Math.floor(Math.random() * 100) + 1);
        setResult(0);
      }
    }
  };


  return (
    <View style={styles.container}>
      <Text>Make a guess between 1-100</Text>
      <TextInput
      keyboardType='numeric'
      placeholder='enter your guess'
      value={guess}
      onChangeText={setGuess}
      style={{height:40, width: 200, borderColor: "gray", borderWidth: 2, marginBottom: 10, marginTop:10 }}
      />
      <Button title='MAKE GUESS'
        onPress={checkGuess}
        
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
