import axios, {type AxiosInstance, type AxiosResponse} from "axios";

export interface ResponseWrapper{
    success: boolean,
    data?: any,
}

const instance:AxiosInstance = axios.create({
    timeout: 60000,
    headers: {
        'Content-Type': 'application/json',
    },
})

instance.interceptors.request.use(
    (config) => {
        return config;
    },
    () => {
        const data:ResponseWrapper = {
            success: false,
        }
        return Promise.resolve(data);
    }
);

instance.interceptors.response.use(
    (response) => {
        const data:ResponseWrapper = {
            success: true,
            data: response.data,
        };
        return data as any
    },
    () => {
        const data:ResponseWrapper = {
            success: false,
        }
        return Promise.resolve(data);
    }
);

export default instance