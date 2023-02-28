
import React from 'react';
import {
  SafeAreaView,
  Text,
  View, FlatList, StyleSheet, ScrollView,Image, Dimensions,
} from 'react-native';
import news_data from './news_data.json';
import NewsCard from './component/NewsCard';
import news_banner_data from './news_banner_data.json';

// flatlist kullanıcının binlerce veri arasından görebileceği
// verileri gösterir yani ekranda o an gördüklerini temsil eder

/*
const renderNews = ({item}) => 
    <NewsCard news = {item} /> bu muhabbet olan bir şey defalarca
    oluşturmayı engelliyor
*/

function App() {
  const renderNews = ({item}) => 
    <NewsCard news = {item} />
  
  return(
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>Haberler</Text>
        <FlatList
        ListHeaderComponent={() => 
          <ScrollView horizontal showsHorizontalScrollIndicator = {false}>
          {news_banner_data.map(bannerNews => (
            <Image style={styles.banner_image}
             source={{uri: bannerNews.imageUrl}} />
          ))}
        </ScrollView>}
        keyExtractor={(item, index) => item.u_id.toString()}
        data={news_data}
        renderItem={renderNews}
        />
    </SafeAreaView>
  );
};
/* keyExtractor önemli neye gönderilip gönderilmeyeceğine karar veriyor*/
/* news bir props istediğimiz şekilde isim verebiliriz */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6E6FA',
  },
  banner_image:{
    height: Dimensions.get('window').height / 5,
    width: Dimensions.get('window').width / 2
  },
  headerText:{
    fontWeight: 'bold',
    fontSize: 50,
    color: 'black',
  }
})
// banner image en yukarıdaki yana kaydırılan yapı
export default App;
