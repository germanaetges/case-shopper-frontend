import React from 'react';
import { Inputs, MainContainer, Products, Wrapper } from '../HomePage/styles';
import { BASE_URL } from "../../assets/constants/constants"
import { useRequestData } from '../../hooks/useRequestData';
import ProductCard from '../../components/ProductCard/ProductCard';
import { useState } from 'react';
import ItemCard from "../../components/ItemCard/ItemCard"

const HomePage = (props) => {

    const { data, getData } = useRequestData(`${BASE_URL}/products`, undefined)

    const [cart, setCart] = useState([])

    // const [selectedProduct, setselectedProduct] = useState([])

    const addToCart = (product) => {
        const newProduct = { ...product, productQuantity: 1 }
        const newCart = [...cart, newProduct]
        setCart(newCart)
    }

    const increaseQty = (product) => {
        const productQuantity = product.productQuantity + 1;
        const newProduct = { ...product, productQuantity }
        updateCart(newProduct);
      };

      const decreaseQty = (product) => {
        const productQuantity = product.productQuantity - 1;
        const newProduct = { ...product, productQuantity }
        updateCart(newProduct);
      };

      const updateCart = (productToUpdate) => {
        const newCart = cart.filter((product) => {
          return product.id !== productToUpdate.id
        });
    
        setCart([...newCart, productToUpdate])
      };


      console.log(cart)
    const showProducts = data && data.map((product) => {
        return (
            <ProductCard
                product={product}
                addToCart={addToCart}
            />
        )
    })

    const showCartItems = cart.map((item) => {

        return (
            <ItemCard
                item={item}
                increaseQty={increaseQty}
                decreaseQty={decreaseQty}
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
                    {showCartItems}

                    </div>
                }

            </Wrapper>
        </MainContainer>

    );
}

export default HomePage;
