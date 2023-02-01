import React from "react";
import { View, FlatList } from 'react-native';
import styles from './Categories.style';
import CategoryCard from '../../components/CategoryCard';
import { API_KEY } from '@env';
import useFetch from '../../hooks/useFetch/useFetch';

const Categories = () => {

    const category_url = API_KEY + "list.php?c=list";

    const data = useFetch(category_url)

    const renderCategory = ({ item }) => <CategoryCard category={item} />

    return (
        <View>
            <FlatList
                renderItem={renderCategory}
                data={data}
            />
        </View>
    )
}

export default Categories;