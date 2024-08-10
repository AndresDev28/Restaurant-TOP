export function loadHome () {
  const content = document.getElementById('content');
  content.innerHTML = ''; // Clean the previos content
  content.classList.add('content')
  const address = document.createElement('p');
  address.textContent = "123 Hotdog Street, Flavor Town";
  address.classList.add('home-address');

  content.appendChild(address);
}