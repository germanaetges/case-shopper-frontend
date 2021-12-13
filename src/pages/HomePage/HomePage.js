import React from 'react';
import { Inputs, MainContainer } from '../styles';

export class HomePage extends React.Component {

    render() {
        return (

            <MainContainer>
                <h1>Cadastre seu pedido!</h1>
                <Inputs>
                    <input
                        placeholder="Seu nome"
                    // value={this.state.titulo}
                    // onChange={this.onChangeTitulo}
                    />

            <label htmlFor='date'>Selecione a data de entrega!</label>

                        <input type="date" name="date"
                        
                        // value={this.state.dataPrazo}
                        // onChange={this.onChangePrazo}
                    />

                    {/* <input
                        placeholder="Escolha a data de entrega"  */}
                    {/* // value={this.state.descricao}
                    // onChange={this.onChangeDescricao}
                    /> */}
                    <select
                        
                        >
                        <option value="escolha seus produtos"> Escolha seus produtos </option>
                        <option value="alface"> Alface </option>
                        <option value="batata"> Batata </option>
                        <option value="tomate"> Tomate </option>
                        <option value="pizza congelada"> Pizza </option>
                    </select>

                    
                </Inputs>
                {/* <Botao>
                    <Button variant="contained" color="primary" onClick={this.criaServico}>Cadastrar serviço</Button>
                </Botao> */}

            </MainContainer>

        );
    }
}
