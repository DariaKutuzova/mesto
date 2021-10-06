import Popup from "./Popup.js";
import { imageInPopup, descriptionInPopup, popups} from '../index.js';
export default class PopupWithImage extends Popup{
    constructor(popupSelector) {
        super(popupSelector);
    }
    open(name, link) {
        imageInPopup.src = name;
        descriptionInPopup.textContent = link;
        imageInPopup.alt = link;
        super.open();
    }
}