var items = document.querySelectorAll('.dish-type__item');

for (var i = 0; i < items.length; i++) {
  items[i].onmouseenter = addHighlight;
  items[i].onmouseleave = removeHighlight;
}

function addHighlight() {
  this.style.backgroundColor = 'rgba(200, 159, 45, 0.1)';
}

function removeHighlight() {
  this.removeAttribute('style');
}
