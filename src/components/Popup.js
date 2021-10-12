export default class Popup{
    constructor(popupSelector) {
        this._popupSelector = popupSelector;
        this._popup = document.querySelector(this._popupSelector);
        this._handleClickClose = this._handleClickClose.bind(this);
        this._handleEscClose = this._handleEscClose.bind(this);
    }
//Закрытие по крестику и оверлею
    _handleClickClose(evt) {
        if (evt.target.classList.contains('popup_opened')) {
            this.close()
        }
        if (evt.target.classList.contains('popup__close')) {
            this.close()
        }
    }
    //Закрытие по esc
    _handleEscClose(evt) {
        if (evt.key === 'Escape') {
            this.close();
        }
    }

    open() {
        this._popup.classList.add('popup_opened');
        //Закрытие попапа на esc
        document.addEventListener('keydown', this._handleEscClose);
    }

    close() {
        this._popup.classList.remove('popup_opened');
        //Снимаем обработчики
        document.removeEventListener('keydown', this._handleEscClose);
    }

    setEventListeners(){
        //Закрытие попапа по оверлею и по крестику
        this._popup.addEventListener('click', this._handleClickClose)
    }
}