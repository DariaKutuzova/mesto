
export default class UserInfo{
    constructor({name, info}) {
        this._name = name;
        this._info = info;
    }
    getUserInfo(){
        const data = {
            name: document.querySelector(this._name).textContent,
            info: document.querySelector(this._info).textContent
        }

        return data;
    }

    setUserInfo(data){
        this._name.textContent = data.name;
        this._info.textContent = data.info;
    }
}