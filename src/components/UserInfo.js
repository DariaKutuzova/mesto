
export default class UserInfo{
    constructor({name, info}) {
        this._userName = document.querySelector(name);
        this._userJob = document.querySelector(info);
    }
    //Для присвоения из страницы в форму
    getUserInfo(){
        const data = {
            name: this._userName.textContent,
            info: this._userJob.textContent
        }
        return data;
    }
//Для присвоения из формы на страницу
    setUserInfo(data){
        this._userName.textContent = data.name;
        this._userJob.textContent = data.about;
    }
}