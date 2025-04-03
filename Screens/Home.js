import { View, Text, SafeAreaView,Image, FlatList} from 'react-native'
import React from 'react'
import {styles} from '../Styles/styles'
import { MaterialIcons } from '@expo/vector-icons'; 
import {Render, transactionProcesses, Transactions} from '../Data/data'
import { useTheme } from '../Src/ThemeContext';




export default function Home() {
  const theme =useTheme();
  const {isDarkMode} =theme
  return (
    <SafeAreaView style={[styles.homeContainer, {backgroundColor: theme.colors.background}]}>
      <View style ={styles.headerContainer}>
        <View style={styles.headerLeft }>
          <View >
            <Image source={require('../assets/profile.png')}
              style={styles.profileImage}
            />
          </View>
          <View>
            <Text style = {styles.welcome}>
            welcome back,
            </Text>
            <Text style ={[styles.name, {color: theme.colors.text}]}>
              Eric Atsu
            </Text>
        </View>
        </View>
        <View style={[styles.searchContainer, {backgroundColor: isDarkMode? theme.colors.containerColor : '#ddd'}]}>
          <MaterialIcons name="search" size={24} color= {isDarkMode?'white': "black"}  style={styles.search}/>
        </View>
      </View>

      <Image
        source={require('../assets/Card.png')}
        style={styles.card}
      />

      <View>
        <FlatList
          data={transactionProcesses}
          renderItem={({item})=>{
            return(
              <View style={styles.processContainer}>
                <View style={[styles.processIconContainer,{    backgroundColor: isDarkMode? theme.colors.containerColor:'#ddd',}]}>
                  <Image source={item.image} tintColor={isDarkMode? 'white':'black'}/>
                </View>
                <Text style={styles.processName}>{item.name}</Text>
              </View>
            )
          }
          }
          horizontal
          style={styles.processes}
          showsHorizontalScrollIndicator={false}
          scrollEnabled={false}
          keyExtractor={(item)=>item.name}
        />
        <View style={styles.transactionsHeader}>
          <Text style={[styles.transaction,{color: theme.colors.text}]}>Transaction</Text>
          <Text style={styles.sellAll}>Sell All</Text>
        </View>
      </View>
      <FlatList
        data={Transactions}
        renderItem ={({item})=>{
          if (item.id=== 3){

            return(
              <View style={styles.transactionContainer}>
              <View style={styles.transactionLeft}>
                <View style={[styles.icon,{backgroundColor: theme.colors.background}]}> <Image source={item.icon} tintColor={isDarkMode? 'white': 'black'} /></View>
                <View>
                  <Text style={[styles.transactionName,{color: theme.colors.text }]}>{item.name}</Text>
                  <Text style={styles.transactionType}>{item.type}</Text>
                </View>
              </View>
              <Text style={[styles.amount,{color: isDarkMode ? theme.colors.text2 : item.color}]}>
                {item.amount}
              </Text>
            </View>
            )

          }

          if (item.id === 1){

            return(
              <View style={styles.transactionContainer}>
              <View style={styles.transactionLeft}>
                <View style={[styles.icon,{backgroundColor: theme.colors.background}]}> <Image source={item.icon} tintColor={isDarkMode? 'white': 'black'} /></View>
                <View>
                  <Text style={[styles.transactionName,{color: theme.colors.text }]}>{item.name}</Text>
                  <Text style={styles.transactionType}>{item.type}</Text>
                </View>
              </View>
              <Text style={[styles.amount,{color: isDarkMode ? theme.colors.text : item.color}]}>
                {item.amount}
              </Text>
            </View>
            )

          }



          return(
            <View style={styles.transactionContainer}>
              <View style={styles.transactionLeft}>
                <View style={[styles.icon,{backgroundColor: theme.colors.background}]}> <Image source={item.icon} /></View>
                <View>
                  <Text style={[styles.transactionName,{color: theme.colors.text }]}>{item.name}</Text>
                  <Text style={styles.transactionType}>{item.type}</Text>
                </View>
              </View>
              <Text style={[styles.amount,{color: isDarkMode ? theme.colors.text : item.color}]}>
                {item.amount}
              </Text>
            </View>
          )
        }}
        keyExtractor={(item)=>item.name}

      />
    </SafeAreaView>
  )
}