import axios from "axios";
import { server } from '../config'

const axiosInstance = axios.create({
    baseURL: `${server}/api`,
});

export default axiosInstance;