// this file is in charge of storing the constructor functions that will do all the work for me
const content = document.getElementById('content');

class God {
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

const god = new God();
const make = god.makeElement;
content.appendChild(
  make('div', 'head', '', 
    make('div', 'holder', '',
      make('h1', 'fart', 'im a child'),
     ),
    make('h1', 'dog', 'for'),
    make('h1', 'yup', 'goo'),
  )
);
