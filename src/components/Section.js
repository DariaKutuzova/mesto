export default class Section{
    constructor({data, renderer}, containerSelector, api) {
        this._renderedItems = data;
        this._container = document.querySelector(containerSelector);
        this._renderer = renderer;
        this._api = api;
    }

    // saveCard(text) {
    //     this._api
    //         .addCard({name: text})
    //         .then((data) => {
    //             this.addItem(data.link, data.name)
    //         })
    //         .catch((err) => {alert(err)});
    // }

    //Принимает DOM-элемент и добавляет его в контейнер.
    addItem(element) {
        this._container.append(element);
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