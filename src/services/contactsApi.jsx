import axios from "axios";

axios.defaults.baseURL = 'https://646a14b1183682d6144d2ef5.mockapi.io/contacts/'

export const contactsApi = async () => {
    const { data } = await axios.get()
    return data
}