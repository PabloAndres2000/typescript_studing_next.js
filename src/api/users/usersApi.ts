// src/api/users/usersApi.ts
import axios, { AxiosResponse } from 'axios';
import { User } from '../../models/user';
import { API_BASE_URL, CREATE_USER_URL } from '../urls';

export const createUserAPI = async (user: User): Promise<AxiosResponse<void>> => {
    return await axios.post(`${API_BASE_URL}${CREATE_USER_URL}create_user/`, user, {
        headers: {
            'Content-Type': 'application/json',
        }
    })
}