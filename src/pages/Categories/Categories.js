import React from "react";
import { View, FlatList } from 'react-native';
import styles from './Categories.style';
import CategoryCard from '../../components/CategoryCard';
import { API_KEY } from '@env';
import useFetch from '../../hooks/useFetch';

const Categories = ({ navigation }) => {

    const category_url = API_KEY + "categories.php";

    const data = useFetch(category_url)

    const onClickCategory = (strCategory) => {
        navigation.navigate('Meals', {
            categoryName: strCategory
        });
    }

    const renderCategory = ({ item }) => <CategoryCard category={item} onClickCategory={onClickCategory} />

    return (
        <View style={styles.container}>
            <FlatList
                renderItem={renderCategory}
                data={data.categories}
            />
        </View>
    )
}

export default Categories;