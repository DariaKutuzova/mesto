import Popup from "./Popup.js";
export default class PopupWithForm extends Popup{
    constructor(popupSelector, {callbackSubmit}) {
        super(popupSelector);
        this._callbackSubmit = callbackSubmit;
        this._popup = document.querySelector(this._popupSelector);
        this._form = this._popup.querySelector('.popup__form');

    }

    setEventListeners() {
        this._form.addEventListener('submit', this._submitEvtHandler);
        super.setEventListeners();
    }

    _getInputValues() {
        this._inputs = Array.from(this._form.querySelectorAll('.popup__input'));

        const formValues = {};
        this._inputs.forEach((input) => {
            formValues[input.name] = input.value;
        });
        return formValues;

    }

    _submitEvtHandler(evt) {
        evt.preventDefault();
        this._callbackSubmit(this._getInputValues());
        this.close();
    }

    close(){
        super.close()
        //Сбрасываем форму
        this._form.reset();
    }
}