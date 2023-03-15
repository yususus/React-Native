import React from 'react';
import { TextInput, View} from 'react-native';
import styles from './searchBar.styles';

const searchBar = props => {
    return(
        <View style={styles.container}>
            <TextInput 
            placeholder='Ara.....'
             onChangeText={props.onSearch}
            />
        </View>
    );
};

export default searchBar;