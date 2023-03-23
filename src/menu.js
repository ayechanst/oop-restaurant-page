import { content } from "./index.js";
import { God } from "./index.js"

export function menu() {
    let menu = new God()
    let title = new God()
    let menuButton = new God()
    let aboutButton = new God()
    let homeButton = new God()
    menu = menu.makeElement('div', 'banner', null,
        title.makeElement('h1', 'title', 'The Feral Fox\'s Food'),
        menuButton.makeElement('button', 'menu', 'menu'),
        aboutButton.makeElement('button', 'about', 'About'),
        homeButton.makeElement('button', 'home', 'Home')
        )

    content.appendChild(menu)
}