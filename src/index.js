import './style.css';
//Importar imagen del logo
import logoSrc from './img/hot-dog-logo.png';

const logoDiv = document.getElementById('logo');

// Crea un elemento de la imagen
const logoImg = document.createElement('img');
logoImg.src = logoSrc;
logoImg.alt = 'Logo Restaurant';
logoImg.classList.add('logo-img');

logoDiv.appendChild(logoImg);