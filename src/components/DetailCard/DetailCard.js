import React from "react";
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './DetailCard.style';

const DetailCard = ({ meal, goToYoutube }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: meal.strMealThumb }} />
            <View style={styles.header_contanier}>
                <Text style={styles.headerName}>{meal.strMeal}</Text>
                <Text style={styles.areaName}>-{meal.strArea}</Text>
            </View>
            <View style={styles.body_container}>
                <Text style={styles.instruction_description}>{meal.strInstructions}</Text>
                <TouchableOpacity style={styles.youtubeLink_container} onPress={() => goToYoutube(meal.strYoutube)}>
                    <Text style={styles.youtubeLink_text}>Watch on Youtube</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default DetailCard;