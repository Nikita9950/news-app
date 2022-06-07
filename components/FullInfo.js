import {Button, Image, StyleSheet, Text, View} from 'react-native';
import { globalStyle } from "../styles/style";
import {useEffect} from "react";

export const FullInfo = ({ route }) => {

    return (
        <View style={globalStyle.main}>
            <Image style={globalStyle.image} source={{
                uri: route.params.img,
            }} />
            <Text style={[globalStyle.title, styles.header]}>{route.params.name}</Text>
            <Text style={styles.full}>{route.params.full}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    full: {
        fontFamily: 'mt-light',
        fontSize: 16,
        textAlign: 'center',
        marginTop: 20,
        color: '#f55151',
    },
    header:{
        fontSize: 25,
        marginTop: 25,
    }
})

