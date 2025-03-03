import {React, useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const PatientInfoPage = () => {
  const [patientName, setPatientName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [primaryDoctor, setPrimaryDoctor] = useState('');
  const [medicalHistory, setMedicalHistory] = useState('');
  const [allergy, setAllergy] = useState('');
  const [currentMedication, setCurrentMedication] = useState('');

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Patient Information</Text>

      <Text style={styles.label}>Name:</Text>
      <TextInput
        style={styles.input}
        value={patientName}
        onChangeText={setPatientName}
        placeholder="Enter patient's name"
      />

      <Text style={styles.label}>Date of Birth:</Text>
      <TextInput
        style={styles.input}
        value={dateOfBirth}
        onChangeText={setDateOfBirth}
        placeholder="Enter date of birth"
      />

      <Text style={styles.label}>Contact Number:</Text>
      <TextInput
        style={styles.input}
        value={contactNumber}
        onChangeText={setContactNumber}
        placeholder="Enter contact number"
        keyboardType="phone-pad"
      />

      <Text style={styles.label}>Email Address:</Text>
      <TextInput
        style={styles.input}
        value={emailAddress}
        onChangeText={setEmailAddress}
        placeholder="Enter email address"
        keyboardType="email-address"
      />

      <Text style={styles.label}>Name of Primary Doctor:</Text>
      <TextInput
        style={styles.input}
        value={primaryDoctor}
        onChangeText={setPrimaryDoctor}
        placeholder="Enter primary doctor's name"
      />

      <Text style={styles.label}>Medical History:</Text>
      <TextInput
        style={styles.input}
        value={medicalHistory}
        onChangeText={setMedicalHistory}
        placeholder="Enter medical history"
        multiline
      />

      <Text style={styles.label}>Allergy:</Text>
      <TextInput
        style={styles.input}
        value={allergy}
        onChangeText={setAllergy}
        placeholder="Enter allergy details"
        multiline
      />

      <Text style={styles.label}>Current Medication:</Text>
      <TextInput
        style={styles.input}
        value={currentMedication}
        onChangeText={setCurrentMedication}
        placeholder="Enter current medication"
        multiline
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Save Information</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#E6E6FA', 
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#4a4a4a', 
    marginBottom: 25,
    textAlign: 'center', 
  },
  label: {
    fontSize: 18,
    color: '#4a4a4a', 
    marginBottom: 10,
  },
  input: {
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#cccccc', 
    borderRadius: 5, 
    padding: 12,
    marginBottom: 20,
    backgroundColor: '#ffffff', 
  },
  button: {
    backgroundColor: '#007bff', 
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    fontSize: 18,
    color: '#ffffff', 
  },
  
});

export default PatientInfoPage;