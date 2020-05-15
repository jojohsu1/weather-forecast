import { setCurrentUnit } from './current';
import { setMultiUnit } from './multi';

//cache DOM
const $celcius = document.querySelector('.units__celcius')
const $fahrenheit = document.querySelector('.units__fahrenheit')

export const unitEvent = _ => {
    $fahrenheit.addEventListener('click', _ => {
        setCurrentUnit('us')
        setMultiUnit('us')
        $fahrenheit.classList.add('units--active')
        $celcius.classList.remove('units--active')
    })
    $celcius.addEventListener('click', _ => {
        setCurrentUnit('si')
        setMultiUnit('si')
        $celcius.classList.add('units--active')
        $fahrenheit.classList.remove('units--active')
    })
}