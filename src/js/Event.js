export default class Event {
	constructor(type, bubbles, cancelable) {
		this.type = type;
		this.target = null;
		this.currentTarget = null;
		this.eventPhase = 0;
		this.bubbles = !!bubbles;
		this.cancelable = !!cancelable;
		this.timeStamp = (new Date()).getTime();
		this.defaultPrevented = false;
		this.propagationStopped = false;
		this.immediatePropagationStopped = false;
		this.removed = false;
	}
	preventDefault() {
		this.defaultPrevented = this.cancelable && true;
	}
	stopPropagation() {
		this.propagationStopped = true;
	}
	stopImmediatePropagation() {
		this.immediatePropagationStopped = this.propagationStopped = true;
	}
	remove() {
		this.removed = true;
	}
	clone() {
		return new Event(this.type, this.bubbles, this.cancelable);
	}
	set(props) {
		for (var n in props) {
			this[n] = props[n];
		}
		return this;
	}
	toString() {
		return "[Event (type=" + this.type + ")]";
	}
}