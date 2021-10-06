export default class Section{
    constructor({data, renderer}, containerSelector) {
        this._renderedItems = data;
        this._container = document.querySelector(containerSelector);
        this._renderer = renderer;
    }
    //Принимает DOM-элемент и добавляет его в контейнер.
    addItem(element) {
        this._container.prepend(element);
    }
    //Очистка контейнера
    clear() {
        this._container.innerHTML = '';
    }
    //Отрисовка всех элементов
    renderItems() {
        this.clear();

        this._renderedItems.forEach((item) => {
            this._renderer(item);
        });
    }
}