import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const HelpPage = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Normal</Text>
        <Text style={styles.cardContent}>Systolic: Less than 120 mm Hg</Text>
        <Text style={styles.cardContent}>Diastolic: Less than 80 mm Hg</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Elevated</Text>
        <Text style={styles.cardContent}>Systolic: 120-129 mm Hg</Text>
        <Text style={styles.cardContent}>Diastolic: Less than 80 mm Hg</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Hypertension Stage 1</Text>
        <Text style={styles.cardContent}>Systolic: 130-139 mm Hg</Text>
        <Text style={styles.cardContent}>Diastolic: 80-89 mm Hg</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Hypertension Stage 2</Text>
        <Text style={styles.cardContent}>Systolic: 140 mm Hg or higher</Text>
        <Text style={styles.cardContent}>Diastolic: 90 mm Hg or higher</Text>
      </View>

      <View style={[styles.card, styles.lastCard]}>
        <Text style={styles.cardTitle}>Hypertensive Crisis</Text>
        <Text style={styles.cardContent}>Systolic: Higher than 180 mm Hg</Text>
        <Text style={styles.cardContent}>Diastolic: Higher than 120 mm Hg</Text>
        <Text style={styles.warning}>Consult your doctor immediately</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6E6FA',
  },
  card: {
    backgroundColor: '#fafafa',
    borderRadius: 8,
    padding: 16,
    margin: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  cardContent: {
    fontSize: 16,
    marginBottom: 4,
  },
  lastCard: {
    marginBottom: 32,
  },
  warning: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'red',
    marginTop: 8,
  },
});

export default HelpPage;
