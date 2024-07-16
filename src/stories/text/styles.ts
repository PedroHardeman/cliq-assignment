import styled from 'styled-components'

const handleFontSize = (variant: string) => {
  switch (variant) {
    case 'xx-large':
      return '96px'
    case 'x-large':
      return '48px'
    case 'large':
      return '36px'
    case 'medium':
      return '24px'
    case 'small':
      return '18px'
  }
}

export const StyledText = styled.span<{
  color?: string
  variant: string
  fontWeight?: number
}>`
  color: ${(props) => props.color || "white"};
  font-family: Roboto;
  font-size: ${({ variant }) => handleFontSize(variant)};
  font-weight: ${(props) => props.fontWeight || 400};
`
