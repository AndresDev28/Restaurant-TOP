import './styles/style.css';
import './modules/about.js';
import {loadHome} from './modules/home';
import {loadMenu} from './modules/menu';
import {loadAbout} from './modules/about';

document.getElementById('home').addEventListener('click', loadHome);
document.getElementById('menu').addEventListener('click', loadMenu);
document.getElementById('about').addEventListener('click', loadAbout);


loadHome();
//Importar imagen del logo
import logoSrc from './img/hot-dog-logo.png';

const logoDiv = document.getElementById('logo');

// Crea un elemento de la imagen
const logoImg = document.createElement('img');
logoImg.src = logoSrc;
logoImg.alt = 'Logo Restaurant';
logoImg.classList.add('logo-img');

logoDiv.appendChild(logoImg);