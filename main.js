(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n,r,o){var i=r.handleCardClick,u=r.handleDeleteCardClick,a=r.plusLike,c=r.deleteLike;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._data=e,this._id=e._id,this._cardSelector=n,this._handleCardClick=i,this._handleDeleteCardClick=u,this._plusLike=a,this._deleteLike=c,this._likes=e.likes.length,this._ownerId=o}var n,r;return n=t,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".element").cloneNode(!0)}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._setEventListeners(),this._element.querySelector(".element__image").src=this._data.link,this._element.querySelector(".element__image").alt=this._data.name,this._element.querySelector(".element__description").textContent=this._data.name,this._likeCounter=this._element.querySelector(".element__number-of-likes"),this._likeButton=this._element.querySelector(".element__like"),this._likeCounter.textContent=this._likes,this._checkLikeState(),this._checkOwner(),this._element}},{key:"removeCard",value:function(){this._element.remove()}},{key:"setLikeCount",value:function(e){this._likeCounter=this._element.querySelector(".element__number-of-likes"),this._likeCounter.textContent=String(e.likes.length)}},{key:"_checkOwner",value:function(){this._data.owner._id!==this._ownerId&&this._element.querySelector(".element__trash").remove()}},{key:"_checkLikeState",value:function(){var e=this;this._data.likes.forEach((function(t){t._id===e._ownerId&&e._likeButton.classList.add("element__like_active")}))}},{key:"addLike",value:function(){this._likeButton.classList.add("element__like_active")}},{key:"removeLike",value:function(){this._likeButton.classList.remove("element__like_active")}},{key:"_setEventListeners",value:function(){var e=this;this._element.querySelector(".element__image").addEventListener("click",(function(){e._handleCardClick(e._data)})),this._element.querySelector(".element__like").addEventListener("click",(function(){e._likeButton.classList.contains("element__like_active")?e._deleteLike(e._data):e._plusLike(e._data)})),this._element.querySelector(".element__trash").addEventListener("click",this._handleDeleteCardClick)}}])&&e(n.prototype,r),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._configValidation=t,this._formElement=n,this._inputList=Array.from(this._formElement.querySelectorAll(this._configValidation.inputSelector)),this._submitButton=this._formElement.querySelector(this._configValidation.submitButtonSelector)}var t,r;return t=e,(r=[{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_hasNotInputValues",value:function(){return this._inputList.every((function(e){return 0===e.value.length}))}},{key:"_showInputError",value:function(e){this._inputError=this._formElement.querySelector("#".concat(e.id,"-error")),e.classList.add(this._configValidation.inputErrorClass),this._inputError.textContent=e.validationMessage,this._inputError.classList.add(this._configValidation.errorClass)}},{key:"_hideInputError",value:function(e){this._inputError=this._formElement.querySelector("#".concat(e.id,"-error")),e.classList.remove(this._configValidation.inputErrorClass),this._inputError.classList.remove(this._configValidation.errorClass),this._inputError.textContent=""}},{key:"_verifyValid",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"_disabledSubmitButton",value:function(){this._submitButton.classList.add(this._configValidation.inactiveButtonClass),this._submitButton.setAttribute("disabled",!0)}},{key:"_enabledSubmitButton",value:function(){this._submitButton.classList.remove(this._configValidation.inactiveButtonClass),this._submitButton.removeAttribute("disabled")}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()||this._hasNotInputValues()?this._disabledSubmitButton():this._enabledSubmitButton()}},{key:"resetValidation",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){e._hideInputError(t)}))}},{key:"_setEventListeners",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._verifyValid(t),e._toggleButtonState()}))}))}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&n(t.prototype,r),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t,n,r){var o=t.data,i=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderedItems=o,this._container=document.querySelector(n),this._renderer=i,this._api=r}var t,n;return t=e,(n=[{key:"saveCard",value:function(e){var t=this;this._api.addCard(e).then((function(e){t.addItem(e.link,e.name)})).catch((function(e){alert(e)}))}},{key:"addItem",value:function(e){this._container.append(e)}},{key:"clear",value:function(){this._container.innerHTML=""}},{key:"renderItems",value:function(){var e=this;this.clear(),this._renderedItems.forEach((function(t){e._renderer(t)}))}}])&&o(t.prototype,n),e}();function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var a=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popupSelector=t,this._popup=document.querySelector(this._popupSelector),this._handleClickClose=this._handleClickClose.bind(this),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"_handleClickClose",value:function(e){e.target.classList.contains("popup_opened")&&this.close(),e.target.classList.contains("popup__close")&&this.close()}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){this._popup.addEventListener("click",this._handleClickClose)}}])&&u(t.prototype,n),e}();function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t,n){return l="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=h(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}},l(e,t,n||e)}function f(e,t){return f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},f(e,t)}function p(e,t){if(t&&("object"===c(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function h(e){return h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},h(e)}var _=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=h(r);if(o){var n=h(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return p(this,e)});function u(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),i.call(this,e)}return t=u,(n=[{key:"open",value:function(e){var t=e.link,n=e.name;this._popup=document.querySelector(this._popupSelector),this._popup.querySelector(".popup__image").src=t,this._popup.querySelector(".popup__image").alt=n,this._popup.querySelector(".popup__image-title").textContent=n,l(h(u.prototype),"open",this).call(this)}}])&&s(t.prototype,n),u}(a);function d(e){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t,n){return m="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=g(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}},m(e,t,n||e)}function v(e,t){return v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},v(e,t)}function b(e,t){if(t&&("object"===d(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return k(e)}function k(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e){return g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},g(e)}var E=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=g(r);if(o){var n=g(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return b(this,e)});function u(e,t){var n,r=t.submit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._submit=r,n._form=n._popup.querySelector(".popup__form"),n._submitEvtHandler=n._submitEvtHandler.bind(k(n)),n._submitButton=n._form.querySelector(".popup__button"),n._valueSubmitButton=n._submitButton.textContent,n}return t=u,(n=[{key:"setEventListeners",value:function(){this._form.addEventListener("submit",this._submitEvtHandler),m(g(u.prototype),"setEventListeners",this).call(this)}},{key:"_getInputValues",value:function(){this._inputs=Array.from(this._form.querySelectorAll(".popup__input"));var e={};return this._inputs.forEach((function(t){e[t.name]=t.value})),e}},{key:"_submitEvtHandler",value:function(e){e.preventDefault(),this._submit(this._getInputValues()),this.close()}},{key:"loading",value:function(e){this._submitButton.textContent=e?"Сохранение...":this._valueSubmitButton}},{key:"close",value:function(){m(g(u.prototype),"close",this).call(this),this._form.reset()}}])&&y(t.prototype,n),u}(a);function S(e){return S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},S(e)}function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function w(e,t,n){return w="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=q(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}},w(e,t,n||e)}function L(e,t){return L=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},L(e,t)}function O(e,t){if(t&&("object"===S(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return j(e)}function j(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function q(e){return q=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},q(e)}var P=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&L(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=q(r);if(o){var n=q(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return O(this,e)});function u(e,t){var n,r=t.submit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._submit=r,n._form=n._popup.querySelector(".popup__form"),n._submitEvtHandler=n._submitEvtHandler.bind(j(n)),n._submitButton=n._form.querySelector(".popup__button"),n._valueSubmitButton=n._submitButton.textContent,n}return t=u,(n=[{key:"setEventListeners",value:function(){this._form.addEventListener("submit",this._submitEvtHandler),w(q(u.prototype),"setEventListeners",this).call(this)}},{key:"_submitEvtHandler",value:function(e){e.preventDefault(),this._submit(this._data),this._form.removeEventListener("submit",this._submitEvtHandler),this.close()}},{key:"loading",value:function(e){this._submitButton.textContent=e?"Удаление...":this._valueSubmitButton}},{key:"open",value:function(e){this._data=e,w(q(u.prototype),"open",this).call(this)}}])&&C(t.prototype,n),u}(a);function B(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var I=function(){function e(t){var n=t.name,r=t.info,o=t.avatar;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userName=document.querySelector(n),this._userJob=document.querySelector(r),this._avatar=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._userName.textContent,info:this._userJob.textContent}}},{key:"setUserInfo",value:function(e){this._userName.textContent=e.name,this._userJob.textContent=e.about}},{key:"setUserAvatar",value:function(e){this._avatar.src=e.avatar}}])&&B(t.prototype,n),e}();function R(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var T=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._url=t.url,this._headers=t.headers}var t,n;return t=e,(n=[{key:"getAllCards",value:function(){return fetch("".concat(this._url,"cards/"),{method:"GET",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Произошла ошибка")}))}},{key:"addCard",value:function(e){return fetch("".concat(this._url,"cards/"),{method:"POST",headers:this._headers,body:JSON.stringify(e)}).then((function(e){return e.ok?e.json():Promise.reject("Произошла ошибка")}))}},{key:"changeAvatar",value:function(e){return fetch("".concat(this._url,"users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.avatar})}).then((function(e){return e.ok?e.json():Promise.reject("Произошла ошибка")}))}},{key:"getApiUserInfo",value:function(){return fetch("".concat(this._url,"users/me"),{method:"GET",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Произошла ошибка")}))}},{key:"patchUserInfo",value:function(e){return fetch("".concat(this._url,"users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.info})}).then((function(e){return e.ok?e.json():Promise.reject("Произошла ошибка")}))}},{key:"deleteCard",value:function(e){return fetch("".concat(this._url,"cards/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Произошла ошибка")}))}},{key:"addLike",value:function(e){return fetch("".concat(this._url,"cards/likes/").concat(e._id),{method:"PUT",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Произошла ошибка")}))}},{key:"disLike",value:function(e){return fetch("".concat(this._url,"cards/likes/").concat(e._id),{method:"DELETE",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Произошла ошибка")}))}}])&&R(t.prototype,n),e}(),V=document.querySelector(".profile__edit-button"),x=document.querySelector(".profile__add-button"),A=document.querySelector(".profile__avatar-edit"),D=(document.querySelector(".element__trash"),document.querySelector(".popup__form_type_prifile")),H=document.querySelector(".popup__form_type_avatar"),U=document.querySelector(".popup__form_type_add"),N=(document.querySelector(".popup__form_type_confirm"),document.querySelector(".popup__input_value_name")),J=document.querySelector(".popup__input_value_job"),M=document.querySelector(".profile__avatar"),G=document.querySelector(".profile__name"),z=document.querySelector(".profile__description"),F=(document.querySelector(".element__like"),document.querySelector(".element__number-of-likes"),".elements"),K=".profile__name",Q={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_active"},W=null,X=null,Y=new r(Q,D);Y.enableValidation();var Z=new r(Q,U);Z.enableValidation();var $=new r(Q,H);$.enableValidation();var ee=new T({url:"https://mesto.nomoreparties.co/v1/cohort-29/",headers:{"content-type":"application/json",authorization:"8bc97cc4-e8dd-4b97-8e8e-b29acddab317"}});function te(e,n){var r=re.open.bind(re),o=new t(e,"#card-template",{handleCardClick:r,handleDeleteCardClick:function(){W=o,ce.open(e)},plusLike:function(e){ee.addLike(e).then((function(e){o.setLikeCount(e),o.addLike()})).catch((function(e){console.log("Не могу добавить лайк. Ошибка ".concat(e,"."))}))},deleteLike:function(e){ee.disLike(e).then((function(e){o.setLikeCount(e),o.removeLike(e)})).catch((function(e){console.log("Не могу убрать лайк. Ошибка ".concat(e,"."))}))}},n);return o.generateCard()}var ne=new i({renderer:function(e){ne.addItem(te(e,X))}},F),re=new _(".popup_type_open-image");re.setEventListeners();var oe=new I({name:K,info:".profile__description",avatar:K});ee.getApiUserInfo().then((function(e){G.textContent=e.name,z.textContent=e.about,M.src=e.avatar,X=e._id}));var ie=new E(".popup_type_profile",{submit:function(e){ie.loading(!0),ee.patchUserInfo(e).then((function(e){oe.setUserInfo(e)})).catch((function(e){console.log(e)})).finally((function(){ie.loading(!1),ie.close()}))}});ie.setEventListeners();var ue=new E(".popup_type_avatar",{submit:function(e){ue.loading(!0),ee.changeAvatar(e).then((function(e){oe.setUserAvatar(e)})).then((function(){ee.getApiUserInfo().then((function(e){M.src=e.avatar}))})).catch((function(e){console.log(e)})).finally((function(){ue.loading(!1),ue.close()}))}});ue.setEventListeners();var ae=new E(".popup_type_add-place",{submit:function(e){ae.loading(!0),ee.addCard(e).then((function(){ee.getAllCards().then((function(e){var t=new i({data:e,renderer:function(e){t.addItem(te(e,X))}},F,ee);t.renderItems()})).catch((function(e){alert(e)}))})).catch((function(e){console.log(e)})).finally((function(){ae.loading(!1),ae.close()}))}});ae.setEventListeners();var ce=new P(".popup_type_confirm",{submit:function(e){ce.loading(!0),function(e){ee.deleteCard(e._id).then((function(){W.removeCard()})).catch((function(e){console.log("Невозможно удалить карточку. Ошибка ".concat(e,"."))})).finally((function(){ce.close(),ce.loading(!1)}))}(e)}});ce.setEventListeners(),ee.getAllCards().then((function(e){var t=new i({data:e,renderer:function(e){t.addItem(te(e,X))}},F,ee);t.renderItems()})).catch((function(e){alert(e)})),V.addEventListener("click",(function(){ee.getApiUserInfo().then((function(e){N.value=e.name,J.value=e.about})),Y.resetValidation(),ie.open()})),x.addEventListener("click",(function(){Z.resetValidation(),ae.open()})),A.addEventListener("click",(function(){$.resetValidation(),ue.open()}))})();