import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";


const useAxiosSecure = () => {
    const { logOut } = useAuth();
    const navigate = useNavigate();

    const axiosSecure = axios.create({
        baseURL: 'http://localhost:5000',
    });

    useEffect(() => {
        axiosSecure.interceptors.request.use((config) => {
            const token = localStorage.getItem("access-token");
            console.log("Token from axiosSecure ", token);

            if (token) {
                config.headers.Authorization = `Bearer ${token}`
            }
            return config
        })
        axiosSecure.interceptors.response.use(
            (response) => response,
            async (error) => {

                if (error.response && (error.response.status === 401 || error.response.status === 403)) {
                    console.log(error.response.status);
                    await logOut();

                    navigate('/login')
                }
                return Promise.reject(error)
            }
        )

    },
        [logOut, navigate, axiosSecure])
    return [axiosSecure]
};

export default useAxiosSecure;