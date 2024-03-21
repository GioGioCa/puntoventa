/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {View, Text, TextInput, Button, ScrollView, Alert} from 'react-native';
import styles from '../Styles';
import appFirebase from '../credenciales';
import {getFirestore, collection,addDoc,doc,deleteDoc,getDoc,setDoc} from 'firebase/firestore';

const db = getFirestore(appFirebase);
export default function agregarProducto(props:any) {
    const initialState = {
        nombre:'',
        precio:'',
        stock:'',
    };

    const  [state, setState] = useState(initialState);

    const handleChangeText = (value: any, name: any)=>{
        setState({...state,[name]: value});

    };

    const saveProduct = async() => {
        try{
            await addDoc(collection(db,'productos'),{
                ...state,
            });
            Alert.alert('Alerta','guardado con exito');
            props.navigation.navigate('inventoryScreen');
        }catch{

        }
    }

    return(
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Agregar Producto</Text>

            <View style={styles.inputGroup}>
                <TextInput placeholder='Nombre' onChangeText={(value)=>handleChangeText(value,'nombre')}
                value={state.nombre}/>
            </View>
            <View style={styles.inputGroup}>
                <TextInput placeholder='Precio' onChangeText={(value)=>handleChangeText(value,'precio')}
                value={state.precio}/>
            </View>
            <View style={styles.inputGroup}>
                <TextInput placeholder='Stock' onChangeText={(value)=>handleChangeText(value,'stock')}
                value={state.stock}/>
            </View>

            <View>
                <Button title='Guardar Producto'/>
            </View>

        </ScrollView>
    );

}
