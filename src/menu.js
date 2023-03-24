import { content } from "./index.js";
import { God } from "./index.js"

class MenuItem {
    constructor(dish, price, description, imageLink) {
        this.dish = dish
        this.price = price
        this.description = description
        this.imageLink = imageLink 
    }
    createGod() {
        let cardContainer = new God()
        let dish = new God()
        let price = new God()
        let description = new God()
        let cardImageContainer = new God()
        let imageWrapper = new God()
        cardContainer.makeElement('div', 'card-container', null,
        dish.makeElement('div', 'dish', this.dish))
        price.makeElement('div', 'price', this.price) 
        description.makeElement('div', 'description', this.description)
        imageLink.makeElement('div', 'image-wrapper', null, 
        cardImageContainer.makeElement('div', 'card-image-container', null, 
        imageWrapper.makeElement('div', 'image-wrapper', null)
        ))
    }

}

function menu() {
    let menuCardContainer = new God()
    let cardContainer = new God()
    let card = new God()
    
    menuCardContainer.makeElement('div', 'menu-card-container', null, 
    // for each element in my array I need to make a card
    cardContainer.makeElement('div', 'card-container', null,))
    
}