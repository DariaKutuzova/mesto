import Card from "./Card.js";
export default class Popup{
    constructor(popupSelector) {
        this._popup = popupSelector;

    }
    open() {
        this._popup.classList.add('popup_opened');
        //Закрытие попапа на esc
        document.addEventListener('keydown', this._handleEscClose);
    }

    close(evt) {
            if (evt.target.classList.contains('popup_opened')) {
                this.close()
            }
            if (evt.target.classList.contains('popup__close')) {
                this.close()
            }
        //Снимаем обработчики
        document.removeEventListener('keydown', this._handleEscClose);
    }

    _handleEscClose(evt) {
        //Если нажата esc
        if (evt.key === 'Escape') {
            //Закрыть попап
            this._popup.classList.remove('popup_opened');
        }
    }

    setEventListeners(){
        //Закрытие попапа по оверлею и по крестику
        this._popup.addEventListener('click', close)
    }
}