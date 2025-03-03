import {React,useContext,  useState } from 'react';
import { DiaryContext, DiaryProvider } from '../DiaryContext';
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const WriteDiaryPage = () => {
  const [timeOfDay, setTimeOfDay] = useState('');
  const [lastMealTime, setLastMealTime] = useState('');
  const [bodyFeeling, setBodyFeeling] = useState('');
  const [systolicBP, setSystolicBP] = useState('');
  const [diastolicBP, setDiastolicBP] = useState('');
  const { addDiaryEntry } = useContext(DiaryContext);

  const handleSave = () => {
    const entry = { timeOfDay, lastMealTime, bodyFeeling, systolicBP, diastolicBP };
    addDiaryEntry(entry);
  };

  return (
    <ScrollView style={styles.container}>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>General Information</Text>
        <TextInput
          style={styles.input}
          value={timeOfDay}
          onChangeText={setTimeOfDay}
          placeholder="Enter time of day"
        />
        <TextInput
          style={styles.input}
          value={lastMealTime}
          onChangeText={setLastMealTime}
          placeholder="Enter time of last meal"
        />
        <TextInput
          style={styles.textArea}
          value={bodyFeeling}
          onChangeText={setBodyFeeling}
          placeholder="How do you feel?"
          multiline
        />
      </View>

      <View style={styles.section}>
      <Text style={styles.sectionTitle}>Blood Pressure Readings</Text>
        <TextInput
          style={styles.input}
          value={systolicBP}
          onChangeText={setSystolicBP}
          placeholder="Systolic mm Hg (Upper number)"
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          value={diastolicBP}
          onChangeText={setDiastolicBP}
          placeholder="Diastolic mm Hg (Lower number)"
          keyboardType="numeric"
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 30,
    textAlign: 'center',
  },
  section: {
    marginBottom: 30,
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#E6E6FA', 
    shadowColor: '#000', 
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  input: {
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
  },
  textArea: {
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    minHeight: 80,
    textAlignVertical: 'top', 
    marginBottom: 15,
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
  },

});

export default WriteDiaryPage;