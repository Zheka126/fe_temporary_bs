import { instance } from "./instance";

export const API = {
    login: (values) => {
        return instance.post('/login', values);
    }
}