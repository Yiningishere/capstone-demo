import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from './src/screens/HomePage';
import PatientInfoPage from './src/screens/PatientInfoPage';
import HistoryPage from './src/screens/HistoryPage';
import WriteDiaryPage from './src/screens/WriteDiaryPage';
import HelpPage from './src/screens/HelpPage';
import { DiaryContext, DiaryProvider } from './src/DiaryContext';
import Icon from 'react-native-vector-icons/FontAwesome';


const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <DiaryProvider>
      <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomePage} />
        <Tab.Screen name="PatientInfo" component={PatientInfoPage} />
        <Tab.Screen name="Write Diary" component={WriteDiaryPage} />
        <Tab.Screen name="History" component={HistoryPage} />
        <Tab.Screen name="Help" component={HelpPage} />
      </Tab.Navigator>
      </NavigationContainer>
    </DiaryProvider>
  );
};

export default App;