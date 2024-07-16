import React from 'react';
import { StyledDiv } from './styles'
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { useWeather } from '@/context'
import { Text } from '@/stories/text/Text'

export default function WeatherChart(props: HighchartsReact.Props) {
  const { searched, search, temperatureUnit, convertFahrenheitToCelsius } = useWeather()

  const options = {
    title: {
      text: '',
    },
    chart: {
      backgroundColor: "#232229",
    },
    series: [{
      name: 'Daily evolution',
      data: initData()
    }],
    tooltip: {
      valueSuffix: '°',
      xDateFormat: '%d-%m-%Y %H:%M',
      pointFormat: 'Temperature: <b>{point.y}</b>',
    },
    plotOptions: {
      line: {
        color: "#f48403",
        series: {
          lineWidth: 10
        },
        marker: {
          enabled: true,
        },
      }
    },
    legend: {
      enabled: false
    },
    xAxis: {
      categories: formatHours(),
      lineColor: "#fff",
      labels: {
        style: {
          color: "#fff",
        },
      },
      plotLines: [
        {
          color: "#f48403",
          width: 2,
          value: 125,
        },
      ],
      lineWidth: 2,
      title: {
        margin: 40,
        text: 'Hours',
        style: {
          color: "#fff",
        },
      },
    },
    yAxis: {
      labels: {
        style: {
          color: "#fff",
        },
      },
      lineColor: "#fff",
      lineWidth: 2,
      title: {
        margin: 40,
        text: 'Temperature',
        style: {
          color: "#fff",
        },
      },
    },
  }

  function initData() {
    const formatDate = formatHours()
    const transformedArray = formatDate.map((date, dateIndex) => {
      const temperatureValue = temperatureUnit == "F"
        ? search.DailyEvolution[dateIndex].Temperature.Value
        : convertFahrenheitToCelsius(search.DailyEvolution[dateIndex].Temperature.Value)
      return [
        date,
        temperatureValue
      ]
    })
    return transformedArray
  }

  function formatHours() {
    return search.DailyEvolution.map(day => {
      const newDate = new Date(day.DateTime)
      const hours = ('0' + newDate.getHours()).slice(-2) // Get hours and pad with 0 if needed
      const minutes = ('0' + newDate.getMinutes()).slice(-2) // Get minutes and pad with 0 if needed
      const formattedDateTime = hours + ':' + minutes
      return formattedDateTime
    })
  }

  return (
    searched && <StyledDiv>
      <Text
        text='DAILY EVOLUTION'
        variant='large'
        fontWeight={700}
      />
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
        {...props}
      />
    </StyledDiv>
  )
}
