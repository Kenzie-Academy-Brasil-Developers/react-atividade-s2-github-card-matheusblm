import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  flex-direction: column;

  img {
    width: 35px;
    height: 35px;
    margin-right: 5px;
  }
  li {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    list-style: none;
    align-items: center;
    align-content: center;
    background-color: white;
    margin-right: 30px;
    border-radius: 10px;
    margin-top: 10px;
  }
  h3 {
    margin: 0;
    font-size: 16px;
  }
  p {
    font-size: 14px;
    margin: 0;
  }
  a {
    margin-left: 100px;
  }
`;
