// Объявляем переменные
let openPopupButton = document.querySelector('.profile__edit-button');
let closePopupButton = document.querySelector('.popup__close');
let popup = document.querySelector('.popup');
let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__input_value_name');
let jobInput = document.querySelector('.popup__input_value_job');
let pageName = document.querySelector('.profile__name');
let pageJob = document.querySelector('.profile__description');

// Функция подтягивания значений со страницы в форму при открытии
function valuePopup() {
    nameInput.value = pageName.textContent;
    jobInput.value = pageJob.textContent;
  }

// Функция открытия/закрытия попапа
function openClose() {
  popup.classList.toggle('popup_opened');
}

function togglePopup() {
  openClose();
  valuePopup()
}

// Функция присвоения значений из формы на страницу и закрытие попапа
function formSubmitHandler(evt) {
  evt.preventDefault();
  pageName.textContent = nameInput.value;
  pageJob.textContent = jobInput.value;
  openClose();
}

// Вызываем функцию присвоения по клику на "Сохранить"
formElement.addEventListener('submit', formSubmitHandler);
// Вызываем функцию открытия попапа по клику
openPopupButton.addEventListener('click', togglePopup);
// Вызываем закрытие попапа по клику
closePopupButton.addEventListener('click', openClose);