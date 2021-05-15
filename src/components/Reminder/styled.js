import styled from 'styled-components'

export const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  margin: 2.5rem;
  background-color: ${(props) => props.background || '#ffffff'};
  -webkit-box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
  padding: 10px 20px;
  border-radius: 5px;
  color: ${(props) => props.color || '#000'};
`
