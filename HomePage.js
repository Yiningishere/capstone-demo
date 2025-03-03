import {React,  useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const HomePage = ({ navigation }) => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatDate = (date) => {
    return date.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <View style={styles.container}>
      <Image source={require('/workspaces/Capstone/my-BP-App/assets/smileface.png')} 
        style={styles.headerImage}/>
      <Text style={styles.time}>{formatDate(currentDateTime)} - {currentDateTime.toLocaleTimeString()}</Text>
      <Text style={styles.title}>Welcome to Your Diary!</Text>
      <Text style={styles.subtitle}>Manage and track your blood pressure easily.</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('PatientInfo')}>
        <Icon name="user" size={20} color="#fff" />
        <Text style={styles.buttonText}>Update Your Info!</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Write Diary')}>
        <Icon name="pencil" size={20} color="#fff" />
        <Text style={styles.buttonText}>Write Today's Diary!</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('History')}>
        <Icon name="table" size={20} color="#fff" />
        <Text style={styles.buttonText}>Check Your History!</Text>
      </TouchableOpacity>

      <Text style={styles.tips}>Tip of the Day: Stay hydrated and monitor your diet!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerImage: {
    width: 200, 
    height: 200, 
    resizeMode: 'contain', 
    marginBottom: 20,
    alignSelf: 'center', 
  },

  container: {
    flex: 1,
    backgroundColor: '#f5f5f5', 
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#E6E6FA',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  subtitle: {
    fontSize: 20,
    color: '#555',
    marginBottom: 20,
  },
  time: {
    fontSize:13,
    color: '#666',
    marginBottom: 30,
    fontStyle: 'italic',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#007bff', 
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    marginBottom: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    marginLeft: 10,
  },
  tips: {
    marginTop: 20,
    fontSize: 18,
    color: '#444',
    fontStyle: 'italic',
  },

});

export default HomePage;
