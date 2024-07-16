import React, { useState, useEffect } from 'react'
import { useWeather } from '@/context'
import useDebounce from '@/customHooks/useDebounce'
import { getCitiesAutocomplete, get5DayByKey, get12hourByKey } from '@/utils'

interface Suggestion {
  key: string;
  label: string;
}

const Autocomplete: React.FC = () => {
  const [query, setQuery] = useState('');
  const [filteredSuggestions, setFilteredSuggestions] = useState<Suggestion[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const { setSearched, setSearch, convertFahrenheitToCelsius } = useWeather()
  const debouncedSearchTerm = useDebounce(query, 500)

  async function fetchDebounce(debounce: string) {
    const autocompleteSuggestions = await getCitiesAutocomplete(debounce)
    const citySuggestions = autocompleteSuggestions.map((option: any) => ({
      label: `${option.LocalizedName}, ${option.Country.ID}`,
      key: option.Key,
    }))
    const filtered = citySuggestions.filter((suggestion) =>
      suggestion.label.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredSuggestions(filtered);
  }

  useEffect(() => {
    if (debouncedSearchTerm) {
      fetchDebounce(debouncedSearchTerm)
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  }, [debouncedSearchTerm])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleClick = async (suggestion: Suggestion) => {
    setShowSuggestions(false);
    setSearched(true);

    try {
      const forecastInfo = await get5DayByKey(suggestion.key)
      const dailyEvolution = await get12hourByKey(suggestion.key)

      setSearch({
        CityAndCountryName: suggestion.label,
        CurrentWeatherFahrenheit: dailyEvolution[0].Temperature.Value,
        CurrentWeatherCelsius: convertFahrenheitToCelsius(dailyEvolution[0].Temperature.Value),
        CurrentWeekDay: dailyEvolution[0].DateTime,
        CurrentDayDescription: dailyEvolution[0].IconPhrase,
        FiveDayForecast: forecastInfo.DailyForecasts,
        DailyEvolution: dailyEvolution,
      })
    } catch (error) {
      console.error(error)
      throw error
    }
  };

  return (
    <div className="relative w-full max-w-md mx-auto">
      <input
        type="text"
        className="w-full p-2 border border-black rounded-md"
        onChange={handleChange}
        onFocus={() => setShowSuggestions(true)}
        value={query}
      />
      {showSuggestions && query && (
        <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-md mt-1">
          {filteredSuggestions.length ? (
            filteredSuggestions.map((suggestion, index) => (
              <li
                key={suggestion.key}
                className={`p-2 cursor-pointer`}
                onClick={() => handleClick(suggestion)}
              >
                {suggestion.label}
              </li>
            ))
          ) : (
            <li className="p-2">No suggestions</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default Autocomplete;
