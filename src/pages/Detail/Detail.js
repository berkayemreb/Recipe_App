import React from "react";
import { SafeAreaView, Linking, TouchableOpacity, Image, View, Text, ScrollView } from 'react-native';
import styles from './Detail.style';
import useFetch from '../../hooks/useFetch';
import { API_KEY } from '@env';
import LoadingScreen from "../../components/LoadingScreen";
import ErrorScreen from "../../components/ErrorScreen";

const Detail = ({ route }) => {
    const { id } = route.params;

    const { data, loading, error } = useFetch(API_KEY + "lookup.php?i=" + id);

    if (loading) {
        return <LoadingScreen />
    }

    if (error) {
        return <ErrorScreen />
    }

    const goToYoutube = url => Linking.openURL(url);


    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Image style={styles.image} source={{ uri: data.meals[0].strMealThumb }} />
                <View style={styles.inner_container}>
                    <View style={styles.header_contanier}>
                        <Text style={styles.headerName}>{data.meals[0].strMeal}</Text>
                        <Text style={styles.areaName}>-{data.meals[0].strArea}</Text>
                    </View>
                    <View style={styles.body_container}>
                        <Text style={styles.instruction_description}>{data.meals[0].strInstructions}</Text>
                        <TouchableOpacity style={styles.youtubeLink_container} onPress={() => goToYoutube(data.meals[0].strYoutube)}>
                            <Text style={styles.youtubeLink_text}>Watch on Youtube</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Detail;