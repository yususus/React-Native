import React from "react";
import {View,Text} from 'react-native';
import styles from './Header.style';


const header = (props) =>{
    return(
        <View>
            <Text style={styles.headertext}>YAPILACAKLAR</Text>
            <Text style={styles.counter}>{props.countertext}</Text>
        </View>
    )
}

export default header;