var div = document.querySelectorAll('.divhover');

div.forEach((div) =>
  div.addEventListener('click', (event) => {
    div.innerHTML = `Clicado!`
    div.style.backgroundColor = `red`
  })
);

div.forEach((div) =>
  div.addEventListener('mouseenter', (event) => {
    div.style.backgroundColor = `green`
  })
);

div.forEach((div) =>
  div.addEventListener('mouseout', (event) => {
    div.style.backgroundColor = `gray`
  })
);

