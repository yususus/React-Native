import React from "react";
import { Text, View, TouchableOpacity, Alert} from 'react-native';
import styles from "./Card.style";


const Card = (props) => {
    return(
        <View style={styles.container}>
            <View style={styles.body}>
                <Text style={styles.title}>{props.title}</Text>
                <Text style={styles.text}>{props.text}</Text>
            </View>
            <TouchableOpacity style={styles.buton}
            onPress={() => Alert.alert('Merhaba ' + props.title)}>
                <Text style={styles.buton_title}>Beğendim</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Card