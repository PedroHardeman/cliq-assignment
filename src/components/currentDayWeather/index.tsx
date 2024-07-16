import { StyledDiv, Temperature, TemperatureButton, ButtonsWrapper } from './styles'
import { useWeather } from '@/context'
import { Text } from '@/stories/text/Text'

export default function CurrentDayWeather() {
  const { temperatureUnit, setTemperatureUnit } = useWeather()
  const { searched, search } = useWeather()
  const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

  return (
    <StyledDiv>
      {searched
        ? <>
          <Text
            text={search.CityAndCountryName}
            variant='large'
            fontWeight={900}
          />
          <Temperature>
            <Text
              text={temperatureUnit === 'F'
                ? `${search.CurrentWeatherFahrenheit}º`
                : `${search.CurrentWeatherCelsius}º`
              }
              variant='xx-large'
              color='#c26d0e'
              fontWeight={400}
            />
            <ButtonsWrapper>
              <TemperatureButton
                onClick={() => setTemperatureUnit("F")}
                borderStyle={temperatureUnit === 'F'}
              >
                <Text
                  text='F'
                  variant='large'
                  color='#c26d0e'
                  fontWeight={900}
                />
              </TemperatureButton>
              <TemperatureButton
                onClick={() => setTemperatureUnit("C")}
                borderStyle={temperatureUnit === 'C'}
              >
                <Text
                  text='C'
                  variant='large'
                  color='#c26d0e'
                  fontWeight={900}
                />
              </TemperatureButton>
            </ButtonsWrapper>
          </Temperature>
          <Text
            text={`${dayNames[new Date(search.CurrentWeekDay).getDay()]}, ${search.CurrentDayDescription}`}
            variant='medium'
            fontWeight={900}
          />
        </>
        : <Text
          text='Search for a city name for weather updates'
          variant='medium'
          fontWeight={900}
        />
      }
    </StyledDiv>
  )
}
