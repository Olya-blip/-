const burgerBtn = document.getElementById('burger');
const closeBtn = document.getElementById('close');
const buttons = document.querySelectorAll('.plus');

burgerBtn.onclick = function () {
    const menu = document.getElementById('menu-big');

    if (menu) {
        menu.style.display = 'flex';
    }
}

closeBtn.onclick = function () {
    const menu = document.getElementById('menu-big');

    if (menu) {
        menu.style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.plus');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const question = button.closest('.question');
            const answer = question.querySelector('.answer');

            question.classList.toggle('active');

            if (answer.style.display === 'block') {
                answer.style.display = 'none';
            } else {
                answer.style.display = 'block';
            }

            button.classList.toggle('active');
        });
    });
});