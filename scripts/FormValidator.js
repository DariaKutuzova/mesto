export default class FormValidator {
    constructor(configValidation, modal) {
        this._configValidation = configValidation;
        this._formElement = modal;
        this._inputList = Array.from(this._formElement.querySelectorAll(this._configValidation.inputSelector));
        this._submitButton = this._formElement.querySelector(this._configValidation.submitButtonSelector);
    }

    //Функция проверки, что все поля заполнены правильно
    _hasInvalidInput() {
        return this._inputList.some((formInput) => {
            return !formInput.validity.valid;
        });
    }

    _hasNotInputValues() {
        return this._inputList.every((formInput) => {
            return formInput.value.length === 0;
        });
    }

    //Функция смены цвета рамки и показа ошибки невалидного поля
    _showInputError(formInput) {
        this._inputError = this._formElement.querySelector(`#${formInput.id}-error`);
        formInput.classList.add(this._configValidation.inputErrorClass);
        this._inputError.textContent = formInput.validationMessage;
        this._inputError.classList.add(this._configValidation.errorClass);
    }

    //Функция снятия смены цвета рамки  и показа ошибки  невалидного поля
    _hideInputError(formInput) {
        this._inputError = this._formElement.querySelector(`#${formInput.id}-error`);
        formInput.classList.remove(this._configValidation.inputErrorClass);
        this._inputError.classList.remove(this._configValidation.errorClass);
        this._inputError.textContent = '';
    }

    //Функция проверки на валидность одного поля в конкретной форме
    _verifyValid(formInput) {
        this._inputError = this._formElement.querySelector(`#${this._configValidation.inputSelector.id}-error`);
        if (!formInput.validity.valid) {
            this._showInputError(formInput, formInput.validationMessage);
        } else {
            this._hideInputError(formInput);
        }
    }

    //Выключение кнопки
    _disabledSubmitButton() {
        this._submitButton.classList.add(this._configValidation.inactiveButtonClass);
        this._submitButton.setAttribute('disabled', true);
    }

    //Включение кнопки
    _enabledSubmitButton() {
        this._submitButton.classList.remove(this._configValidation.inactiveButtonClass);
        this._submitButton.removeAttribute('disabled');
    }

    //Функция переключения кнопки
    _toggleButtonState() {
        if (this._hasInvalidInput() || this._hasNotInputValues()) {
            this._disabledSubmitButton();
        } else {
            this._enabledSubmitButton()
        }
    }

    //Навешиваем обработчик всем полям внутри формы
    _setEventListeners() {

        this._toggleButtonState();

        this._inputList.forEach((formInput) => {
            formInput.addEventListener('input', () => {
                this._verifyValid(formInput);
                this._toggleButtonState();
            });
        });
    }

    //Вставляем функцию обработчика всех полей на все формы на странице
    enableValidation() {
        this._setEventListeners()
    }
}