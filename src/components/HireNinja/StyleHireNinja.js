import styled from "styled-components";

export const ContainerCart = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: -50px;

  input {
    padding: 7px;
    border: none;
    background-color: #F5F4FC;
    border-radius: 5px;
    margin-right: 270px;
    width: 250px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  }

  button {
    border-radius: 5px;
    border: none;
  }
`

export const FilterContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 40px;
  
  input, select {
    border: none;
    border-radius: 5px;
    padding: 3px;
    margin-left: 5px;
    margin-right: 7px;
  }


  label {
    margin-left: 5px;
  }
`

export const JobsCardContainer = styled.div`
  width: 270px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 5px;
  border: 1px solid #978ACE;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  padding-bottom: 15px;
`
export const ButtonJobCard = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;

  button {
    width: 100px;
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

export const ContainerAllJobs = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 25px;
  margin-top: 30px
`
