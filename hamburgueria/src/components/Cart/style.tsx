import styled from "styled-components";

export const CartContainer = styled.section`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%);
  margin: 0 auto;
  width: 500px;
  min-height: 150px;
  border: 1px solid black;
  background-color: #f5f5f5;
  z-index: 1;

  .topTitle {
    width: 100%;
    height: 54px;
    background-color: #27ae60;
    display: flex;
    justify-content: space-between;

    button {
      background: none;
      border: none;
      font-size: 20px;
    }

    h1 {
      color: white;
    }
  }
`;

export const CardContainer = styled.div`
  display: flex;
  width: 452px;
  justify-content: space-between;
  img {
    width: 50px;
    background-color: #e0e0e0;
  }
`;
