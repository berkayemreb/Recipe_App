import { useState, useEffect } from 'react';
import axios from "axios";

const useFetch = (url) => {

    const [data, setData] = useState([]);

    const fetchData = async () => {
        const { data: responseData } = await axios.get(url);
        setData(responseData.categories)
    }

    useEffect(() => {
        fetchData();
    }, [])

    return data;
}

export default useFetch;