window.onload = function() {
    // 1 Получить элемент по которому мы будем кликать.
const btn = document.querySelector('.menu__bars');

// 2 Получить елемент с классом sidebar
let sidebar = document.querySelector('.sidebar');

// 3 создать function которая будет вызывать события по клику
btn.onclick = () => {
    sidebar.classList.toggle('sidebar__show');
};
};