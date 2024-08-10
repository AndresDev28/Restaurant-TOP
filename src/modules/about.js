export function loadAbout () {
  const content = document.getElementById('content');
  content.innerHTML = "";

  const aboutText = document.createElement('p');
  aboutText.textContent = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium quos perferendis natus perspiciatis aspernatur commodi? Rem laborum eius dignissimos! Voluptates delectus laborum eius velit vel explicabo ducimus ullam minus. Eius."
  aboutText.classList.add('about-paragraph');

  content.appendChild(aboutText);
}