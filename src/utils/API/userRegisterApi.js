import axios from 'axios';

export const registerUser = async (formData) => {
    try {
        const response = await axios.post('http://localhost:8080/api/users/register', formData);
        return response.data;
    } catch (error) {
        console.error('Registration error:', error);
        throw error;
    }
};
