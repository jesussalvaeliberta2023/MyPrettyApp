import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.secondaryContainer}>
        <Text style={styles.myName} >Wellington de Oliveira</Text>
        <Text style={styles.myNumber} >34</Text>
        <Text style={styles.classNumber} >07</Text>
        <Text style={styles.myThing} >#VouComJesus</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  secondaryContainer: {
    flex: 1 ,
    width: '100%',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },

  myName: {
    color: 'blue',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'end',
  },

  myNumber: {
    borderWidth: 1,
    borderColor: 'purple',
    fontSize: 25,
    fontStyle: 'italic',
    textAlign: 'start',
  },

  classNumber: {
    backgroundColor: 'pink',
    fontSize: 20,
    textAlign: 'center',
  },

  myThing: {
    borderWidth: 2,
    color: 'white',
    borderColor: 'grey',
    backgroundColor: 'orange',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },

});