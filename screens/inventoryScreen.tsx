/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useEffect, useState} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import styles from '../Styles';
import {Header} from 'react-native/Libraries/NewAppScreen';

//Firebase
import appFirebase from '../credenciales';
import {
    getFirestore,
    collection,
    addDoc,
    doc,
    deleteDoc,
    getDocs,
    setDoc,
} from 'firebase/firestore';

const db = getFirestore(appFirebase);

const InventoryScreen = (props: any) => {
    const [lista, setLista] = useState([]);

    useEffect(() => {
    const getLista = async()=>{
        try {
            const querySnapshot = await getDocs(collection(db, 'productos'));
            const docs:any = [];
            querySnapshot.forEach((doc:any)=>{
                const {nombre, precio, stock} = doc.data();
                docs.push({
                    id:doc.id,
                    nombre,
                    precio,
                    stock,
                });
            });
            setLista(docs);
        } catch (error) {
            console.log(error);
        }
    };
    getLista();
}, [lista]);

    return (
        <ScrollView>
            <View style={styles.container}>
            <Header styles={styles.title}>Inventory</Header>
            <TouchableOpacity
                style={styles.btnAgregar}
                onPress={() => props.navigation.navigate('agregarProducto')}>
                <Text style={styles.btnTxt}>Agregar productos</Text>
            </TouchableOpacity>
            </View>
            <View>
            {/* {
            lista.map((list)=>(
                <TouchableOpacity key={list.id} style={styles.btnLista}
                onPress={()=>props.navigation.navigate('Show',{productoId:list.id})}>
                    <Text style={styles.txtNombre}>-{list.nombre}</Text>
                </TouchableOpacity>
            ))
            } */}
            {lista.map((producto: Producto) => (
                <TouchableOpacity key={producto.id} style={styles.btnLista}
                                onPress={() => props.navigation.navigate('Mostrar', { productoId: producto.id })}>
                <Text style={styles.txtNombre}>- {producto.nombre}</Text>
                </TouchableOpacity>
            ))}
            </View>
        </ScrollView>
    );
};
export default InventoryScreen;
