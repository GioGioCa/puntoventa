/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {View, Text, TextInput, Button, ScrollView} from 'react-native';
import styles from '../Styles';


export default function agregarProducto() {
    const initialState = {
        nombre:'',
        precio:'',
        stock:'',
    };

    const  [state, setState] = useState(initialState);

    const handleChangeText = (value: any, name: any)=>{
        setState({...state,[name]: value});

    };

    const saveProduct = () => {
        
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
