import axios from 'axios';

const API_URL = "https://fakestoreapi.com/products";

export const fetchProducts = async () => {
    try {
        const res = await axios.get(API_URL);
        console.log(res.data)
        return res.data

    } catch (error) {
        console.log(error);
        return [];

    }
}

