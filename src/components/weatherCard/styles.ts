import styled from 'styled-components'

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  width: 20%;
  background-image: linear-gradient(#2b282f, #38363c);
  gap: 1rem;
  border-radius: 5px;

  @media (max-width: 768px) {
    width: 100%;
  }
`
export const TemperatureDiv = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 4px;
`