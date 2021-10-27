
export default class UserInfo{
    constructor({name, info, avatar}) {
        this._userName = document.querySelector(name);
        this._userJob = document.querySelector(info);
        this._avatar = document.querySelector(avatar);
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
    //Изменить аватар
    setUserAvatar(data) {
        this._avatar.src = data.avatar;
    }

}
