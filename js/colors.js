(function() {

var main = document.getElementById('colors');

for (var a = 0; a < 20; a++) {
  for (var b = 1; b < 8; b++) {
    main.innerHTML += '<section class="c' + b + '"></section>';
  }
}

function scrollDown(i) {
  setTimeout(function() {
    window.scrollTo(0, i);
    console.log(i);
  }, i/2);
}


// for (var i = 1; i < 34001; i++) { // Autoscroll
//   scrollDown(i);
// }

}());
