const weekday = document.querySelector('.weekday');
const month = document.querySelector('.month');
const personWork = document.querySelector('.personWork');

Date.prototype.daysInMonth = function () {
    return 32 - new Date(this.getFullYear(), this.getMonth(), 32).getDate();
};

const dateToday = new Date();

const today = new Date().daysInMonth();

// let deadLine = new Date('2022-07-30T20:00:00');

const createMonthElement = (box, element, soText, soClass) => { //функция принимет: элемент, родителя, текст, класс
    const newElement = document.createElement(box);       // создаем элемент
    element.appendChild(newElement);                     // присваиваем созданный выше элемент родителю
    newElement.classList.add(soClass);                  // присваиваем созданному элементу div класс
    newElement.innerHTML = soText;                     // присваиваем созданному элементу текст
};


const dayWeek = [
    {
        className: 'week',
        text: 'ПН'
    },
    {
        className: 'week',
        text: 'ВТ'
    },
    {
        className: 'week',
        text: 'СР'
    },
    {
        className: 'week',
        text: 'ЧТ'
    },
    {
        className: 'week',
        text: 'ПТ'
    },
    {
        className: 'week',
        text: 'СБ'
    },
    {
        className: 'week',
        text: 'ВС'
    },
].forEach((item) => createMonthElement('div', weekday, item.text, item.className)); // перебираем массив с днями недели, на каждом элементе используем функцию createMonthElement

const minDay = []; // массив на 30 дней

for (i = 1; i <= 30; i++) {
    minDay.push(i);
};

const maxDay = []; // массив на 31 день

for (i = 1; i <= 31; i++) {
    maxDay.push(i);
};

const febDay = []; // массив на 28 дней

for (i = 1; i <= 28; i++) {
    febDay.push(i);
};

// функция перерисовки календаря на 30 дней
function slideDays() {
    const childElem = document.querySelectorAll('.day')
    childElem.forEach(item => { item.remove() });
    minDay.forEach(item => { createMonthElement('div', month, item, 'day') });
};

// функция перерисовки календаря на 31 день
function slideDaysTwo() {
    const childElem = document.querySelectorAll('.day')
    childElem.forEach(item => { item.remove() });
    maxDay.forEach(item => { createMonthElement('div', month, item, 'day') });
};


// функция перерисовки календаря на 28 дней
function slideDaysFeb() {
    const childElem = document.querySelectorAll('.day')
    childElem.forEach(item => { item.remove() });
    febDay.forEach(item => { createMonthElement('div', month, item, 'day') });
};


// условие срабатывания функций отрисовки количества дней календаря
if (today == 31) {
    slideDaysTwo();
} else if (today == 30) {
    slideDays();
} else if ((today == 29) | (today == 28)) {
    slideDaysFeb();
};

