/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const remove = document.querySelectorAll('.promo__adv img');

remove.forEach(element => {
    element.remove();
});

const ulala = document.querySelector('.promo__genre');

ulala.textContent = 'drama';

const tral = document.querySelector('.promo__bg');

tral.style.backgroundImage = 'url("img/bg.jpeg")';

movieDB.movies.sort();

const movies1 = document.querySelector('.promo__interactive-list');

movies1.innerHTML = '';

movieDB.movies.forEach((film, i) => {
    movies1.innerHTML += `
    <li class="promo__interactive-item">${i + 1} ${film}
    <div class="delete"></div>
     </li>`;
});