import React from 'react'
import { StyledDiv, ForecastsWrapper } from './styles'
import { useWeather } from '@/context'
import WeatherCard from '../weatherCard'
import { Text } from '@/stories/text/Text'

export default function FiveDayWeather() {
  const { searched, search } = useWeather()

  return (
    searched && <StyledDiv>
      <Text
        text='5 DAYS FORECAST'
        variant='medium'
        color='#c26d0e'
        fontWeight={700}
      />
      <ForecastsWrapper>
        {search.FiveDayForecast.map((day, dayIndex) =>
          <React.Fragment key={dayIndex}>
            <WeatherCard dayInfo={day} />
          </React.Fragment>
        )}
      </ForecastsWrapper>
    </StyledDiv>
  )
}
