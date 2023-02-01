import React from "react";
import { View, Text, TouchableWithoutFeedback, Image } from 'react-native';
import styles from './MealCard.style';

const MealCard = ({ meal, onClickMeal }) => {
    return (
        <TouchableWithoutFeedback onPress={() => onClickMeal(meal.idMeal)}>
            <View style={styles.container}>
                <Image style={styles.image} source={{ uri: meal.strMealThumb }} />
                <View style={styles.name_container}>
                    <Text style={styles.name}>{meal.strMeal}</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default MealCard;