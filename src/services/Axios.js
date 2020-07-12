import axios from "axios";

import {
    BASE_API
} from "../constants/";

let responseBackup = null;

class AxiosService {
    get = async (url, params = {}, successCb, errorCb) => {
        try {
            let resp = await axios({
                method: 'get',
                url,
                params,
                headers: {
                    "Accept": "application/json",
                    "Access-Control-Allow-Origin": "*"
                },
            });
            if (resp.status === 200) {
                responseBackup = resp.data;
                successCb(resp.data);
            } else {
                errorCb(resp);
            }
        } catch (e) {
            console.error(e);
            if(e.message === "Network Error") {
                successCb(responseBackup);
            } else {
                errorCb({ error: e});
            }
        }
    }
};

export default new AxiosService();
