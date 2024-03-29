import React, { useEffect, useState,useRef } from 'react';
import { View, Text, StyleSheet, ScrollView,ActivityIndicator, FlatList, Button, TextInput, Modal } from 'react-native';
import {useSelector} from 'react-redux';
import { Store } from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

function Header(): React.JSX.Element {

  const CartData = useSelector((state) => state.cast);
  const [cartitems,setCarItems]=useState(0)
 useEffect(()=>{
 setCarItems(CartData.length)
 },[CartData]
 )
 
 



  return (
    <View >
     
 <Text style={styles.container}>{cartitems}</Text>
    </View>
  );
}

const styles =StyleSheet.create({
  container:{
   textAlign:'right',
   color:'green',
   fontWeight:'bold',
   fontSize:30
  },
  
})


export default Header;