import React from "react";
import { SafeAreaView, FlatList } from 'react-native';
import styles from './Meals.style';
import { API_KEY } from '@env';
import useFetch from "../../hooks/useFetch";
import MealCard from "../../components/MealCard";
import LoadingScreen from "../../components/LoadingScreen";
import ErrorScreen from "../../components/ErrorScreen";

const Meals = ({ route, navigation }) => {

    const { categoryName } = route.params;

    const { data, loading, error } = useFetch(API_KEY + "filter.php?c=" + categoryName);

    if (loading) {
        return <LoadingScreen />
    }

    if (error) {
        return <ErrorScreen />
    }

    const onClickMeal = (idMeal) => {
        navigation.navigate('Detail',
            {
                id: idMeal
            })
    }

    const renderMeals = ({ item }) => <MealCard meal={item} onClickMeal={onClickMeal} />

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