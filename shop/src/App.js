
import React from 'react';
import {
  SafeAreaView,
  Text, TextInput,
  View, FlatList, StyleSheet, ScrollView, Image, Dimensions,
} from 'react-native';
import Shop_data from './Shop_data.json';
import Shop from './component/shopping';

function App() {
  const renderShop = ({ item }) =>
    <Shop shop={item} />

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.headerText}>PATIKASTORE</Text>
        <TextInput
          style={styles.searchText} color='#f2f2f2' placeholder="Ara..." />
      </View>
      <FlatList
        numColumns={2}
        keyExtractor={(item) => item.id}
        data={Shop_data}
        renderItem={renderShop}
      />
    </SafeAreaView>
  );
};
/* keyExtractor önemli neye gönderilip gönderilmeyeceğine karar veriyor*/
/* news bir props istediğimiz şekilde isim verebiliriz */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 35,
    color: 'purple',
    marginTop: 10,
   
  },
  searchText: {
    backgroundColor: '#e6e6e6',
    width:Dimensions.get('window').width - 10,
    height:Dimensions.get('window').height/15,
    margin: 10,
    
    borderWidth:1,
    borderColor:'#f1f1f1',
    borderRadius: 10,
    fontSize: 20,
    marginLeft: 5,
    marginRight:5,
  }
})
// banner image en yukarıdaki yana kaydırılan yapı
export default App;
