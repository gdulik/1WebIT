import styled from 'styled-components'

export const Form = styled.form`
  position: relative;
  padding: 30px 15px;
  background-color: #ffffff;
  border-radius: 5px;
  -webkit-box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
`

export const Input = styled.input`
  border-radius: 5px;
  width: 70%;
  height: 45px;
  font-size: 15px;
  border: 2px solid #d1d3d4;
  padding: 12px;
  color: #111111;
  font-weight: 700;
  position: relative;
  &:focus {
    outline: none;
    border-color: #8052ec;
  }
`

export const Button = styled.button`
  position: relative;
  float: right;
  width: 23%;
  height: 45px;
  border-radius: 5px;
  font-weight: 700;
  font-size: 16px;
  background-color: #8052ec;
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
`
