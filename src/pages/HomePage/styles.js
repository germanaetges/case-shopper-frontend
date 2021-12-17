import styled from "styled-components"

export const Wrapper = styled.div`
display: flex;
`

export const MainContainer = styled.div`
background-color: #F9FDFC;
padding-left: 30px;
min-height: 100vh;
`

export const Inputs = styled.div`
display: flex;
flex-direction: column;
width: 300px;
// border: 2px solid black;
gap: 15px;
padding: 10px;
input {
    padding: 10px;
    border-radius: 10px;
}
`

export const Products = styled.div`
display: flex;
flex-wrap: wrap;
gap: 8px;
`