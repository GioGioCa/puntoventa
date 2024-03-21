/* eslint-disable prettier/prettier */
import React from "react";
import { Text, TouchableOpacity, View } from 'react-native';
import styles from '../Styles';
import { Header } from 'react-native/Libraries/NewAppScreen';

export default function inventoryScreen() {
    return (
        // Toda la ventana
        <View style={styles.container}>
            <Header centerComponent={{text: 'Ferreteria', style: styles.title}} />
            <View style={styles.btnContainer}>
            <TouchableOpacity
                style={styles.btnInventory}
                onPress={() => navigation.navigate('inventoryScreen')}>
                <Text style={styles.btnTxt}>Inventario</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.btnContainer}>
            <TouchableOpacity
                style={styles.btnStore}
                onPress={() => navigation.navigate('storeScreen')}>
                <Text style={styles.btnTxt}>Tienda</Text>
            </TouchableOpacity>
        </View>
    </View>
    );
};