console.log("Updated 1902")

var listen_button = document.querySelector(".listen-button");
var close_button = document.querySelector(".close-button");
var screen = document.querySelector(".links-pop-up");

screen.style.transition = 'opacity 0.3s ease'; // 'opacity duration timing-function'
screen.style.opacity = 0;

listen_button.addEventListener('click', function() {
    screen.style.display = "flex";
    setTimeout(function() {
        screen.style.opacity = 1;
    }, 10);
});

close_button.addEventListener('click', function() {
    screen.style.opacity = 0;
    setTimeout(function() {
        screen.style.display = "none";
    }, 300);
});