const body = document.getElementById('body');
const slider = document.getElementById('slider');

function ligththeme() {
    body.classList.toggle('ligththeme');
}
slider.addEventListener('click', ligththeme);
