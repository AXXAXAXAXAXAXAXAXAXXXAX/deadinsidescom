// Получаем ссылки
var openLink = document.getElementById("myOpenLink");
var showLink = document.getElementById("myShowLink");
// Получаем модальное окно
var modal = document.getElementById("myModal");
// Получаем элемент для закрытия модального окна
var closeBtn = modal.querySelector(".closeBtn");

// Функция, которая открывает модальное окно
function openModal() {
    if (!modal.classList.contains("fadeIn")) {
        // проверяем, не открыто ли уже модальное окно
        modal.style.display = "block";
        modal.classList.add("fadeIn");
    }
}

// Привязываем обработчик событий к ссылкам для открытия модального окна
openLink.addEventListener("click", function (event) {
    event.preventDefault();
    openModal();
});

showLink.addEventListener("click", function (event) {
    event.preventDefault();
    openModal();
});

// Функция, которая закрывает модальное окно
function closeModal() {
    if (modal.classList.contains("fadeIn")) {
        modal.classList.remove("fadeIn");
        modal.classList.add("fadeOut");
        modal.addEventListener("animationend", function () {
            modal.classList.remove("fadeOut");
            modal.style.display = "none";
            setTimeout(function () {
                location.reload();
            }, 100); // задержка перед перезагрузкой страницы
        });
    }
}

// Привязываем обработчик событий к элементу закрытия модального окна
closeBtn.addEventListener("click", function (event) {
    event.preventDefault();
    closeModal();
});
