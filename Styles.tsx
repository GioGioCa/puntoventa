/* eslint-disable prettier/prettier */
import {StyleSheet, Dimensions} from 'react-native';
const styles = StyleSheet.create({
    container: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 25,
        color: '#273746',
        textAlign: 'center',
    },
    btnContainer: {
        flexDirection: 'column',
        marginVertical: 20,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderRadius: 30,
        width: Dimensions.get('screen').width * 0.25,
        height: Dimensions.get('screen').width * 0.80,
    },
    btnInventory: {
        backgroundColor: '#5DADE2',
        height: '30%',
        width: '90%',
    },
    btnStore: {
        backgroundColor: '#CD6155',
        height: '30%',
        width: '90%',
    },
    btnTxt: {
        fontSize: 20,
        color: '#F7F9F9',
        textAlign: 'center',
    },
    btnAgregar: {
        backgroundColor: '#2E86C1',
        borderRadius: 30,
        height: 30,
    },
    inputGroup: {
        flex: 1,
        padding: 0,
        marginBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#CCCCCC',
    },
});

export default styles;
