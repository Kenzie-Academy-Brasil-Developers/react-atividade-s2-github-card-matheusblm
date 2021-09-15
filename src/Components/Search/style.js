import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffff;
  width: 50%;
  align-items: center;
  margin: 20px auto;
  background-color: #add8e6;
  border-radius: 10px;
  transition: 0.5s;
  input {
    width: 200px;
    height: 15px;
    border-radius: 10px;
    border-style: solid;
    margin: 20px 20px 0px 20px;
  }
  input::placeholder {
    font-size: 12px;
  }
  input:focus::placeholder {
    opacity: 0;
    transition: 0.5s;
  }

  button {
    font-size: 12px;
    padding: 5px;
    border-style: hidden;
    background-color: #3f4496;
    color: #ffff;
    border-radius: 15px;
    width: 100px;
    margin-top: 20px;
  }
  button:hover {
    background-color: #7774eb;
    cursor: pointer;
    color: #dff5f1;
    transition: 0.5s;
    width: 80px;
  }
`;

export const Errop = styled.p`
  color: red;
  margin: 0;
  font-size: 10px;
  margin-right: 70px;
`;
