import React from "react";
import { View, Text } from 'react-native';
import styles from './DetailCard.style';

const DetailCard = ({ meal }) => {
    return (
        <View>
            <Text>{meal.strMeal}</Text>
        </View>
    )
}

export default DetailCard;