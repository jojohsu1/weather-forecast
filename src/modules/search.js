import { setCurrentWeather } from './current'
import { setMultiWeather } from './multi'
import { fahToKel } from '../utils/utils'

let address = 'Taipei'

//cache DOM
const $searchCity = document.querySelector('.search__city')
const $searchForm = document.querySelector('.search__form')
const $searchInput = document.querySelector('.search__input')
const $spinnerWrapper = document.querySelector('.spinner-wrapper')
const GEOCODE_KEY = 'AIzaSyBFuo4VL9eHTzMNYhERbKS62yhOzmsxmnc';
const DARK_SKY_KEY = '7850635849bec4754779d82cef036fed';
const CORS = 'https://cors-anywhere.herokuapp.com';

export const initializeSearch = _ => {
    searchEvent()
    updateWeatherData(address)
}

const searchEvent = event => {
    $searchForm.addEventListener('submit', event => {
        event.preventDefault()
        $searchInput.classList.toggle('search__input--open')
        $searchInput.focus()
        if ($searchInput.value === '') return
        address = $searchInput.value
        $searchInput.value = ''
        renderSearch()
        updateWeatherData(address)
    })
}

const updateWeatherData = async query => {
    if ($spinnerWrapper) $spinnerWrapper.classList.toggle("spinner-wrapper--active")
    const { lat, lng } = await getLatLng(query)
    const weatherData = await getWeatherData(lat, lng)
    if ($spinnerWrapper) $spinnerWrapper.classList.toggle("spinner-wrapper--active")
    const weatherCurrent = weatherData.currently
    weatherCurrent.temperature = fahToKel(weatherCurrent.temperature)
    setCurrentWeather(weatherCurrent)
    const weatherMulti = weatherData.daily.data.map(elem => {
        elem.temperatureHigh = fahToKel(elem.temperatureHigh)
        elem.temperatureLow = fahToKel(elem.temperatureLow)
        return elem
    })
    weatherMulti[0].temperature = weatherCurrent.temperature
    weatherMulti[0].summary = weatherCurrent.summary
    setMultiWeather(weatherMulti)
}

const getWeatherData = async(lat, lng) => {
    let reqLink = `${CORS}/https://api.darksky.net/forecast/${DARK_SKY_KEY}/${lat},${lng}`
    let fetchData = await fetch(reqLink)
    let parsed = await fetchData.json()
    return parsed
}

const getLatLng = async query => {
    let reqLink = `https://maps.googleapis.com/maps/api/geocode/json?address=${query}&key=${GEOCODE_KEY}`;
    let fetchData = await fetch(reqLink)
    let parsed = await fetchData.json()
    let parsedData = parsed.results[0]
    let latLng = {
        lat: parsedData.geometry.location.lat,
        lng: parsedData.geometry.location.lng
    }
    return latLng
}

const renderSearch = _ => {
    $searchCity.innerHTML = address
}