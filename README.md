# E-COMMERCE SHOPPER 

## Site no surge: http://caseshoppergermana.surge.sh/

<h6> Projeto de Front End - Case para seleção da Shopper </h6>

- Este é um projeto básico de front end de e-commerce, com funções de exibir produtos, adicionar e remover produtos do carrinho, exibir estoque, adicionar produtos e cadastrar um pedido. 
- Projeto desenvolvido com Create React App

## DOCUMENTAÇÃO DE FUNCIONAMENTO

* Clonar este repositório em uma pasta própria;
* Executar `npm install` para adicionar as dependências;
* Rodar `npm start` para rodar o projeto!

## DOCUMENTAÇÃO DOS COMPONENTES

### Header
 O Header possui o logo da empresa e dois botões funcionais: 
* Ver estoque - direciona para a página de estoque, onde há a lista de produtos com seus respectivos nomes e quantidades disponíveis em estoque;

* Ver carrinho - botão responsivo que permite acessar - na HomePage - os produtos adicionados e formulários de cadastro de pedido.

### HomePage
A HomePage concentra as funcionalidades da aplicação:
* Exibir produtos - lista completa de produtos disponíveis no estoque, com nome, preço e botão de adicionar ao carrinho;

* Exibir carrinho - quando exibido, o carrinho retorna com a função de ver Valor Total no canto superior direito, abaixo dele a lista de produtos adicionados pelo cliente - com opção de aumentar e diminuir a quantidade de cada produto e botão de remover, seguidos dos dois campos obrigatórios a serem preenchidos em Inputs controlados: Nome do cliente e Data para a entrega.
Há também botões de quantidade abaixo de cada produto, para que o cliente possa aumentar ou diminuir a quantidade de cada produto adicionado;

* Botão de finalizar a compra: etapa final da aplicação, onde o cliente finaliza o pedido, e em caso de sucesso, recebe um alerta de "Pedido cadastrado com sucesso!".

### StockPage
A página de estoque renderiza todos os produtos disponíveis no estoque, com seus respectivos nomes e quantidades disponíveis.
Há também um botão de Voltar no canto superior esquerdo, que retorna o cliente para a HomePage.

## Bibliotecas e Frameworks
* React
* React Router Dom
* Axios
* styled-components
* Material-UI

## Printscreen da aplicação:
![image](https://user-images.githubusercontent.com/85320383/146674940-ee815bc9-3d98-47aa-8121-4e262672682f.png)

