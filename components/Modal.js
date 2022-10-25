import { create$, $ } from "../utils/selectorHook.js";

export default function Modal({}) {
  this.target = $("body");
  this.modalElement = create$("modal");
  this.modalElement.innerHTML = `
  <div class="modal-content">승리</div>
  `;
}
