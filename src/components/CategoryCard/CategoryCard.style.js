import { StyleSheet } from "react-native";
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export default StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        margin: 15,
        borderWidth: 1,
        borderColor: '#757575',
        borderTopLeftRadius: 60,
        borderBottomLeftRadius: 60,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,

    },
    image_container: {
        padding: 7,
    },
    image: {
        width: windowWidth / 3,
        minHeight: 85,
        resizeMode: 'contain',
        borderTopLeftRadius: 60,
        borderBottomLeftRadius: 60,
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,

    },
    categoryName_container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    categoryName: {
        fontSize: 18,
        fontWeight: '600'
    }
})