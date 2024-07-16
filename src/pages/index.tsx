
import { WeatherContextProvider } from '../context'
import { PageTitle, Input, CurrentDayWeather, FiveDayWeather, WeatherChart } from '../components'

export default function Home() {
  return (
    <WeatherContextProvider>
      <PageTitle />
      <Input />
      <CurrentDayWeather />
      <FiveDayWeather />
      <WeatherChart />
    </WeatherContextProvider>
  )
}
