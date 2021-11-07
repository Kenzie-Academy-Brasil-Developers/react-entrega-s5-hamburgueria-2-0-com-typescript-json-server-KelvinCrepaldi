import styled from "styled-components";

export const CardContainer = styled.div`
  width: 300px;
  height: 346px;

  border: 2px solid #e0e0e0;
  border-radius: 5px;

  background-color: #ffff;

  h1 {
    font-size: 18px;
    color: #08080833;
  }
  label {
    width: 100%;
    margin: 5px;
  }

  span {
    font-size: 14px;
    color: #27ae60;
  }

  .imgContainer {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 150px;
    background-color: #f5f5f5;
  }
  .infoContainer {
    display: flex;
    flex-wrap: wrap;
    margin: 20px;
  }
`;
