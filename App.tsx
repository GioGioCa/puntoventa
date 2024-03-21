import React from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import styles from './Styles';
import RenderItem from './components/renderItem';
import {Header} from 'react-native/Libraries/NewAppScreen';

//importar los componentes
import inventoryScreen from './screens/inventoryScreen';
import storeScreen from './screens/storeScreen';

export default function App() {
  return (
    // Toda la ventana
    <View style={styles.container}>
      <Header centerComponent={{text: 'Ferreteria', style: styles.title}} />
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.btnInventory}>
          <Text style={styles.btnTxt}>Inventario</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.btnStore}>
          <Text style={styles.btnTxt}>Tienda</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
