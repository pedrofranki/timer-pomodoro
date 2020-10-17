import styled from 'styled-components';

export const HomeContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
`

export const TimerBox = styled.div`
  opacity: 0.8;
  width: 480px;
  height: 312px;
  border-radius: 10px;
  background-color: #F26C67;
  transform: translateY(100px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px;

  div{
    width: 75%;
    display: flex;
    justify-content: center;
    a{
      font-weight: 700;
      letter-spacing: .5px;
      font-size: 16px;  
      padding:7.5px;
      cursor: pointer;
      &:hover{
        background-color: rgba(0,0,0,.2);
        border-radius: 4px;
      }
    }
  }

  button {
    border: none;
    width: 200px;
    height: 60px;
    border-radius: 5px;
    font-size: 30px;
    font-weight: 600;
    letter-spacing: .8px;
    color: #F26C67;
    cursor: pointer;
  }
`

export const Timer = styled.h1`
  font-size: 120px;
  font-weight: 700;
  margin: 30px 0;
`