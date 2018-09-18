import { ApiBaseUrl } from '../config/url'

export const EndPoint = {
    list: {
        method: "GET",
        getUrl: (user, repositorie) => `${ApiBaseUrl}repos/${user}/${repositorie}/issues`
    }
}