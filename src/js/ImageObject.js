import DisplayObject from "./DisplayObject.js";
import "../css/shlpainter.css";
export default class ImageObject extends DisplayObject {
	constructor(purl) {
		super();
		this.setDivObject(document.createElement("img"));
		this.divObject.className = "image-object";
		this.divObject.setAttribute("name", "imageObject");
		this.setImage(purl);
	}

	setImage(pi) {
		if (typeof pi === "string") {
			this.divObject.src = pi;
		} else {
			this.setDivObject(pi);
			this.divObject.className = "image-object";
			this.divObject.setAttribute("name", "imageObject");
		}
	}
}