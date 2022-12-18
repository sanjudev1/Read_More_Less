// Style your elements here
import styled from 'styled-components'

export const Paragraph = styled.p`
  max-width: 50%;
`

export const BgContainer = styled.div`
  width: 100vw;
  height: 100vh;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Heading = styled.h1`
  font-family: 'Roboto';
`

export const Container = styled.div`
  max-width: 60%;
  max-height: 80%;
  justify-content: center;
  align-items: center;
  display: flex;
  font-family: 'Roboto';

  flex-direction: column;
`

export const Image = styled.img`
  width: 60%;
  height: 55%;
`
export const Button = styled.button`
  width: 118px;
  height: 45px;
  border-radius: 10px;
  color: white;
  background-color: #1f81ff;
  cursor: pointer;
  background-color: ${props => (props.active === true ? 'blue' : 'black')};
`
