
export default class UserInfo{
    constructor({name, info}) {
        this._userName = document.querySelector(name);
        this._userJob = document.querySelector(info);
    }
    getUserInfo(){
        const data = {
            name: this._userName.textContent,
            info: this._userJob.textContent
        }
        return data;
    }

    setUserInfo(data){
        this._userName.textContent = data.name;
        this._userJob.textContent = data.info;
    }
}