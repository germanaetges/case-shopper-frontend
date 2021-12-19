import axios from 'axios'
import { BASE_URL } from "../assets/constants/constants"


export const createOrder = (body) => {
    axios.post(`${BASE_URL}/orders`, body)
        .then(response => {
            console.log(response)
            window.alert("Pedido cadastrado com sucesso!")
        })
        .catch(error => {
            console.log(error.response.data)
            window.alert("Ops, algo deu errado! Tente novamente.")
        })
}