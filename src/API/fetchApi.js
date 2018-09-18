import { USER, REPOSITORIE } from '../config/github'

const fetchApi = endPoint => {

    return fetch(endPoint.getUrl(USER, REPOSITORIE), {
        method: endPoint.method,
    }).then(response => response.json());
}

export default fetchApi;