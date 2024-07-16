import { StyledDiv } from './styles'
import { Text } from '@/stories/text/Text'
import Autocomplete from '../autocomplete'

export default function Input() {
  return (
    <StyledDiv>
      <div className='mx-auto'>
        <Text
          text='City Name'
          variant='small'
          color='#c26d0e'
          fontWeight={400}
        />
        <Autocomplete />
      </div>
    </StyledDiv>
  )
}
