import React from 'react';
import { Inputs, MainContainer, Products, Wrapper } from '../HomePage/styles';
import { BASE_URL } from "../../assets/constants/constants"
import { useRequestData } from '../../hooks/useRequestData';
import useForm from '../../hooks/useForm';
import ProductCard from '../../components/ProductCard/ProductCard';
import { useState, useEffect } from 'react';
import ItemCard from "../../components/ItemCard/ItemCard"
import Button from '@mui/material/Button';

const HomePage = (props) => {

    const { data, getData } = useRequestData(`${BASE_URL}/products`, undefined)

    const [cart, setCart] = useState([])

    const [totalPrice, setTotalPrice] = useState(0)

    const [form, handleForm] = useForm(
        {
            name: "",
            date: ""
        }
    )

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

    const calculateTotalPrice = () => {
        let sum = 0

        for (let item of cart) {
            console.log(item)
            let qty = item.productQuantity
            let price = item.price
            sum += price * qty
        }
        setTotalPrice(sum)
    }

    useEffect(() => {
        calculateTotalPrice()
    }, [cart]);

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
                        <p>Valor total da compra: R$ <b>{totalPrice.toFixed(2)}</b></p>

                        {showCartItems}

                        <Inputs>
                            <label htmlFor='name'><b>Insira seu nome:</b></label>
                            <input
                                name="name"
                                placeholder="Seu nome"
                            value={form.name}
                            onChange={handleForm}
                            />

                            <label htmlFor='date'><b>Selecione uma data para a entrega:</b></label>
                            <input type="date" name="date"

                            value={form.date}
                            onChange={handleForm}
                            />

                            <Button variant="contained" color="primary" >Finalizar compra!</Button>
                        </Inputs>
                    </div>
                }

            </Wrapper>
        </MainContainer>

    );
}

export default HomePage;
