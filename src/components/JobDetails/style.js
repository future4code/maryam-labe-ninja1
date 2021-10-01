import styled from "styled-components";


export const DetailBody = styled.div`
    height: 60vh;
`

export const Detail = styled.div`

  display: flex;
  margin-top: 50px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 5px;
  border: 1px solid #978ACE;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  padding-bottom: 15px;
  width: 400px;
`

export const  ButtonJobCard = styled.div`
    margin-top: 20px;
    width: 100%;
    display: flex;
    justify-content: space-around;

    button {
        width: 120px;
        font-size: 90%;
        color: white;
        border: none;
        border-radius: 5px;
        background-color: #978ACE;
        padding: 5px;
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);

        :hover {
        font-weight: bolder;
        }

        :active {
        color: lightgray;
        }
    }
`
