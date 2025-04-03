import {View, StyleSheet,Text,Image} from 'react-native';
import {styles} from '../Styles/styles' 
import AntDesign from '@expo/vector-icons/AntDesign';
import { useTheme } from '../Src/ThemeContext';

export const transactionProcesses=[
  {
    name:'Sent',
    image: require('../assets/send.png'),
  },

  {
    name:'Recieved',
    image: require('../assets/recieve.png'),
  },
  {
    name:'Loan',
    image: require('../assets/loan.png'),
  },
  {
    name:'Topup',
    image: require('../assets/topUp.png'),
  },
]

export const Transactions=[
  
  {
  id:1,
  icon: require('../assets/apple.png'),
  name: 'Apple Store',
  type: 'Entertainment',
  amount: '-$5,99',
  color:'black'

  },
  {
  id:2,
  icon: require('../assets/spotify.png'),
  name: 'Spotify',
  type: 'Music',
  amount: '-$12,99',
  color:'black'

  },
  {
  id:3,
  icon: require('../assets/moneyTransfer.png'),
  name: 'Money Transfer',
  type: 'Transaction',
  amount: '$300',
  color:'#1E90FF',
  themeIndependent: true 


  },
  {
  id:4,
  icon: require('../assets/grocery.png'),
  name: 'Grocery',
  type: 'Grocery',
  amount: '-$88',
  color:'black'
  }
]


export const settingsList =[
  {
    name: 'Language',
    icon:()=>(
      <AntDesign name="right" size={24} color="#888" />
    )
  },
  {
    name: 'My Profile',
    icon:()=>(
      <AntDesign name="right" size={24} color="#888" />
    )
  },
  {
    name: 'Contact Us',
    icon:()=>(
      <AntDesign name="right" size={24} color="#888" />
    )
  },
  {
    name: 'Change Password',
    icon:()=>(
      <AntDesign name="right" size={24} color="#888" />
    )
  },
  {
    name: 'Privacy Policy',
    icon:()=>(
      <AntDesign name="right" size={24} color="#888" />
    )
  },
]





