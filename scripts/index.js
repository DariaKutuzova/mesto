let openPopupButton = document.querySelector('.profile__edit-button');
let closePopupButton = document.querySelector('.popup__close');
let submitPopupButton = document.querySelector ('.popup__form-save');
let popup = document.querySelector('.popup');
let formElement = document.querySelector('.popup__container');
let nameInput = document.querySelector('.popup__input-name');
let jobInput = document.querySelector('.popup__input-job');
let pageName = document.querySelector('.profile__name');
let pageJob = document.querySelector('.profile__description');

function togglePopup() {
  if (!popup.classList.contains('popup_opened')) {
    nameInput.value = pageName.textContent;
    jobInput.value = pageJob.textContent;
  }
  popup.classList.toggle('popup_opened');
}

openPopupButton.addEventListener('click', togglePopup);

closePopupButton.addEventListener('click', togglePopup);
document.querySelector('.popup__container').addEventListener('click', function(event) {event.stopPropagation();
});

function formSubmitHandler (evt) {
  evt.preventDefault();
  pageName.textContent = nameInput.value;
  pageJob.textContent = jobInput.value;
  togglePopup();
}

formElement.addEventListener ('submit', formSubmitHandler);

