import axios from "axios";

import {
    BASE_API,
    NETWORK_ISSUE_MESSAGES
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
                baseURL: BASE_API
            });
            if (resp.status === 200) {
                responseBackup = resp.data;
                successCb(resp.data);
            } else {
                errorCb(resp);
            }
        } catch (e) {
            console.error(e);
            if(NETWORK_ISSUE_MESSAGES.indexOf(e.message) > -1) {
                successCb(responseBackup);
            } else {
                errorCb({ error: e});
            }
        }
    }
};

export default new AxiosService();
