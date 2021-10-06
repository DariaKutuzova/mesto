import Popup from "./Popup.js";
import { imageInPopup, descriptionInPopup} from './index.js';
export default class PopupWithImage extends Popup{
    constructor(popupSelector) {
        super(popupSelector);
    }
    open(name, link) {
        imageInPopup.src = link;
        descriptionInPopup.textContent = name;
        imageInPopup.alt = name;
        super.open();
    }
}