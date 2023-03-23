// this file is in charge of storing the constructor functions that will do all the work for me
import { menu } from "./menu.js"
export const content = document.getElementById('content');

export class God {
  makeElement(element, className, innerHTML, ...children) {
    const newElement = document.createElement(element);
    newElement.className = className;
    newElement.innerHTML = innerHTML;
    if (children) {
      children.forEach((child) => {
        newElement.appendChild(child);
      });
    }
    return newElement;
  }
}

menu()

