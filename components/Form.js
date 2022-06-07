import {Button, Image, StyleSheet, Text, View, TextInput} from 'react-native';
import { globalStyle } from "../styles/style";
import { Formik } from "formik";
import { AntDesign } from '@expo/vector-icons';

export const Form = ({ addArticle }) => {

    return (
        <View>
            <Formik initialValues={{
                name: '',
                anons: '',
                full: '',
                img: '',
            }} onSubmit={(values, action) => {
                addArticle(values);
                action.resetForm;
            }}>
                {(props) => (
                    <View>
                        <TextInput style={styles.input} placeholderTextColor="grey" value={props.values.name} placeholder='name' onChangeText={props.handleChange('name')} />
                        <TextInput style={styles.input} placeholderTextColor="grey" value={props.values.anons} placeholder='anons' onChangeText={props.handleChange('anons')} />
                        <TextInput style={styles.input} placeholderTextColor="grey" value={props.values.full} multiline placeholder='full' onChangeText={props.handleChange('full')} />
                        <TextInput style={styles.input} placeholderTextColor="grey" value={props.values.img} placeholder='img' onChangeText={props.handleChange('img')} />
                        <AntDesign style={styles.check} name="checkcircle" size={48} color="green" onPress={props.handleSubmit}/>
                    </View>
                )}
            </Formik>
        </View>
    )
};

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        marginTop: 15,
        padding: 10,
        borderColor: 'silver',
        borderRadius: 5,
    },
    check: {
        textAlign: 'center',
        marginTop: 25,

    }
})

// https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0qWjtXCzWNIxVpRI-8rNSfBtQKUkKIRQRmw&usqp=CAU