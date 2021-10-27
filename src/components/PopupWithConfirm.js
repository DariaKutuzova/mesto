import Popup from "./Popup.js";
export default class PopupWithConfirm extends Popup{
    constructor(popupSelector, {submit}) {
        super(popupSelector);
        this._submit = submit;
        this._form = this._popup.querySelector('.popup__form');
        this._submitEvtHandler = this._submitEvtHandler.bind(this);
        this._submitButton = this._form.querySelector('.popup__button');
        this._valueSubmitButton = this._submitButton.textContent;
        // this._data = data;

    }

    setEventListeners() {
        this._form.addEventListener('submit', this._submitEvtHandler);
        super.setEventListeners();
    }

//События при сабмите
    _submitEvtHandler(evt) {
        evt.preventDefault();
        this._submit(this._data);
        this._form.removeEventListener('submit', this._submitEvtHandler);
        this.close();
    }
    //Изменение кнопки при сохранении данных
    loading(isLoading){
        if (isLoading) {
            this._submitButton.textContent = 'Удаление...';
        } else {
            this._submitButton.textContent = this._valueSubmitButton;
        }

    }
    open(data) {
        this._data = data;
        super.open();
    }

    // setSubmit(submit) {
    //     this._handleSubmitCallback = submit;
    // }
}