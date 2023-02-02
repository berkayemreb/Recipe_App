import { StyleSheet, Dimensions } from "react-native";

const widthOfScreen = Dimensions.get('screen').width;
const heightOfScreen = Dimensions.get('screen').height;

export default StyleSheet.create({
    container: {
        marginHorizontal: 15,
        marginBottom: 15,
    },
    image: {
        maxWidth: widthOfScreen,
        height: heightOfScreen / 5,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderTopLeftRadius: 7,
        borderTopRightRadius: 7,
    },
    name_container: {
        width: '100%',
        position: 'absolute',
        bottom: 0,
        backgroundColor: '#424242',
        opacity: 0.8,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    name: {
        textAlign: 'center',
        fontSize: 20,
        color: '#fff',
        padding: 5,
        fontWeight: '600'
    },
})