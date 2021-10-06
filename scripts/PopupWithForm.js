import Popup from "./Popup.js";
export default class PopupWithForm extends Popup{
    constructor(popupSelector, callbackSubmit) {
        super(popupSelector);
        this._callbackSubmit = callbackSubmit;

    }

    setEventListeners() {
        this._popup.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._callbackSubmit(this._getInputValues());

            super.setEventListeners();
        })
    }

    _getInputValues() {
        this._inputList = this._popup.querySelectorAll('.popup__input');

        this._formValues = {};
        this._inputList.forEach(input => this._formValues[input.name] = input.value);

        return this._formValues;
    }

    close(){
        super.close()
        //Сбрасываем форму
        this._popup.reset();
    }
}