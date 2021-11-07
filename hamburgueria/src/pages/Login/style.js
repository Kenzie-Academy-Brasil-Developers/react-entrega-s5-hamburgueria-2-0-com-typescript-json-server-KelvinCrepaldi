import styled from "styled-components";

export const LoginContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;

  width: 360px;

  form {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }

  .footer {
    text-align: center;
    width: 261px;
  }
`;

export const TextContainer = styled.div`
  justify-content: center;
  border: 1px solid #e0e0e0;
  width: 377px;
  height: 95px;
  display: flex;
  margin: 0 auto;

  .imgCont {
    width: 60px;
    height: 60px;
    background-color: rgba(39, 174, 96, 0.1);
    margin: 10px;
  }

  p {
    margin: 20px;
    padding: 0;
    font-size: 14px;
  }
`;
