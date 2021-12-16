import React from 'react';
import { Inputs, MainContainer, Products, Wrapper } from '../HomePage/styles';
import { BASE_URL } from "../../assets/constants/constants"
import { useRequestData } from '../../hooks/useRequestData';
import ProductCard from '../../components/ProductCard/ProductCard';
import { useState } from 'react';

const HomePage = (props) => {

    const { data, getData } = useRequestData(`${BASE_URL}/products`, undefined)

    const [cart, setCart] = useState([])

    const addToCart = (product) => {
        const newProduct = { ...product, productQuantity: 1 }
        const newCart = [...cart, newProduct]
        setCart(newCart)
    }

    const showProducts = data && data.map((product) => {
        return (
            <ProductCard
                product={product}
                addToCart={addToCart}
            />
        )
    })

    return (
        <MainContainer>
            <h1>Escolha seus produtos!</h1>
            <Wrapper>
                <Products>
                    {showProducts}
                </Products>

                {props.showCart &&

                    <div>
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


                    </div>
                }

            </Wrapper>
        </MainContainer>

    );
}

export default HomePage;
