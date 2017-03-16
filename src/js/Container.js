import DisplayObject from "./DisplayObject.js";
export default class Container extends DisplayObject {
	constructor() {
		super();
		this.divObject.setAttribute("name", "container");
		this.children = [];
	}

	getNumChildren() {
		return this.children.length;
	}
	get numChildre() {
		return this.children.length;
	}

	addChild(child) {
		if (!child) {
			return null;
		}
		if (child.parent) {
			child.parent.removeChild(child);
		}
		child.parent = this;
		this.children.push(child);
		this.divObject.appendChild(child.divObject);
		return child;
	}
	addChildAt(child, index) {
		if (child.parent) {
			child.parent.removeChild(child);
		}
		child.parent = this;
		this.children.splice(index, 0, child);
		this._deleteEmptyNode();
		if (index === 0) {
			if (this.divObject.hasChildNodes()) {
				this.divObject.insertBefore(child.divObject, this.divObject.childNodes[0]);
			} else {
				this.divObject.appendChild(child.divObject);
			}
		} else {
			this.divObject.insertBefore(child.divObject, this.divObject.childNodes[index]);
		}
		return child;
	}
	removeChild(child) {
		return this.removeChildAt(this.children.indexOf(child));
	}
	removeChildAt(index) {
		if (index < 0 || index > this.children.length - 1) {
			return false;
		}
		let child = this.children[index];
		if (child) {
			child.parent = null;
		}
		this.children.splice(index, 1);
		this._deleteEmptyNode();
		this.divObject.removeChild(this.divObject.childNodes[index]);
		return true;
	}
	_deleteEmptyNode() {
		let elem_child = this.divObject.childNodes;
		for (let i = 0; i < elem_child.length; i++) {
			if (elem_child[i].nodeName == "#text" && !/\s/.test(elem_child.nodeValue)) {
				this.divObject.removeChild(elem_child)
			}
		}
	}

	removeAllChildren() {
		let kids = this.children;
		while (kids.length) {
			this.removeChildAt(0);
		}
	}

	getChildAt(index) {
		return this.children[index];
	}

	getchildIndex(child) {
		return this.children.indexOf(child);
	}
	contains(child) {
		while (child) {
			if (child == this) {
				return true;
			}
			child = child.parent;
		}
		return false;
	}
}