// обекты с пользователями
const person1 =
{
    name: 'Сверчков А.А.',
    id: 'person1',
    // name: 'Пользователь1',
    day: [18, 22, 26, 30],
    night: [19, 23, 27, 31],
    dayNext: [18, 22, 26, 30],
    nightNext: [19, 23, 27, 31]
};
const person2 =
{
    name: 'Руф Э.А.',
    id: 'person2',
    // name: 'Пользователь2',
    day: [2, 7, 11, 15, 20, 24],
    night: [3, 8, 12, 16, 21, 25],
    dayNext: [4, 9, 13, 17, 22, 26, 29],
    nightNext: [1, 5, 10, 14, 18, 23, 27, 30]
};
const person3 =
{
    name: 'Беляев Д.В.',
    id: 'person3',
    // name: 'Пользователь3',
    day: [1, 6, 10, 16, 19, 23, 27, 31],
    night: [2, 7, 11, 17, 20, 24, 28],
    dayNext: [4, 9, 13, 17, 22, 26, 29],
    nightNext: [1, 5, 10, 14, 18, 23, 27, 30]
};
const person4 =
{
    name: 'Сушков Ю.В.',
    id: 'person4',
    // name: 'Пользователь4',
    day: [4, 8, 13, 17, 21, 25, 29],
    night: [1, 5, 9, 14, 18, 22, 26, 30],
    dayNext: [4, 9, 13, 17, 22, 26, 29],
    nightNext: [1, 5, 10, 14, 18, 23, 27, 30]
};
const person5 =
{
    name: 'Поддубный С.А.',
    id: 'person5',
    // name: 'Пользователь5',
    day: [5, 8, 12],
    night: [6, 9, 13],
    dayNext: [4, 9, 13, 17, 22, 26, 29],
    nightNext: [1, 5, 10, 14, 18, 23, 27, 30]
};
const person6 =
{
    name: 'Готовцев А.Ю.',
    id: 'person6',
    // name: 'Пользователь6',
    day: [3, 9, 14, 20, 24, 28, 30],
    night: [4, 10, 15, 21, 25, 29],
    dayNext: [4, 9, 13, 17, 22, 26, 29],
    nightNext: [1, 5, 10, 14, 18, 23, 27, 30]
};
const person7 =
{
    name: 'Осовский А.И.',
    id: 'person7',
    // name: 'Пользователь7',
    day: [1, 5, 10, 14, 18],
    night: [2, 6, 11, 15, 19],
    dayNext: [4, 9, 13, 17, 22, 26, 29],
    nightNext: [1, 5, 10, 14, 18, 23, 27, 30]
};
const person8 =
{
    name: 'Бураков П.В.',
    id: 'person8',
    // name: 'Пользователь8',
    day: [3, 7, 11, 15, 19, 23, 27, 30],
    night: [4, 8, 12, 16, 20, 24, 28, 31],
    dayNext: [4, 9, 13, 17, 22, 26, 29],
    nightNext: [1, 5, 10, 14, 18, 23, 27, 30]
};
const person9 =
{
    name: 'Станчев С.С.',
    id: 'person9',
    // name: 'Пользователь9',
    day: [2, 6, 12, 16, 21, 25, 28],
    night: [3, 7, 13, 17, 22, 26, 29],
    dayNext: [4, 9, 13, 17, 22, 26, 29],
    nightNext: [1, 5, 10, 14, 18, 23, 27, 30]
};
const person10 =
{
    name: 'Попов М.С.',
    id: 'person10',
    // name: 'Пользователь10',
    day: [4, 9, 13, 17, 22, 26, 29],
    night: [1, 5, 10, 14, 18, 23, 27, 30],
    dayNext: [4, 9, 13, 17, 22, 26, 29],
    nightNext: [1, 5, 10, 14, 18, 23, 27, 30]
};

//получаем пользователя из LocalStorage
const user = JSON.parse(localStorage.getItem('person'));
// const user = person1;

// определяем следующий рабочий день, с условием смены в этом или след. месяце
const workNextDay = (person) => {
    if (dateToday.getDate() < today) {
        const arr12 = person.day.concat(person.night);
        arr12.sort(function (a, b) {
            return a - b;
        });

        const arr34 = [];
        const arr56 = [];
        const arr78 = [];

        arr12.forEach(item => { arr34.push(new Date(dateToday.getFullYear(), dateToday.getMonth(), item)) });
        arr34.forEach(item => {
            if (dateToday < item) {
                arr56.push(item);
            }
        });
        deadLine = arr56[0];

        person.day.forEach(item => {
            if (item == deadLine.getDate()) {
                arr78.push(item);
            }
        });

        if (arr78.length > 0) {
            deadLine.setHours(08);
        } else {deadLine.setHours(20);}

    } else {
        const arr12 = person.dayNext.concat(person.nightNext);
        arr12.sort(function (a, b) {
            return a - b;
        });

        const arr34 = [];
        const arr56 = [];
        const arr78 = [];

        arr12.forEach(item => {
            arr34.push(new Date(dateToday.getFullYear(), dateToday.getMonth() + 1, item))
        });

        arr34.forEach(item => {
            if (dateToday < item) {
                arr56.push(item);
            }
        });

        deadLine = arr56[0];

        person.dayNext.forEach(item => {
            if (item == deadLine.getDate()) {
                arr78.push(item);
            }
        });

        if (arr78.length > 0) {
            deadLine.setHours(08);
        } else {deadLine.setHours(20);}
    };

};

