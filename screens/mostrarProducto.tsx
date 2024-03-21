/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react'
import styles from '../Styles';
import {View, Text, TouchableOpacity, ScrollView, StyleSheet, Alert} from 'react-native'

import appFirebase from '../credenciales';
import {getFirestore, collection, addDoc, getDocs, doc, deleteDoc, getDoc,setDoct} from 'firebase/firestore';

const db = getFirestore(appFirebase);


export default function MostrarProducto(props:any) {

    const [product, setProduct] = useState({});

    const getOneProduct = async(id:any)=>{
        try{
            const docRef = doc(db, 'productos', id);
            const docSnap = await getDoc(docRef);
            setProduct(docSnap.data());
        }
        catch(error){
            console.log(error);
        }
    }

    useEffect(()=>{
        getOneProduct(props.route.params.productoId)
    },[]);

    const deleteProduct = async(id:any)=>{
        await deleteDoc(doc(db,'productos', id))
        Alert.alert('exito', 'producto eliminado con exito')
        props.navigation.navigate('List')
    };


    return (
        <View>
            <Text style={styles.title} >Detalle del producto</Text>
            <Text style={styles.btnTxt}>Nombre: {product.nombre}</Text>
            <Text style={styles.btnTxt}>Precio: $ {product.precio}</Text>
            <Text style={styles.btnTxt}>Stock: {product.stock}</Text>
            <TouchableOpacity style={styles.btnDelete} onPress={()=>deleteProduct(props.route.params.productoId)}>
                <Text style={styles.btnTxt}>Eliminar</Text>
            </TouchableOpacity>
        </View>
    );
}
