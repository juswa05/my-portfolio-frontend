import axios from 'axios';

const API_URL = 'http://localhost:8080/api/auth/login'; // Update with your actual Spring API login endpoint

export const loginUser = async (username, password) => {
    try {
        const response = await axios.post(API_URL, { username, password });
        return response.data; // Expected to contain tokens or success response
    } catch (error) {
        throw error.response ? error.response.data : 'Network Error';
    }
};
