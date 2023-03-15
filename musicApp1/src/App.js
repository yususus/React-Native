import React, { useState } from 'react';
import {
  SafeAreaView, StyleSheet, Text, FlatList, View,
} from 'react-native';
import music_data from './music-data.json';
import SongCard from './componets/songCard';
import SearchBar from './componets/searchBar';

// import SongCard ın s si büyük yazılmadığı için hata verdi

function App() {
  const [list, setList] = useState(music_data);

  const renderSong = ({ item }) => <SongCard song={item} />;

  const renderSeperator = () => <View style={styles.seperator} />;
//aşagısı filtreleme yöntemi
  const handleSearch = text => {
    const filteredList = music_data.filter(song => {
      const searchedText = text.toLowerCase();
      const currentTitle = song.title.toLowerCase();

      return currentTitle.indexOf(searchedText) > -1;
    });

    setList(filteredList);
  };

// buraya kadar filtreleme idi
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <SearchBar onSearch={handleSearch} />
        <FlatList
          keyExtractor={item => item.id}
          data={list}
          renderItem={renderSong}
          ItemSeparatorComponent={renderSeperator}
        />
      </View>
    </SafeAreaView>
  );
};


export default App;


const styles = StyleSheet.create({
  container: { flex: 1 },
  seperator: {
    borderWidth: 1,
    borderColor: '#BEBEBE',
  }
})