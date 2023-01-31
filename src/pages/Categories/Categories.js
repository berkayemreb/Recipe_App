import React, { useState, useEffect } from "react";
import { View, Text, FlatList } from 'react-native';
import styles from './Categories.style';
import axios from "axios";
import CategoryCard from '../../components/CategoryCard';

const Categories = () => {

    const [data, setData] = useState([]);

    const fetchData = async () => {
        const url = "https://www.themealdb.com/api/json/v1/1/list.php?c=list";
        const { data: responseData } = await axios.get(url);
        setData(responseData.meals)
    }

    useEffect(() => {
        fetchData();
    }, [])

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