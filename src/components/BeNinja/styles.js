import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 62.15vh;

  form {
    display: flex;
    flex-direction: column;
    width: 600px;
    margin-top: 40px;

    input {
      height: 40px;
      border: 0;
      padding: 0.5rem;
      border: 1px solid #e2e8f0;
      border-radius: 10px;
      font-size: 16px;

      & + input {
        margin-top: 20px;
      }
    }

    select {
      margin-top: 20px;
      margin-bottom: 20px;
      height: 40px;
      border: 0;
      padding: 0.5rem;
      border: 1px solid #e2e8f0;
      border-radius: 10px;
      font-size: 16px;
    }

    button {
      margin-top: 20px;
      height: 32px;
      font-size: 1rem;
      padding: 0 2rem;
      border-radius: 10px;
      border: 0;
      color: white;
      background-color: var(--purple);
      transition: all 0.2s;

      :hover {
        border: 0;
        background-color: var(--secPurple);
        color: var(--background);
      }
    }
  }
`

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  input {
    & + label {
      margin-right: 24px;
    }
  }

  label {
    margin-left: 8px;
  }
`
