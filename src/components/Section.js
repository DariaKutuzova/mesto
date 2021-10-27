export default class Section{
    constructor({renderer}, containerSelector) {
        this._container = document.querySelector(containerSelector);
        this._renderer = renderer;
    }

    //Принимает DOM-элемент и добавляет его в контейнер.
    addItem(element) {
        this._container.append(element);
    }

    prependItem(element) {
        this._container.prepend(element);
    }

    //Очистка контейнера
    clear() {
        this._container.innerHTML = '';
    }
    //Отрисовка всех элементов
    renderItems(data) {
        this.clear();

        data.forEach((item) => {
            this._renderer(item);
        });
    }
}