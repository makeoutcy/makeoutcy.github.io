const overlay = document.querySelector('.loadIn');
const html = document.querySelector('html');

html.style.overflow = 'hidden'; 
overlay.style.transition = 'opacity cubic-bezier(0.4, 0, 0.2, 1) 2s';

setTimeout(() => {
    overlay.style.opacity = '0';

    setTimeout(() => {
        html.style.overflow = 'unset';
        overlay.remove();
    }, 1500);
}, 2500);