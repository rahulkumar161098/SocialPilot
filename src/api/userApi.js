import apiClient from './apiClient';

export const getUser = async (userId) => {
    const response = await apiClient.get(`/users/${userId}`);
    return response.data;
};


export const createUser= async (userData) => {
    const response = await apiClient.post('/users', userData);
    return response.data;
};

export const userLogin = async (credentials) => {
    const response = await apiClient.post('/auth/login', credentials);
    return response.data;
}

export const otpVarification = async (otpData) => {
    const response = await apiClient.post('/auth/verify-otp', otpData);
    return response.data;
}

