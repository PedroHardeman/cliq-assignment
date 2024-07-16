'use client'
import { StyledDiv } from './styles'
import { Text } from '@/stories/text/Text'

export default function PageTitle() {
  return (
    <StyledDiv>
     <Text
        text='React weather'
        variant='medium'
        fontWeight={900}
      />
    </StyledDiv>
  )
}
