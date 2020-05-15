//cache the DOM
let time = new Date();
let date;

const $date = document.querySelector('.date');

export const setDateEvents = newDate => {

    $date.innerHTML = `${time.getFullYear()} / ${time.getMonth()+1} / ${time.getDate()}`;

};

export const changeDateEvents = newDayIndex => {
    date = newDayIndex;
    $date.innerHTML = `${new Date((newDayIndex).time * 1000).getFullYear()} / ${new Date((newDayIndex).time * 1000).getMonth()+1} / ${new Date((newDayIndex).time * 1000).getDate()}`;
}