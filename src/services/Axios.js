import axios from "axios";

import {
    BASE_API
} from "../constants/";

class AxiosService {
    get = async (url, params = {}, successCb, errorCb) => {
        let resp = await axios({
            method: 'get',
            url,
            params,
            headers: {
                "Accept": "application/json",
                "Access-Control-Allow-Origin": "*"
            }
        });

        try {
            if (resp.status === 200) {
                successCb(resp.data);
            } else {
                errorCb(resp);
            }
        } catch (e) {
            console.error(e);
            errorCb({});
        }
    }
};

export default new AxiosService();
