import EventDispatcher from "./EventDispatcher.js";
import "../css/shlpainter.css";
export default class DisplayObject extends EventDispatcher {
	constructor() {
		super();
		this.divObject = document.createElement("div");
		this.divObject.className = "dispaly-object";

		this._x = 0;
		this._y = 0;
		this._width = 0;
		this._height = 0;
		this._scaleX = 1;
		this._scaleY = 1;
		this._rotation = 0;
		this._backgroundColor = "transparent";
		this._opacity = 1;
		this.parent = null;
	}

	get x() {
		return this._x;
	}
	set x(px) {
		this._x = px;
		this._updateTransform();
	}
	get y() {
		return this._y;
	}
	set y(py) {
		this._y = py;
		this._updateTransform();
	}

	get width() {
		return this._width;
	}
	set width(pw) {
		this._width = pw;
		this.divObject.style.width = pw + "px";
	}
	get height() {
		return this._height;
	}

	set height(ph) {
		this._height = ph;
		this.divObject.style.height = ph + "px";
	}

	get scaleX() {
		return this._scaleX;
	}
	set scaleX(ps) {
		this._scaleX = ps;
		this._updateTransform();
	}
	get scaleY() {
		return this._scaleY;
	}
	set scaleY(ps) {
		this._scaleY = ps;
		this._updateTransform();
	}

	get rotation() {
		return this._rotation;
	}
	set rotation(pr) {
		this._rotation = pr;
		this._updateTransform();
	}

	get backgroundColor() {
		return this._backgroundColor;
	}

	set backgroundColor(p) {
		this._backgroundColor = p;
		this.divObject.style.backgroundColor = p;
	}

	get opacity() {
		return this._opacity;
	}
	set opacity(p) {
		this._opacity = p;
		this.divObject.style.opacity = p;
	}

	_updateTransform() {
		this.divObject.style.transform = "translate3d(" + this._x + "px," + this._y + "px,0) rotate(" + this._rotation + "deg) scaleX(" + this._scaleX + ") scaleY(" + this._scaleY + ")";
		this.divObject.style.webkitTransform = "translate3d(" + this._x + "px," + this._y + "px,0) rotate(" + this._rotation + "deg) scaleX(" + this._scaleX + ") scaleY(" + this._scaleY + ")";
	}
	setDivObject(pdo) {
		this.divObject = pdo;
		this.divObject.className = "dispaly-object";
	}
	setMask(px, py, pw, ph, purl) {
		this.divObject.style.maskSize = pw + "px" + " " + ph + "px";
		this.divObject.style.maskPosition = px + "px" + " " + py + "px";
		this.divObject.style.maskImage = "url(" + purl + ")";
		this.divObject.style.webkitMaskSize = pw + "px" + " " + ph + "px";
		this.divObject.style.webkitMaskPosition = px + "px" + " " + py + "px";
		this.divObject.style.webkitMaskImage = "url(" + purl + ")";
	}
}