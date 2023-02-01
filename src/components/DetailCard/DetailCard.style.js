import { StyleSheet, Dimensions } from "react-native";

const heightOfDevice = Dimensions.get('screen').height;

export default StyleSheet.create({
    container: {
        marginHorizontal: 13,
        borderRadius: 5,
    },
    image: {
        width: "100%",
        height: heightOfDevice / 3,
        borderRadius: 5,

    },
    header_contanier: {
        borderBottomWidth: 1,
        borderColor: '#b6c2b7'
    },
    headerName: {
        fontSize: 22,
        color: '#9a0007',
        fontWeight: '600',
        textAlign: 'center'
    },
    areaName: {
        fontStyle: 'italic',
        fontSize: 16,
        textAlign: 'right',
        color: '#d32f2f'
    },
    body_container: {
        marginTop: 7,
    },
    instruction_description: {
        fontSize: 15,
        letterSpacing: 0.25,
    },
    youtubeLink_container: {
        width: "100%",
        backgroundColor: '#e81e14',
        padding: 10,
        borderRadius: 50,
        marginVertical: 5,
    },
    youtubeLink_text: {
        textAlign: "center",
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    }
})