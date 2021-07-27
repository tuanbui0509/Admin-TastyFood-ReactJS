import axios from 'axios';
import * as Config from '../Constants/Config'
export default function callApi(endpoint, method, body, token ='') {
    return axios({
        method: method,
        url: `${Config.API_URL}/${endpoint}`,
        data: body,
        headers: {
            "Content-Type": "application/json",
            'Authorization': 'Bearer ' + token
        }
    }).catch(err => console.log(err))
}