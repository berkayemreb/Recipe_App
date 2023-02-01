import React from "react";
import { FlatList, SafeAreaView } from 'react-native';
import styles from './Detail.style';
import useFetch from '../../hooks/useFetch';
import { API_KEY } from '@env';
import DetailCard from '../../components/DetailCard';

const Detail = ({ route }) => {
    const { id } = route.params;

    const data = useFetch(API_KEY + "lookup.php?i=" + id);

    const renderDetail = ({ item }) => <DetailCard meal={item} />

    return (
        <SafeAreaView>
            <FlatList
                data={data.meals}
                renderItem={renderDetail}
            />
        </SafeAreaView>
    )
}

export default Detail;