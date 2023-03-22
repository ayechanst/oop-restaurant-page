// this file is in charge of storing the constructor functions that will do all the work for me

class God {
  constructor(varName, element, glass, parent) {
    this.varName = varName;
    this.element = element;
    this.glass = glass;
    this.parent = parent;
  }
  makeElement() {
    // returns a string
    console.log(
      //   eval(`const ${this.varName} = document.createElement(${this.element})`),

      eval(`const ${this.varName} = 'butt'`),
      //currently undefined
    );
    // console.log('test worked so far');
  }
  //   classAndAppend() {
  //     console.log('bing xilling' + this.parent);
  //   }
}

const head = new God('head', 'div', 'head', 'content');

head.makeElement();
