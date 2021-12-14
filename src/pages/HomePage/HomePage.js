import React from 'react';
import { Inputs, MainContainer, Products, Wrapper } from '../HomePage/styles';
import { BASE_URL } from "../../assets/constants/constants"
import { useRequestData } from '../../hooks/useRequestData';
import ProductCard from '../../components/ProductCard/ProductCard';

const HomePage = (props) => {

    const { data, getData } = useRequestData(`${BASE_URL}/products`, undefined)
    console.log(data)

    const showProducts = data && data.map((product) => {
        return (
            <ProductCard product={product} />
        )
    })

    return (

        <MainContainer>
            <h1>Cadastre seu pedido!</h1>

            <Wrapper>
            <Products>
                {showProducts}
            </Products>

            {props.showCart && 
            <Inputs>

            <label htmlFor='name'><b>Insira seu nome:</b></label>
            <input
                name="name"
                placeholder="Seu nome"
            // value={this.state.titulo}
            // onChange={this.onChangeTitulo}
            />

            <label htmlFor='date'><b>Selecione uma data para a entrega:</b></label>

            <input type="date" name="date"

            // value={this.state.dataPrazo}
            // onChange={this.onChangePrazo}
            />

        </Inputs>
            }
            
            </Wrapper>
        </MainContainer>

    );
}

export default HomePage;
