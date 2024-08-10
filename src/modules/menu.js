import menuData from '../data/menu.csv';

export function loadMenu () {
  const content = document.getElementById('content');
  content.innerHTML = '';
  const menuList = document.createElement('ul');

  menuData.forEach((item) => {
    const listItem = document.createElement('li');
    listItem.classList.add('dishes');
    listItem.textContent = `${item[0]} - $${item[1]}` // item[0] es el nombre del plato y item[1] es el precio.
    menuList.appendChild(listItem);
  })

  content.appendChild(menuList);
}