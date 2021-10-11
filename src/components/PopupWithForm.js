import Popup from "./Popup.js";
export default class PopupWithForm extends Popup{
    constructor(popupSelector, {submit}) {
        super(popupSelector);
        this._submit = submit;
        this._form = this._popup.querySelector('.popup__form');
        this._submitEvtHandler = this._submitEvtHandler.bind(this);

    }

    setEventListeners() {
        this._form.addEventListener('submit', this._submitEvtHandler);
        super.setEventListeners();
    }
//Собирает данные из инпутов
    _getInputValues() {
        this._inputs = Array.from(this._form.querySelectorAll('.popup__input'));

        const formValues = {};
        this._inputs.forEach((input) => {
            formValues[input.name] = input.value;
        });
        console.log(formValues)
        return formValues;
    }
//События при сабмите
    _submitEvtHandler(evt) {
        evt.preventDefault();
        this._submit(this._getInputValues());
        this.close();
    }

    close(){
        super.close()
        //Сбрасываем форму
        this._form.reset();
    }
}