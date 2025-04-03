import { StyleSheet, Text, View,StatusBar,SafeAreaView,Image } from 'react-native';
import {styles} from './Styles/styles'
import Home from "./Screens/Home"
import Settings from "./Screens/Settings"
import MyCards from "./Screens/MyCards"
import Statistics from "./Screens/Statistics"

import { NavigationContainer,DefaultTheme,DarkTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ThemeProvider } from './Src/ThemeContext';
import { useTheme } from './Src/ThemeContext';



const Tab = createBottomTabNavigator()

function AppContent(){
  const theme = useTheme();

  const navigationTheme =theme.isDarkMode? DarkTheme : DefaultTheme;

  return(    
  
  <NavigationContainer theme={navigationTheme} style={styles.container}>
  <StatusBar barStyle={theme.isDarkMode ? 'light-content' : 'dark-content'} />

    <Tab.Navigator>
      <Tab.Screen name='Home' component={Home}
      options={
        {
          tabBarIcon:({color})=>(
            <Image source={require('./assets/home.png')}
            style={{ width: 20, height: 20, tintColor: color }}
            />
          )
        }
      }/>
      <Tab.Screen name ='My Card' component={MyCards}
       options={
        {
          tabBarIcon:({color})=>(
            <Image source={require('./assets/myCards.png')}
            style={{ width: 20, height: 20, tintColor: color }}
            />
          )
        }}
        />
      <Tab.Screen  name='Statistics' component={Statistics}
      options={
        {
          tabBarIcon:({color})=>(
            <Image source={require('./assets/statictics.png')}
            style={{ width: 20, height: 20, tintColor: color }}
            />
          )
        }}/>
      <Tab.Screen name ='Settings' component={Settings}
      options={
        {
          tabBarIcon:({color})=>(
            <Image source={require('./assets/settings.png')}
            style={{ width: 20, height: 20, tintColor: color }}
            />
          )
        }}/>
    </Tab.Navigator>
  </NavigationContainer>)
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent/>
    </ThemeProvider>
  );
}

