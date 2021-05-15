import styled from 'styled-components'

export const Item = styled.div`
  background: #ffffff;
  height: 50px;
  padding: 5px 10px;
  border-radius: 0px;
  margin-top: 10px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  border-bottom: 2px solid #d1d3d4;
`

export const Checkbox = styled.input`
  margin: 1rem;
  cursor: pointer;
  }
`

export const Task = styled.p`
  margin: 1rem;
  cursor: pointer;
  text-decoration: ${(props) => (props.isFinished ? 'line-through' : 'none')};
`

export const Button = styled.button`
  margin: 1rem;
  padding: 1rem;
  border-radius: 5px;
  font-weight: 700;
  background-color: #8052ec;
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  &:disabled {
    background-color: #444;
    cursor: not-allowed;
  }
  &:hover:disabled {
    background-color: #444;
  }
  &:hover {
    background-color: #d161ff;
  }
`
