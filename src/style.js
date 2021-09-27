import styled from "styled-components";

export const ContainerApp = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ContainerStart = styled.div`
    display: flex;
    flex-direction: column;
    margin-top:15vh;
    align-items: center;

    button {
            width: 70%;
            color: white;
            border-radius: 5px;
            padding: 10px;
            border: none;
            background-color: var(--purple);
            box-shadow: 5px 0 20px -7px black;

            :hover {
                cursor: pointer;
                font-weight: bold;
            }

            &+button {
                margin-top: 20px;
            }
        }
`

export const Header = styled.div`
    display: flex;
    background-color: var(--purple);
    color: white;
    width: 100vw;
    padding: 10px;
    box-shadow: 10px 0 15px -2px black;

    button {
        color: white;
        border: none;
        background-color: var(--purple);
        display: flex;
        align-items: center;

        :hover {
            cursor: pointer;
        }

        img {
        width: 40px;
        margin:0 10px;
        }
    }
`