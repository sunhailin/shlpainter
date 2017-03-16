import Container from "./Container.js";
export default class Stage extends Container {
	constructor(div, viewwidth, viewheight) {
		super();
		this.setDivObject(div);
		this.divObject.style.position = "relative";
		this.divObject.setAttribute("name", "stage");
		this.width = viewwidth;
		this.height = viewheight;
	}
}