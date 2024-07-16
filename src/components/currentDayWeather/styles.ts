
import styled from 'styled-components'

export const StyledDiv = styled.div`
  display: grid;
  justify-content: center;
  padding: 2rem 4rem;
  gap: 1rem;
  background-color: #232229;
  flex-grow: 1;
`
export const Temperature = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 300px;
  gap: 1rem;
`
export const TemperatureButton = styled.button<{
  borderStyle?: boolean
}>`
  background:linear-gradient(to bottom, #232229 15%, #302f36 100%);
	border-radius: 10px;
	cursor: pointer;
	padding: 4px 13px;
	text-decoration: none;
  border: ${(props) => props.borderStyle ? "1px double black" : "none"};
`
export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`