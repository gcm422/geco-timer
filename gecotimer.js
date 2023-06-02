// JavaScript source code
let pagina1, pagina2;
pagina1 = "http://example1.com";
pagina2 = "http://example2.com";
var p = window.location.href;
setInterval(function () {
    if (window.location.href == pagina1) {
        window.location = pagina2;
    } else {
         window.location = pagina1;
    }
}, 3500);
