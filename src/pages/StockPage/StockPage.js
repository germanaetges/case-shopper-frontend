import React from 'react'

const StockPage = (props) => {

    return (

        <div>
            <table border="1">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Preço</th>
                        <th>Quantidade em estoque</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>001</td>
                        <td>Água 5l</td>
                        <td>R$ 7.00</td>
                        <td>420</td>
                    </tr>
                </tbody>
            </table>

        </div>

    )
}

export default StockPage