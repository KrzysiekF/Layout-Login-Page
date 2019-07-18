import Canvas from './Canvas.js';

const checkInputActiveState = (input) => {
    if (input.value) {
        input.parentElement.classList.add('active');
        return;
    } 

    input.parentElement.classList.remove('active');
};

const checkInputFocusState = (input) => {
    input.addEventListener('focus', function() {
        this.parentElement.classList.add('focused');
    });

    input.addEventListener('blur', function() {
        this.parentElement.classList.remove('focused');
    });
};

window.addEventListener('load', () => {
    new Canvas('#bg-anim', '.header');

    const inputs = [...document.querySelectorAll('.form input')];

    inputs.map(input => {
        checkInputFocusState(input);
        checkInputActiveState(input);

        input.addEventListener('keyup', function() {
            checkInputActiveState(this);
        });
    });
});
