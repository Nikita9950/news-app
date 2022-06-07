import {StyleSheet, Text, View, Button, TouchableOpacity, FlatList, Modal, Image} from 'react-native';
import { globalStyle } from "../styles/style";
import {useState} from "react";
import { Ionicons } from '@expo/vector-icons';
import { Form } from "./Form";

export const Main = ({ navigation }) => {

    const [news, setNews] = useState([
        {
            name: 'Google', anons: 'Some text', full: 'Google is cool!!!', key: '1', img: 'https://itproger.com/img/courses/1615637098.jpg',
        },
        {
            name: 'Apple', anons: 'Some text', full: 'Apple is cool!!!', key: '2', img: 'https://itproger.com/img/courses/1614851062.jpg',
        }
    ]);

    const [modalWindow, setModalWindow] = useState(false)

    const addArticle = (article) => {
        setNews(news => {
            article.key = Math.random().toString();
            article.img = article.img.length > 0 ? article.img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0qWjtXCzWNIxVpRI-8rNSfBtQKUkKIRQRmw&usqp=CAU'
            return [
                article,
                ...news
            ]
        })
        setModalWindow(false);
    }

    return (
        <View style={globalStyle.main}>
            <Modal visible={modalWindow}>
                <View style={globalStyle.main}>
                    <Ionicons name="close-circle" size={58} color="red" style={styles.iconClose} onPress={() => setModalWindow(false)} />
                    <Text style={styles.title}>Add article</Text>
                    <Form addArticle={addArticle} />
                </View>
            </Modal>
            <Ionicons name="add-circle-sharp" size={48} color="green" style={styles.iconAdd} onPress={() => setModalWindow(true)} />
            <Text style={[globalStyle.title, styles.header]}>Articles</Text>
            <FlatList data={news} renderItem={({item}) => (
                <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('FullInfo', item)}>
                    <Image style={globalStyle.image} source={{
                        uri: item.img,
                    }} />
                    <Text style={styles.title} >{ item.name }</Text>
                    <Text style={styles.anons}>{ item.anons }</Text>
                </TouchableOpacity>
            )}/>
        </View>
    )
};

const styles = StyleSheet.create({
    header:{
        marginBottom: 25,
    },
    item: {
        width: '100%',
        marginBottom: 30,
    },
    title: {
        fontFamily: 'mt-bold',
        fontSize: 22,
        textAlign: 'center',
        marginTop: 20,
        color: '#474747',
    },
    anons: {
        fontFamily: 'mt-light',
        fontSize: 16,
        textAlign: 'center',
        marginTop: 5,
        color: '#474747',
    },
    iconAdd: {
        textAlign: 'center',
        marginBottom: 15,
    },
    iconClose: {
        textAlign: 'center',
    }
})

