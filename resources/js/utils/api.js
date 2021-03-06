import axios from 'axios';
import AuthToken from '~/utils/token';

// const SERVER_BASE_URL = process.env.BASE_URL;
const SERVER_BASE_URL = 'http://localhost:1111';
const http = axios.create({
    headers: {
        'Content-Type': 'application/json'
    }
});
console.log(SERVER_BASE_URL);
http.interceptors.request.use(config => {
    const token = AuthToken.getToken();
    if (token) {
        config.headers.common.Authorization = `Bearer ${token}`;
    }
    return config;
}, error => Promise.reject(error));

const postRequest = function (url, data, resolve, reject) {
    const requestUrl = SERVER_BASE_URL + url;
    http
        .post(requestUrl, data)
        .then(res => {
            resolve(res);
        })
        .catch(error => {
            reject(error);
        });
};

const getRequest = function (url, data, resolve, reject) {
    const requestUrl = SERVER_BASE_URL + url;
    http
        .get(requestUrl, data)
        .then(res => {
            resolve(res);
        })
        .catch(error => {
            reject(error);
        });
};

const putRequest = function (url, data, resolve, reject) {
    const requestUrl = SERVER_BASE_URL + url;
    http
        .put(requestUrl, data)
        .then(res => {
            resolve(res);
        })
        .catch(error => {
            reject(error);
        });
};

const patchRequest = function (url, data, resolve, reject) {
    const requestUrl = SERVER_BASE_URL + url;
    http
        .patch(requestUrl, data)
        .then(res => {
            resolve(res);
        })
        .catch(error => {
            reject(error);
        });
};

const deleteRequest = function (url, data, resolve, reject) {
    const requestUrl = SERVER_BASE_URL + url;
    http
        .delete(requestUrl, data)
        .then(res => {
            resolve(res);
        })
        .catch(error => {
            reject(error);
        });
};

export default {
    getRequest,
    postRequest,
    putRequest,
    patchRequest,
    deleteRequest
};
