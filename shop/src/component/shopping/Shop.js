import React from "react";
import { Text, View, Image } from "react-native";
import styles from "./Shop.style";

const Shop = ({ shop }) => {
    return (
        <View style={styles.container}>
            
                <Image style={styles.image} source={{ uri: shop.imgURL }} />
                <Text style={styles.title}>{shop.title}</Text>
                <Text style={styles.price}>{shop.price}</Text>
                {shop.inStock === false && <Text style={styles.instock}>Stokta Yok</Text>}
            
        </View>
    );
};

export default Shop;