import React from "react";
import { View, FlatList } from 'react-native';
import styles from './Categories.style';
import CategoryCard from '../../components/CategoryCard';
import { API_KEY } from '@env';
import useFetch from '../../hooks/useFetch/useFetch';

const Categories = ({ navigation }) => {

    const category_url = API_KEY + "categories.php";

    const data = useFetch(category_url)

    const onClickCategory = () => {
        navigation.navigate('Meals');
    }

    const renderCategory = ({ item }) => <CategoryCard category={item} onClickCategory={onClickCategory} />

    return (
        <View style={styles.container}>
            <FlatList
                renderItem={renderCategory}
                data={data}
            />
        </View>
    )
}

export default Categories;