import 'regenerator-runtime';
import '../styles/main.css';
import DATA from '../DATA.json';

console.log(DATA);

const menu = document.querySelector('#menu_toggle');
const hero = document.querySelector('.hero');
const main = document.querySelector('main');
const drawer = document.querySelector('#drawer');

menu.addEventListener('click', function(event) {
    drawer.classList.toggle('open');
    event.stopPropagation();
});
hero.addEventListener('click', function() {
    drawer.classList.remove('open');
});
main.addEventListener('click', function() {
    drawer.classList.remove('open');
});
function getRestaurants(data) {
    let restoHTML = '';

    data.restaurants.forEach((resto, i) => {
        restoHTML += `
        <article class="list-item">
            <div class="list-thumbnail">
                <img class="list-item__thumbnail" src="${resto.pictureId}" alt="${resto.name}">
                <p class="list-city">${resto.city}</p>
            </div>
            <div class="list-item__content">
                <p>Rating <i title="ratings" class="fa fa-star card-rating"></i> ${resto.rating}</p>
                <h2><a href="#">${resto.name}</a></h2>
                <p class="list-item__description">${resto.description.slice(0, 150)}...</p>
            </div>
        </article>
      `;
    });
    document.getElementById('lists').innerHTML = restoHTML;
}
getRestaurants(DATA);