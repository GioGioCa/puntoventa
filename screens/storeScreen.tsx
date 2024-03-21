/* eslint-disable prettier/prettier */
import React from "react";
import { View } from 'react-native';
import styles from '../Styles';
import { Header } from 'react-native/Libraries/NewAppScreen';

export default function storeScreen(props: any) {
    return (
        <View style={styles.container}>
            <Header centerComponent={{text: 'Tienda', style: styles.title}} />
            <View>
            </View>
        </View>

    );
}
