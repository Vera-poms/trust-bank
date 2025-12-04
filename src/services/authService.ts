import axios from 'axios';
import type { AxiosResponse } from 'axios';
import type { SignupResponse, LoginResponse } from '../types/user';
const API_BASE_URL = "https://trust-bank-api-8ak9.onrender.com/docs";

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        "Content-Type": "application/x-www-form-urlencoded",
    },
})

export const signup = async (email: string, password: string): Promise<SignupResponse> => {
    const body = new URLSearchParams({email, password}).toString();

    const response: AxiosResponse<SignupResponse> =await api.post("users/signup", body);

    return response.data;
}

export const login = async (email: string, password: string): Promise<LoginResponse> => {
    const body = new URLSearchParams({email, password}).toString();

    const response: AxiosResponse<LoginResponse> = await api.post("users/login", body);

    return response.data
}