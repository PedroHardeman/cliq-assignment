import React, {
  createContext,
  FC,
  ReactNode,
  useState,
  useContext,
} from 'react'
import { Weather, WeatherContextType } from './interfaces'

const WeatherContext = createContext<WeatherContextType | undefined>(undefined)

const WeatherContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [searched, setSearched] = useState<boolean>(false)
  const [temperatureUnit, setTemperatureUnit] = useState<string>('F')
  const [search, setSearch] = useState<Weather>({
    CityAndCountryName: '',
    CurrentWeatherFahrenheit: 0,
    CurrentWeatherCelsius: 0,
    CurrentWeekDay: '',
    CurrentDayDescription: '',
    FiveDayForecast: [],
    DailyEvolution: [],
  })

  const convertFahrenheitToCelsius = (fahrenheit: number): number => {
    const celsius = ((fahrenheit - 32) * 5) / 9;
    const rounded = (Math.round(celsius * 100) / 100).toFixed(1);
    return parseFloat(rounded)
  };

  return (
    <WeatherContext.Provider
      value={{
        search,
        setSearch,
        temperatureUnit,
        setTemperatureUnit,
        convertFahrenheitToCelsius,
        searched,
        setSearched
      }}
    >
      {children}
    </WeatherContext.Provider>
  )
}

const useWeather = () => {
  const context = useContext(WeatherContext)
  if (context === undefined) {
    throw new Error('useWeather must be used within an WeatherContextProvider')
  }
  return context;
}

export { WeatherContextProvider, useWeather }
