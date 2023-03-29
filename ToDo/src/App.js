import React, { useState } from 'react';
import { FlatList, SafeAreaView, ScrollView, StyleSheet, Text, View, } from 'react-native';
import todo from './component/todo';
import Addtodo from './component/Addtodo';
import Header from './component/Header';


function App() {

  const [counter,setCounter]= useState(0)
  

  function UpdateCounter (){
    setCounter(counter+1)
    const deger = 
      {
        id:counter,
        title:inputText,
        Flag:false,
      }
    setToDoList([...toDoList,deger])
    setInputText('')
   
    
  }


  return (
    <View style={styles.container}>
      <Header countertext={counter}></Header>
      <FlatList>

      </FlatList>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00004d',
  }
});

export default App;
