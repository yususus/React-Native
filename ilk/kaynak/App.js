import React from 'react';
import { 
  SafeAreaView, 
  StyleSheet} from 'react-native';
// view çerveçe text compenenttir
// touchableopacity ile butona bastığını görüyorsun
import Card from './component/card';
// appjs ile component aynı klasörde

const App = () => {

  return (
    <SafeAreaView style={styles.container}>
      
      <Card title='Ahmet' text='nasılsın?'/>
      <Card title='Arif Işık' text='Malı arap faikten alıyorum'/>
      <Card title='İbrahim' text='Kaç cigaramiz kaldı?'/>
      <Card title='Yusuf AYDIN' text='Eğitimde merhamet vatana ihanettir'/>


    </SafeAreaView>

  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',

  },
  
})


export default App;


