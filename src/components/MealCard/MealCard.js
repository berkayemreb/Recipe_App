import React from "react";
import { View, Text } from 'react-native';

const MealCard = ({ meal }) => {
    return (
        <View>
            <Text>{meal.strMeal}</Text>
        </View>
    )
}

export default MealCard;