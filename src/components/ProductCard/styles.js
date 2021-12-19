import styled from "styled-components"

export const CardStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: space-between;
    width: 150px;
    border: 1px solid black;
    border-radius: 10px;
    p {
        text-transform: capitalize;
        font-size: 12px
    }
    padding-bottom: 20px;
    padding-top: 20px;
`