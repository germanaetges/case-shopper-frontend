import React from 'react'
import { BASE_URL } from "../../assets/constants/constants"
import { useRequestData } from '../../hooks/useRequestData'
import StockCard from '../../components/StockCard/StockCard'
import { useHistory } from 'react-router-dom'
import Button from '@mui/material/Button'
import { goBack } from "../../routes/coordinator"
import { ButtonAndTitle } from './styles'
import CircularProgress from '@mui/material/CircularProgress'

const StockPage = () => {

    const history = useHistory()

    const { data } = useRequestData(`${BASE_URL}/products`, undefined)
   
    const showProducts = data && data.map((product) => {
        return (
            <StockCard product={product}/>
        )
    })

    return (

        <div>
            <ButtonAndTitle>
                <Button variant="contained" color="primary" onClick={() => goBack(history)}>Voltar</Button>
                <h3>Aqui você encontra uma lista atualizada do nosso estoque!</h3>
            </ButtonAndTitle>
            {data ? showProducts : <CircularProgress />}
            {showProducts}
        </div>
    )
}

export default StockPage