import React from 'react';
// import {View, Text, TouchableOpacity, FlatList} from 'react-native';
// import styles from './Styles';
// import RenderItem from './components/renderItem';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

//importar los componentes
import HomeScreen from './screens/homeScreen';
import InventoryScreen from './screens/inventoryScreen';
import StoreScreen from './screens/storeScreen';
import AgregarProducto from './screens/agregarProducto';
import MostrarProducto from './screens/mostrarProducto';

function App() {
  const Stack = createStackNavigator();
  //const navigation = useNavigation();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="home" component={HomeScreen} />
        <Stack.Screen name="inventory" component={InventoryScreen} />
        <Stack.Screen name="store" component={StoreScreen} />
        <Stack.Screen name="agregar" component={AgregarProducto} />
        <Stack.Screen name="mostrar" component={MostrarProducto} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
