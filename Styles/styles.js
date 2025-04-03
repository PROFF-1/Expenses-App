import {View, Text , StyleSheet, Platform} from 'react-native'
import { transactionProcesses } from '../Data/data'


export const styles = StyleSheet.create({

  container:{
    flex: 1,
    backgroundColor:'white',
  },

  settingsContainer: {
    flex: 1,
    backgroundColor:'white',
    paddingTop:70,
    alignItems:'center'
   
  },

  homeContainer:{
    flex: 1,
    backgroundColor:'white',
   
  },

  headerContainer:{
    width:'100%',
    height: 70,
    display:'flex',
    flexDirection:'row',
    alignItems: 'center',
    justifyContent:'space-between'
  },

  headerLeft:{
    height: 70,
    display:'flex',
    flexDirection:'row',
    alignItems: 'center',
  },

  profileImage:{
    marginLeft: 15,
    marginRight: 20,
    height:60,
    width:60
  },

  welcome: {
    color: 'grey',
    marginBottom:5
  },

  name:{
    fontSize: 20,
    fontWeight: 'bold'
  },

  searchContainer:{
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    marginRight:20,
    width:40,
    height:40,
    borderRadius:'50%'
  },


  card:{
    marginTop: 30,
    marginLeft: 50,
    marginBottom: 30,

  },

  processes:{
    height:80,
    paddingLeft:  30 
  },

  processContainer:{
    marginRight: 40,
    display: 'flex',
    alignItems:'center'
  },


  processIconContainer:{
    height: 60,
    width: 60,
    display: 'flex',
    alignItems:'center',
    justifyContent:'center',
    borderRadius: '50%',
    marginBottom: 2
  },

  processName:{
    color: 'grey',

  },

  transactionsHeader: {
    display: 'flex',
    flexDirection:'row',
    alignItems: 'center',
    justifyContent:'space-between',
    paddingLeft: 10,
    paddingRight: 30,
    marginVertical:25
  },

  transaction:{
    fontSize:24,
    fontFamily:'sanSerif'
  },
  sellAll:{
    color:'#1E90FF',
    size:22,
    fontWeight: 'bold'
  },

  transactionContainer: {
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent: 'space-between',
    paddingHorizontal: 25,
    height:70
  },

  transactionLeft:{
    display:'flex',
    flexDirection:'row'
  },

  icon:{
    marginRight: 20,
    backgroundColor: '#ddd',
    height: 40,
    width: 40,
    display: 'flex',
    alignItems:'center',
    justifyContent:'center',
    borderRadius: '50%',
  },

  transactionName:{
    fontSize: 20,
  },

  transactionType:{
    color: 'grey',
  },

  amount:{
    fontSize: 18
  },

  settings:{
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 70
  },

  eachSettings:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    height: 80,
    borderBottomWidth:2,

  },
  
})