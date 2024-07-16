import { StyledDiv, TemperatureDiv } from './styles'
import Image from 'next/image'
import { useWeather } from '@/context'
import { Text } from '@/stories/text/Text'

export default function WeatherCard({ dayInfo }) {
  const { temperatureUnit, convertFahrenheitToCelsius } = useWeather()
  const formattedDate = new Date(dayInfo.Date)
  const dayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"]

  return (
    <StyledDiv>
      <Text
        text={`${dayNames[formattedDate.getDay()]} ${formattedDate.getDate()}`}
        variant='medium'
        fontWeight={900}
      />
      <Image
        src={`/assets/${dayInfo.Day.Icon}.png`}
        alt={`${dayInfo.Day.IconPhrase} icon`}
        width={80}
        height={50}
      />
      <TemperatureDiv>
        <Text
          text={temperatureUnit == "F"
            ? `${dayInfo.Temperature.Maximum.Value}º`
            : `${convertFahrenheitToCelsius(dayInfo.Temperature.Maximum.Value)}º`
          }
          variant='x-large'
          fontWeight={900}
          color='#c26d0e'
        />
        <Text
          text={temperatureUnit == "F"
            ? `${dayInfo.Temperature.Minimum.Value}º`
            : `${convertFahrenheitToCelsius(dayInfo.Temperature.Minimum.Value)}º`
          }
          variant='medium'
          fontWeight={900}
        />
        {/* {temperatureUnit == "F"
          ? `${dayInfo.Temperature.Maximum.Value}º ${dayInfo.Temperature.Minimum.Value}º`
          : `${convertFahrenheitToCelsius(dayInfo.Temperature.Maximum.Value)}º ${convertFahrenheitToCelsius(dayInfo.Temperature.Minimum.Value)}º`
        } */}
      </TemperatureDiv>
      <Text
        text={dayInfo.Day.IconPhrase}
        variant='small'
        fontWeight={900}
      />
    </StyledDiv>
  )
}
