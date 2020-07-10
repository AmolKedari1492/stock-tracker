import axios from "axios";

import {
    BASE_API
} from "../constants/";

class AxiosService {
    get = (url, params = {}, successCb, errorCb) => {
        axios({
            method: 'get',
            url,
            params,
            headers: {
                "Accept": "application/json",
                "Access-Control-Allow-Origin": "*"
            }
        }).then((res) => {
            if(res.status === 200) {
                successCb(res.data);
            }
        }).catch((error) => {
            errorCb(error);
        });
    }

    // TODO REMOVE METHODS
    // post = (url, params, data, successCb, errorCb) => {
    //     axios({
    //         method: 'post',
    //         url,
    //         params,
    //         data,
    //         headers: {
    //             "Accept": "application/json",
    //             "Access-Control-Allow-Origin": "*"
    //         }
    //       }).then((res) => {
    //         successCb(res);
    //     }).catch((error) => {
    //         errorCb(error);
    //     });
    // }

    // put = (url, params, data, successCb, errorCb) => {
    //     axios({
    //         method: 'put',
    //         url, 
    //         params,
    //         data,
    //         headers: {
    //             "Accept": "application/json",
    //             "Access-Control-Allow-Origin": "*"
    //         }
    //       }).then((res) => {
    //         successCb(res.data);
    //     }).catch((error) => {
    //         errorCb(error);
    //     });
    // }

    // delete = (url, params, data, successCb, errorCb) => {
    //     axios({
    //         method: 'delete',
    //         url,
    //         params,
    //         data,
    //         headers: {
    //             "Accept": "application/json",
    //             "Access-Control-Allow-Origin": "*"
    //         }
    //       }).then((res) => {
    //         successCb( res.data);
    //     }).catch((error) => {
    //         errorCb(error);
    //     });
    // }
};

export default new AxiosService();
