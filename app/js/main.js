;(function() {

  var menu = document.querySelector('.menu');


  menu.onclick = function(e) {
    var target = e.target;

    while (target !== this) {
      if (target.classList.contains('dish-type__item')) {
        target.classList.toggle('highlight');
        return;
      }

      target = target.parentNode;
    }

  };

})();
