/* eslint-disable prettier/prettier */
import React from "react";
import { View } from 'react-native';
import styles from '../Styles';
import { Header } from 'react-native/Libraries/NewAppScreen';

export default function inventoryScreen() {
    return (
        <View style={styles.container}>
            <Header centerComponent={{text: 'Inventario', style: styles.title}} />
            <View>
                
            </View>
        </View>

    );
};