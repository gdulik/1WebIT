import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  position: relative;
  margin-top: 40px;
  background-color: #ffffff;
  -webkit-box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
  padding: 30px 20px;
  border-radius: 5px;
`

export const Filter = styled.div`
  margin: auto;
  min-width: 300px;
  width: 50%;
  display: flex;
  justify-content: space-between;
`

export const FilterType = styled.span`
  text-transform: capitalize;
  cursor: pointer;
  font-weight: ${(props) => (props.active ? '700' : '400')};
`
