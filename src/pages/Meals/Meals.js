import React from "react";
import { SafeAreaView, FlatList } from 'react-native';
import styles from './Meals.style';
import { API_KEY } from '@env';
import useFetch from "../../hooks/useFetch";
import MealCard from "../../components/MealCard";

const Meals = ({ route }) => {

    const { categoryName } = route.params;

    const data = useFetch(API_KEY + "filter.php?c=" + categoryName);

    const renderMeals = ({ item }) => <MealCard meal={item} />

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                renderItem={renderMeals}
                data={data.meals}
            />
        </SafeAreaView>
    )
}

export default Meals;