export default class MyDom {
	$ = (id) => document.querySelector(id);
	query = (id, attr) => this.$(id).getAttribute(attr);
	render = (content, id) => this.$(id).innerHTML(content);
	toggle = (id, className) => this.$(id).classList.toggle(className);
	create = (elem) => document.createElement(elem);
	delete = (id) => this.$(id).remove();
	insert = (targetElem, id, type) => {
		switch (type) {
			case 'before':
				this.$(targetElem).before(this.$(id));
				break;
			case 'after':
				this.$(targetElem).after(this.$(id));
				break;
			case 'append':
				this.$(targetElem).append(this.$(id));
				break;
			case 'prepend':
				this.$(targetElem).prepend(this.$(id));
				break;
			case 'replace':
				this.$(targetElem).replaceWith(this.$(id));
				break;
		}
	};
	debounce = (func) => () => {
		clearTimeout(func.id);
		func.id = setTimeout(func, 500);
	};
}
