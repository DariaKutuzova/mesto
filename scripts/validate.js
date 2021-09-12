//Объявление переменных


//Функция смены цвета рамки  и показа ошибки невалидного поля
function showInputError(formElement, formInput, errorMessage) {
  const inputError = formElement.querySelector(`.${formInput.id}-error`); 
  formInput.classList.add('popup__input_type_error');
  inputError.textContent = errorMessage;
  inputError.classList.add('popup__input-error_active');
}

//Функция снятия смены цвета рамки  и показа ошибки  невалидного поля
function hideInputError(formElement, formInput) {
  const inputError = formElement.querySelector(`.${formInput.id}-error`);
  formInput.classList.remove('popup__input_type_error');
  inputError.classList.remove('popup__input-error_active');
  inputError.textContent = '';
}
//Функция проверки на валидность одного поля в конкретной форме
function verifyValid(formElement, formInput) {
  if (!formInput.validity.valid) {
    showInputError(formElement, formInput, formInput.validationMessage);
  } else {
    hideInputError(formElement, formInput);
  }
}

//Навешиваем обработчик всем полям внутри формы
function setEventListeners(formElement) {
  const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
  inputList.forEach((formInput) => {
    formInput.addEventListener('input', () => {
      verifyValid(formElement, formInput);
    });
  });
}

//Вставляем функцию обработчика всех полей на все формы на странице
function enableValidation() {
  const formList = Array.from(document.querySelectorAll('.popup__form'));
  formList.forEach((formElement) => {
    setEventListeners(formElement);
  });
}

enableValidation(); 

// enableValidation({
//   formSelector: '.popup__form',
//   inputSelector: '.popup__input',
//   submitButtonSelector: '.popup__button',

//   inputErrorClass: 'popup__input_type_error',
//   errorClass: 'popup__error_visible'
// }); 