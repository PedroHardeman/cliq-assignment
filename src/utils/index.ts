const ACCUWEATHER_API_KEY = 'p0MMqPdxNAA1w6yHTjyGZc07AT8YJLkW'

export const getCitiesAutocomplete = async (city: string) => {
  const response = await fetch(
    `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${ACCUWEATHER_API_KEY}&q=${city}`,
  )
  const jsonData = await response.json()
  return jsonData
}

export const get5DayByKey = async (key: string) => {
  const response = await fetch(
    `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${key}?apikey=${ACCUWEATHER_API_KEY}`,
  )
  const jsonData = await response.json()
  return jsonData
}

export const get12hourByKey = async (key: string) => {
  const response = await fetch(
    `http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/${key}?apikey=${ACCUWEATHER_API_KEY}`,
  )
  const jsonData = await response.json()
  return jsonData
}
