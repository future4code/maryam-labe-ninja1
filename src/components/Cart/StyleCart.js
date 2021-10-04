import styled from "styled-components";

export const JobsCart = styled.div`
    margin-top: 10px;
    padding: 5px;
    display: flex;
    justify-content: space-between;
    align-itens: center;
    width: 40vw;
    background-color: white;
    border-radius: 5px;
    border: 1px solid #978ACE;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
`
export const Description = styled.div`
font-size: 20px;

`

export const CartJobs = styled.div`

button {
    width: 180px;
    font-size: 90%;
    color: white;
    border: none;
    border-radius: 5px;
    background-color: #978ACE;
    padding: 5px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    margin: 10px;

    :hover {
      font-weight: bolder;
    }

    :active {
      color: lightgray;
    }
  }
`

