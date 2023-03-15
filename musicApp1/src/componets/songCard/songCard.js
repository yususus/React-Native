import React from "react";
import { View, Text, Image } from 'react-native';
import styles from './songCard.styles';

const songCard = (props) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: props.song.imageUrl }} />
            <View style={styles.inner_container}>
                <Text style={styles.title}>{props.song.title}</Text>
                <View style={styles.content_container}>
                    <View style={styles.info_container}>
                        <Text>{props.song.artist}</Text>
                        <Text style={styles.year}>{props.song.year}</Text>
                    </View>
                    
                    {props.song.isSoldOut &&(
                    <View style={styles.soldout_container}>
                        <Text style={styles.soldout_title}>Tükendi</Text>
                    </View>)}
                </View>
            </View>
        </View>
/*
{props.song.isSoldOut &&(
                    <View style={styles.soldout_container}>
                        <Text style={styles.soldout_title}>Tükendi</Text>
                    </View>)}
bu kullanım ile satılmış durumu true ise true olanlar gösterir
*/ 
    );
};

export default songCard;