import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: 'white',
        margin: 5,
        borderRadius: 10,
        padding: 10,
    },
    image:{
        height: Dimensions.get('window').height / 4,
        margin: 5,
        resizeMode:'contain',
        borderRadius: 10,
     
    },
    title:{
        marginTop:20,
        marginLeft:5,
        fontWeight: 'bold',
        fontSize: 17,
        color:'black',
    },
    price:{
        margin:10,
        fontWeight: 'bold',
        fontSize:15,
        color : 'f2f2f2',
        // başlık ile metin arası boşluk sağlıyor    
    },
    instock:{
        color:'red',
        fontSize:18,
        margin:5,
        fontWeight:"bold"
        


    }
    
})