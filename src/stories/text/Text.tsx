import { StyledText } from './styles'

export type VariantType = 'xx-large' | 'x-large' | 'large' | 'medium' | 'small'

export interface TextProps {
  variant: VariantType
  text: number | string
  color?: string
  fontWeight?: number,
}

export const Text = ({ variant, text, color, fontWeight }: TextProps) => {
  return (
    <StyledText color={color} variant={variant} fontWeight={fontWeight}>
      {text}
    </StyledText>
  )
}
