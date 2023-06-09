// this file is in charge of storing the constructor functions that will do all the work for me
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

function skeleton() {
    let head = new God()
    let title = new God()
    let menuButton = new God()
    let aboutButton = new God()
    let homeButton = new God()
    head = head.makeElement('div', 'banner', null,
        title.makeElement('h1', 'title', 'The Feral Fox\'s Food'),
        menuButton.makeElement('button', 'menu', 'Menu'),
        aboutButton.makeElement('button', 'about', 'About'),
        homeButton.makeElement('button', 'home', 'Home')
        )
    content.appendChild(head)

    let body = new God()
    body = body.makeElement('div', 'body', null)
    content.appendChild(body)

    let footer = new God()
    let links = new God()
    let contactUs = new God()
    let leaveAReview = new God()
    let about = new God()
    let blog = new God()
    footer = footer.makeElement('div', 'footer', null, 
        links.makeElement('div', 'footer-container', 
        contactUs.makeElement('a', 'footer-link', 'Contact Us'),
        leaveAReview.makeElement('a', 'footer-link', 'Leave A Review'),
        about.makeElement('a', 'footer-link', 'About'),
        blog.makeElement('a', 'footer-container', 'Blog')
        ))
    content.appendChild(footer)
}

skeleton()