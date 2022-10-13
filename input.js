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

const listPerson = document.querySelector('#person');
const button = document.querySelector('.button');
const persons = [person1, person2, person3, person4, person5, person6, person7, person8, person9, person10];

button.onclick = function () {
    let obj = persons.find(item => item.id === listPerson.value);
       localStorage.setItem('person', JSON.stringify(obj));
window.location.href = 'calend.html';
};