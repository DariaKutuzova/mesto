import Popup from "./Popup.js";
export default class PopupWithImage extends Popup{
    constructor(popupSelector, data) {
        super(popupSelector);
        this._data = data;
    }
    open() {
        this._popup = document.querySelector(this._popupSelector);
        this._popup.querySelector('.popup__image').src = this._data.src;
        this._popup.querySelector('.popup__image-title').alt = this._data.name;
        this._popup.querySelector('.popup__image-title').textContent = this._data.name;
        super.open();
    }
}