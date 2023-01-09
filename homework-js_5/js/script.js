

/* Напиши функцию map(fn, array), которая принимает на вход функцию и массив, и обрабатывает каждый элемент массива этой функцией, возвращая новый массив. */


/* const oldArray = [1, 1, 3, 4];
function add(n) {
  return n + 1;
}

const secondArray = [100, 10, 23, 54];
function minus(k) {
  return k - 50;
}

function map(fn, array) {
  let newArray = [];
  for (i = 0; i < array.length; i++) {
    newArray.push(fn(array[i]));
  }
  console.log(newArray);

  return newArray;
}

let desk = document.getElementById('rem');
desk.innerHTML = map(add, oldArray);

let desk2 = document.getElementById('rem2');
desk2.innerHTML = map(minus, secondArray); */





/* Создать объект "Документ", в котором определить свойства "Заголовок, тело, футер, дата". Создать в объекте вложенный объект - "Приложение". Создать в объекте "Приложение", вложенные объекты, "Заголовок, тело, футер, дата". Создать методы для заполнения и отображения документа. */


/*
const main = {
  header: "",
  body: "",
  footer: "",
  side: "",

  application: {
    header: {
      color: ''
    },
    body: {
      color: ''
    },
    footer: {
      color: ''
    },
    side: {
      color: ''
    }
  },

  showFont: function () {
    document.getElementById('header').style.color = (appHeader);
    document.getElementById('header').innerHTML = (main.header);
    document.getElementById('body').style.color = (appBody);
    document.getElementById('body').innerHTML = (main.body);
    document.getElementById('footer').style.color = (appFooter);
    document.getElementById('footer').innerHTML = (main.footer);
    document.getElementById('side').style.color = (appSide);
    document.getElementById('side').innerHTML = (main.side);
  },
  showBack: function () {
    document.getElementById('header').style.background = (header);
    document.getElementById('header').innerHTML = (main.header);
    document.getElementById('body').style.background = (body);
    document.getElementById('body').innerHTML = (main.body);
    document.getElementById('footer').style.background = (footer);
    document.getElementById('footer').innerHTML = (main.footer);
    document.getElementById('side').style.background = (side);
    document.getElementById('side').innerHTML = (main.side);
  }
};


let header = prompt('Enter header background color');
let body = prompt('Enter body background color');
let footer = prompt('Enter footer background color');
let side = prompt('Enter side background color');

main.header = header;
main.body = body;
main.footer = footer;
main.side = side;

main.showBack();

let appHeader = prompt('Enter header font color');
let appBody = prompt('Enter body font color');
let appFooter = prompt('Enter footer font color');
let appSide = prompt('Enter side font color');

main.application.header = appHeader;
main.application.body = appBody;
main.application.footer = appFooter;
main.application.side = appSide;

main.showFont();

console.log(main);

*/

// ------------------------------------------------------------



const main = {
  header: "",
  body: "",
  footer: "",
  side: "",

  application: {
    header: {
      color: ''
    },
    body: {
      color: ''
    },
    footer: {
      color: ''
    },
    side: {
      color: ''
    }
  },

  mainHeader: function (a) {
    if (a === "blue") {
      this.header = 'blue'
      this.application.header = 'yellow'
    } else if (a === "yellow") {
      this.header = 'yellow'
      this.application.header = 'blue'
    }
  },
  mainBody: function (a) {
    if (a === "yellow") {
      this.body = 'yellow'
      this.application.body = 'blue'
    } else if (a === "blue") {
      this.body = 'blue'
      this.application.body = 'yellow'
    }
  },
  mainFooter: function (a) {
    if (a === "red") {
      this.footer = 'red'
      this.application.footer = 'black'
    } else if (a === "black") {
      this.footer = 'black'
      this.application.footer = 'red'
    }
  },
  mainSide: function (a) {
    if (a === "black") {
      this.side = 'black'
      this.application.side = 'red'
    } else if (a === "red") {
      this.side = 'red'
      this.application.side = 'black'
    }
  },
  showFont: function () {
    document.getElementById('header').style.color = (this.application.header);
    document.getElementById('body').style.color = (this.application.body);
    document.getElementById('footer').style.color = (this.application.footer);
    document.getElementById('side').style.color = (this.application.side);
  },
  showBack: function () {
    document.getElementById('header').style.background = (this.header);
    document.getElementById('header').innerHTML = (this.header);
    document.getElementById('body').style.background = (this.body);
    document.getElementById('body').innerHTML = (this.body);
    document.getElementById('footer').style.background = (this.footer);
    document.getElementById('footer').innerHTML = (this.footer);
    document.getElementById('side').style.background = (this.side);
    document.getElementById('side').innerHTML = (this.side);
  }
};


readHeader = prompt('Enter blue or yellow');
main.mainHeader(readHeader);

readBody = prompt('Enter yellow or blue');
main.mainBody(readBody);

readFooter = prompt('Enter red or black');
main.mainFooter(readFooter);

readSide = prompt('Enter black or red');
main.mainSide(readSide);

main.showFont();
main.showBack();
console.log(main);


// -------------------------------------------------------------

/*

const main = {
  header: "red",
  body: "green",
  footer: "red",
  side: "green",

  showBack: function () {
    document.getElementById('header').style.background = (this.header);
    document.getElementById('body').style.background = (this.body);
    document.getElementById('footer').style.background = (this.footer);
    document.getElementById('side').style.background = (this.side);
  },

  headerBack: function(a) {
    this.header = a;
  },
  bodyBack: function(b) {
    this.body = b;
  },
  footerBack: function(c) {
    this.footer = c;
  },
  sideSide: function(d) {
    this.side = d;
  }
};

console.log(main);

main.showBack();

main.headerBack(prompt('Enter background color'));

main.showBack();

main.bodyBack(prompt('Enter background color'));

main.showBack();

main.footerBack(prompt('Enter background color'));

main.showBack();

main.sideSide(prompt('Enter background color'));

main.showBack();

*/

