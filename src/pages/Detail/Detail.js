import React from "react";
import { SafeAreaView, Linking, FlatList } from 'react-native';
import useFetch from '../../hooks/useFetch';
import { API_KEY } from '@env';
import LoadingScreen from "../../components/LoadingScreen";
import ErrorScreen from "../../components/ErrorScreen";
import DetailCard from "../../components/DetailCard";

const Detail = ({ route }) => {
    const { id } = route.params;

    const { data, loading, error } = useFetch(API_KEY + "lookup.php?i=" + id);

    if (loading) {
        return <LoadingScreen />
    }

    if (error) {
        return <ErrorScreen />
    }

    const goToYoutube = url => Linking.openURL(url);

    const renderMeal = ({ item }) => <DetailCard meal={item} goToYoutube={goToYoutube} />

    return (
        <SafeAreaView>
            <FlatList
                data={data.meals}
                renderItem={renderMeal}
            />
        </SafeAreaView>

    )
}

export default Detail;