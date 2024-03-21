import React from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import styles from './Styles';
import RenderItem from './components/renderItem';
import {Header} from 'react-native/Libraries/NewAppScreen';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

//importar los componentes
import inventoryScreen from './screens/inventoryScreen';
import storeScreen from './screens/storeScreen';
import homeScreen from './screens/homeScreen';


export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="home" component={homeScreen} />
        <Stack.Screen name="inventory" component={inventoryScreen} />
        <Stack.Screen name="store" component={storeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
