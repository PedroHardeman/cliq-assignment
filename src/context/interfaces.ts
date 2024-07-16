export interface Weather {
  CityAndCountryName: string,
  CurrentWeatherFahrenheit: number,
  CurrentWeatherCelsius: number,
  CurrentWeekDay: string,
  CurrentDayDescription: string,
  FiveDayForecast: Array<DailyForecastInterface>,
  DailyEvolution: Array<DailyEvolutionInterface>,
}

export interface WeatherContextType {
  search: Weather,
  setSearch: (name) => void;
  temperatureUnit: string,
  setTemperatureUnit: (unit) => void,
  convertFahrenheitToCelsius: (number) => number,
  searched: boolean,
  setSearched: (bool) => void,
}

export interface DailyForecastInterface {
  Date: string,
  Day: object,
  EpochDate: number,
  Link: string
  MobileLink: string,
  Night: object,
  Sources: Array<string>,
  Temperature: object
}

export interface DailyEvolutionInterface {
  DateTime: string,
  EpochDateTime: number,
  HasPrecipitation: boolean,
  IconPhrase: string,
  IsDaylight: boolean,
  Link: string,
  MobileLink: string,
  PrecipitationProbability: number,
  Temperature: TemperatureInterface,
  WeatherIcon: number
}

export interface TemperatureInterface {
  Unit: string,
  UnitType: number,
  Value: number,
}