let getTimeRemaining = (endTime) => {

    let t = Date.parse(endTime) - Date.parse(new Date());
    let second = Math.floor((t / 1000) % 60);
    let minutes = Math.floor((t / 1000 / 60) % 60);
    let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    let days = Math.floor((t / (1000 * 60 * 60 * 24)));
    return {
        total: t,
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: second,
    };
};

// отображение отсчёта до "дедлайна"
let initializeClock = (classNameClock, endTime) => {
    let clock = document.querySelector(classNameClock);
    let updateClock = () => {
        let t = getTimeRemaining(endTime);
        clock.innerHTML = `Наступит через ${t.days} д. ${t.hours}:${('0' + t.minutes).slice(-2)}:${('0' + t.seconds).slice(-2)}`;
    };
    updateClock();
    setInterval(updateClock, 1000);
};

const graficFunc = (person) => {
    const personChild = document.querySelectorAll('.wday');
    const dayElem = document.querySelectorAll('.day');
    personChild.forEach(item => { item.classList.remove('wday') });
    person.day.forEach(item => {
        if (item <= dayElem.length) {
            dayElem[item - 1].classList.add('wday');
        } else { }
    });
    const personChilds = document.querySelectorAll('.night');
    personChilds.forEach(item => { item.classList.remove('night') });
    person.night.forEach(item => {
        if (item <= dayElem.length) {
            dayElem[item - 1].classList.add('night');
        } else { }
        return graficFunc;
    });
};

graficFunc(user);
workNextDay(user);
initializeClock('.clockdiv', deadLine);

const persons = [person1, person2, person3, person4, person5, person6, person7, person8, person9, person10];

const arrPersonId = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
    { id: 9 },
    { id: 10 },
    { id: 11 },
    { id: 12 },
    { id: 13 },
    { id: 14 },
    { id: 15 },
    { id: 16 },
    { id: 17 },
    { id: 18 },
    { id: 19 },
    { id: 20 },
    { id: 21 },
    { id: 22 },
    { id: 23 },
    { id: 24 },
    { id: 25 },
    { id: 26 },
    { id: 27 },
    { id: 28 },
    { id: 29 },
    { id: 30 },
    { id: 31 },
];

const innerNameDay = (person) => {
    person.day.forEach(item => {
        if (arrPersonId[item - 1].hasOwnProperty('firstNameDay')) {
            arrPersonId[item - 1].lastNameDay = person.name;
        } else {
            arrPersonId[item - 1].firstNameDay = person.name;
        }
    });
};

const innerNameNight = (person) => {
    person.night.forEach(item => {
        if (arrPersonId[item - 1].hasOwnProperty('firstNameNight')) {
            arrPersonId[item - 1].lastNameNight = person.name;
        } else {
            arrPersonId[item - 1].firstNameNight = person.name;
        }
    });
};

persons.forEach(item => { innerNameDay(item) });
persons.forEach(item => { innerNameNight(item) });

console.log(arrPersonId);

// innerNameDay(user);
// innerNameNight(user);

const dayPerson = document.querySelectorAll('.day');

dayPerson.forEach((item, index) => item.addEventListener('click', function () {
    const elem = document.querySelectorAll('.personDown');
    elem.forEach(item => { item.remove() });
    createMonthElement('div', personWork, `В день ${arrPersonId[index].firstNameDay} ${arrPersonId[index].lastNameDay}`, 'personDown');
    createMonthElement('div', personWork, `В ночь ${arrPersonId[index].firstNameNight} ${arrPersonId[index].lastNameNight}`, 'personDown');
}));