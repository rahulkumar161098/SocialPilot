import apiClient from './apiClient';

export const getUser = async (userId) => {
    try {
        const response = await apiClient.get(`/v1/user/create`);
        return response;
    } catch (error) {
        return error.message
    }

};

export const createUser = async (userData) => {
    try{
        const response = await apiClient.post('/v1/user/create', userData)
        return response
    } catch (error){
        return error.message
    }
}


// export const createUser = async (userData) => {

//     const response = await apiClient.post('/users', userData);
//     return response;
// };

export const userLogin = async (credentials) => {
    const response = await apiClient.post('/v1/user/login', credentials);
    return response;
}

export const otpVarification = async (data) => {
    const response = await apiClient.post('/v1/user/otp_varify', data);
    return response;
}

