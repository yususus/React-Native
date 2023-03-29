import React, { useState } from "react";
import{View, Text} from 'react-native';
import styles from './todo.styles';

const todo = (props) => {
    const[Flag,setFlag]=useState(false)
    function updateFlag(){
        setFlag(!Flag)
    }

    return(
        <View></View>
    )
}

export default todo;