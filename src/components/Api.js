export default class Api{
    constructor(config) {
        this._url = config.url;
        this._headers = config.headers;
    }
    getAllCards() {
        return fetch(`${this._url}cards/`, {
            method: 'GET',
            headers: this._headers
        })
            .then((res) => {
                if (res.ok){
                return res.json();}
                return Promise.reject('Произошла ошибка')
            })
    }
    addCard(data) {
        return fetch(`${this._url}cards/`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify(data)
        })
            .then((res) => {
                if (res.ok){
                    return res.json();}
                return Promise.reject('Произошла ошибка')
            })
    }

    changeAvatar(link) {
        return fetch(`${this._url}`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify(link)
        })
            .then((res) => {
                if (res.ok){
                    return res.json();}
                return Promise.reject('Произошла ошибка')
            })
    }

    getApiUserInfo(data) {
        return fetch(`${this._url}users/me`, {
            method: 'GET',
            headers: this._headers,
            // body: JSON.stringify(data)
        })
            .then((res) => {
                if (res.ok){
                    return res.json();}
                return Promise.reject('Произошла ошибка')
            })
    }

    patchUserInfo(data) {
        return fetch(`${this._url}users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: data.name,
                about: data.info
            })
        })
            .then((res) => {
                if (res.ok){
                    return res.json();}
                return Promise.reject('Произошла ошибка')
            })
    }

    deleteCard(id) {
        return fetch(`${this._url}${id}`, {
            method: "DELETE",
            headers: this._headers,
        }).then((res) => {
            if (res.ok) {
                return res.json();
            }

            return Promise.reject("Произошла ошибка");
        });
    }

    getUserInfo() {

    }
}