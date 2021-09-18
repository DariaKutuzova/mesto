//Функция смены цвета рамки и показа ошибки невалидного поля
function showInputError(formInput, validationMessage, inputError, inputErrorClass, errorClass) {
  formInput.classList.add(inputErrorClass);
  inputError.textContent = validationMessage;
  inputError.classList.add(errorClass);
}

//Функция снятия смены цвета рамки  и показа ошибки  невалидного поля
function hideInputError(formInput, inputErrorClass, inputError, errorClass) {
  formInput.classList.remove(inputErrorClass);
  inputError.classList.remove(errorClass);
  inputError.textContent = '';
}

//Функция проверки на валидность одного поля в конкретной форме
function verifyValid(formElement, formInput, inputErrorClass, errorClass) {
  const inputError = formElement.querySelector(`#${formInput.id}-error`);
  if (!formInput.validity.valid) {
    showInputError(formInput, formInput.validationMessage, inputError, inputErrorClass, errorClass);
  } else {
    hideInputError(formInput, inputErrorClass, inputError, errorClass);
  }
}

//Навешиваем обработчик всем полям внутри формы
function setEventListeners(formElement, inputErrorClass, errorClass, inputSelector, submitButtonSelector, inactiveButtonClass) {
  const inputList = Array.from(formElement.querySelectorAll(inputSelector));

  toggleButtonState(inputList, formElement, inactiveButtonClass, submitButtonSelector);
  
  inputList.forEach((formInput) => {
    formInput.addEventListener('input', () => {
      verifyValid(formElement, formInput, inputErrorClass, errorClass);
      toggleButtonState(inputList, formElement, inactiveButtonClass,submitButtonSelector);
    });
  });
}

//Вставляем функцию обработчика всех полей на все формы на странице
function enableValidation(config) {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((formElement) => {
    setEventListeners(formElement, config.inputErrorClass, config.errorClass, config.inputSelector, config.submitButtonSelector, config.inactiveButtonClass);
  });
}
//Функция проверки, что все поля заполнены правильно
function hasInvalidInput(inputList) {
  return inputList.some((formInput) => {
    return !formInput.validity.valid;
  });
}

function hasNotInputValues(inputList) {
  return inputList.every((formInput) => {
    return formInput.value.length===0;
  });
}

//Выключение кнопки
function disabledSubmitButton(buttonElement, inactiveButtonClass) {
  buttonElement.classList.add(inactiveButtonClass);
  buttonElement.setAttribute('disabled', true);
}

//Включение кнопки
function enabledSubmitButton(buttonElement, inactiveButtonClass) {
  buttonElement.classList.remove(inactiveButtonClass);
  buttonElement.removeAttribute('disabled');
}

//Функция переключения кнопки
function toggleButtonState(inputList, formElement, inactiveButtonClass, submitButtonSelector) {
  const buttonElement = formElement.querySelector(submitButtonSelector);
  if (hasInvalidInput(inputList) || hasNotInputValues(inputList)) {
    disabledSubmitButton(buttonElement, inactiveButtonClass);
  } else {
    enabledSubmitButton(buttonElement, inactiveButtonClass)
  }
}

//Вызов функции отслеживаниявалидации всех полей
enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
}); 