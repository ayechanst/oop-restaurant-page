import { content } from "./index.js";
import { God } from "./index.js"

export function menu() {
    console.log('test from menu')
    const menu = new God();
    menu.makeElement('div', 'banner', 'this works')
    content.appendChild(menu)

}