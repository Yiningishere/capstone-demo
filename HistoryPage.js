import {React,  useContext } from 'react';
import { DiaryContext, DiaryProvider } from '../DiaryContext';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const HistoryPage = () => {
  const { diaryEntries } = useContext(DiaryContext);

  return (
    <ScrollView style={styles.container}>
      {diaryEntries.map((entry, index) => (
        <View key={index} style={styles.entry}>
          <Text style={styles.entryText}>Time of Day: {entry.timeOfDay}</Text>
          <Text style={styles.entryText}>Last Meal: {entry.lastMealTime}</Text>
          <Text style={styles.entryText}>Feeling: {entry.bodyFeeling}</Text>
          <Text style={styles.entryText}>Blood Pressure: {entry.systolicBP}/{entry.diastolicBP} mm Hg</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#E6E6FA',
  },
  entry: {
    backgroundColor: '#f9f9f9', 
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000', 
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  entryText: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333', 
  },

});

export default HistoryPage;