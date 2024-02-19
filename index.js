class ToDos extends HTMLElement{
  constructor(){
    super();
    this.innerHTML = `${this.getAttribute('name')}`;
  }

}

window.customElements.define('list-item', ToDos);