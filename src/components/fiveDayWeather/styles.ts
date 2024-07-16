import styled from 'styled-components'

export const StyledDiv = styled.div`
  padding: 2rem 4rem;
  background-color: #2c2930;
`
export const ForecastsWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 2rem;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`
