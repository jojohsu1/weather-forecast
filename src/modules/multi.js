import { getIcon, toCelFah } from '../utils/utils'
import { setCurrentWeather } from './current';

let weatherList = [];
let unit = 'si';
let selectedIndex = 0;

//cache DOM
const $wlist = document.querySelector('.wlist')

export const multiEvent = _ => {
    $wlist.addEventListener('click', event => {
        let elem = event.target
        if (elem && !elem.matches('.wlist__item')) {
            elem = event.target.parentElement
        }
        let listElemIndex = [...elem.parentElement.children].indexOf(elem)
        selectedIndex = listElemIndex
        renderMulti()
        setCurrentWeather(weatherList[listElemIndex])
    })
}

export const setMultiWeather = newList => {
    weatherList = newList
    renderMulti()
}

export const setMultiUnit = newUnit => {
    unit = newUnit
    renderMulti()
}

const getDayIndex = dayIndex => {
    const days = ["Sun", "Mon", "Tue", "Wen", "Thu", "Fri", "Sat"]
    return days[dayIndex]
}

const renderMulti = _ => {
    let markup = ''
    for (let i = 0; i < 5; i++) {
        const highTemp = weatherList[i].temperatureHigh
        const lowTemp = weatherList[i].temperatureLow
        const dayIndex = new Date(weatherList[i].time * 1000).getDay()
        markup += `
    <div class="wlist__item ${ i === selectedIndex ? 'wlist__item--selected' : '' }">
       <img src="${getIcon(weatherList[i].icon)}" class="wlist__icon">
       <div class="wlist__range">
       ${toCelFah(lowTemp, unit)}/${toCelFah(highTemp, unit)}
       </div>
       <div class="wlist__day">
       ${getDayIndex(dayIndex)}
       </div>
    </div>
    `
        $wlist.innerHTML = markup;
    }
}