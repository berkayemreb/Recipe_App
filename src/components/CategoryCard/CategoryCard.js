import React from "react";
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import styles from './CategoryCard.style';

const CategoryCard = ({ category, onClickCategory }) => {
    return (
        <TouchableWithoutFeedback onPress={() => onClickCategory(category.strCategory)}>
            <View style={styles.container}>
                <View style={styles.image_container}>
                    <Image style={styles.image} source={{ uri: category.strCategoryThumb }} />
                </View>
                <View style={styles.categoryName_container}>
                    <Text style={styles.categoryName}>{category.strCategory}</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default CategoryCard;