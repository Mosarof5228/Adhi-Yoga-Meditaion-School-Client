import { useContext, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';



const useAxiosSecure = () => {
    const navigate = useNavigate();
    const { logOut } = useContext(AuthContext);
    const axiosSecure = axios.create({
        baseURL: 'https://adhi-yoga-meditation-school-server.vercel.app'
    });

    useEffect(() => {
        axiosSecure.interceptors.request.use(
            config => {
                const token = localStorage.getItem('access-token');
                if (token) {
                    config.headers['Authorization'] = `Bearer ${token}`;
                }
                return config;
            },
            error => {
                return Promise.reject(error);
            }
        );
        axiosSecure.interceptors.response.use(
            response => response,
            error => {
                if (error.response && (error.response.status === 401 || error.response.status === 403)) {
                    logOut().then(() => {
                        navigate('/login');
                    });
                }
                return Promise.reject(error);
            }
        );
    }, [navigate, logOut, axiosSecure]);

    return [axiosSecure];
};

export default useAxiosSecure;