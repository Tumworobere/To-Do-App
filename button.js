const buttonTemplate = document.createElement("button-template");
buttonTemplate.innerHTML = `
<style>
  .buttonDiv{
  width:25px;
  height:25px;
  /* padding: 5px 10px; */

}

.button{
  padding: 10px;
  border-radius: 50%;
  border: 1.5px solid green
}
</style>
<div class="butttonDiv"><button class="button"></button></div>`;

class Button extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = buttonTemplate.innerHTML;
  }
}
window.customElements.define("button-template", Button);
