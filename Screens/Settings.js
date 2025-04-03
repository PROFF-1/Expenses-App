import { FlatList, SafeAreaView, StyleSheet, Text, View,Switch } from 'react-native'
import React from 'react'
import { styles } from '../Styles/styles'
import { settingsList } from '../Data/data'
import { useTheme } from '../Src/ThemeContext';


export default function Settings() {
  const theme = useTheme();
  const {isDarkMode} =theme;
  return (
    <SafeAreaView style={[styles.settingsContainer,{backgroundColor: theme.colors.background }]}>
      <Text style={[styles.settings,{color: theme.colors.text }]}>Settings </Text>
      <View style={{width:'100%',paddingHorizontal:30,}}>
        <FlatList
        data={settingsList}
        renderItem={({item})=>{
          return(
            <View style={[styles.eachSettings, {borderBottomColor: isDarkMode? theme.colors.bottomColor: '#eee'}]}>
              <Text style={{fontSize: 18, color: theme.colors.text }}>{item.name}</Text>
              {item.icon()}
            </View>
          )
        }}
        />
      </View>
      <Switch
          trackColor={{ false: "#767577", true: theme.colors.primary }}
          thumbColor={theme.isDarkMode ? "#f4f3f4" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={theme.toggleTheme}
          value={theme.isDarkMode}
        />
    </SafeAreaView>
  )
}

