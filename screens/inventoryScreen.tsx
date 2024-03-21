/* eslint-disable prettier/prettier */
import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import styles from '../Styles';
import {Header} from 'react-native/Libraries/NewAppScreen';
import { useNavigation } from '@react-navigation/native';


const inventoryScreen = (props: any) => {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Header styles={styles.title}>Inventory</Header>
                    <TouchableOpacity style={styles.btnAgregar} onPress={() => props.navigation.navigate('agregar')}>
                        <Text style={styles.btnTxt}>Agregar productos</Text>
                    </TouchableOpacity>
                </View>
                <View></View>
            </ScrollView>
        );
};
export default inventoryScreen;