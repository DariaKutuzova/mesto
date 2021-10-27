import Popup from "./Popup.js";
export default class PopupWithForm extends Popup{
    constructor(popupSelector, {submit}) {
        super(popupSelector);
        this._submit = submit;
        this._form = this._popup.querySelector('.popup__form');
        this._submitEvtHandler = this._submitEvtHandler.bind(this);
        this._submitButton = this._form.querySelector('.popup__button');
        this._valueSubmitButton = this._submitButton.textContent;
        this._inputs = Array.from(this._form.querySelectorAll('.popup__input'));
    }

    setEventListeners() {
        this._form.addEventListener('submit', this._submitEvtHandler);
        super.setEventListeners();
    }
//Собирает данные из инпутов
    _getInputValues() {
        const formValues = {};
        this._inputs.forEach((input) => {
            formValues[input.name] = input.value;
        });
        return formValues;
    }
//События при сабмите
    _submitEvtHandler(evt) {
        evt.preventDefault();
        this._submit(this._getInputValues());
        this.close();
    }
    //Изменение кнопки при сохранении данных
    loading(isLoading){
        if (isLoading) {
            this._submitButton.textContent = 'Сохранение...';
        } else {
            this._submitButton.textContent = this._valueSubmitButton;
        }

    }

    close(){
        super.close()
        //Сбрасываем форму
        this._form.reset();
    }
}