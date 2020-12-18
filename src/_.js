var articleDiv = document.querySelector("div.apv");
                                // создаем элемент
                                // var elem = document.createElement("div#switch-apv");


                           
                                var articleDiv = document.querySelector("div.apv");
                              
                                
                                // создаем элемент
                                var elem = document.createElement("div");
                                // elem.id = 'switch-apv';
                                elem.setAttribute('id','switch-apv');
                                // создаем для него текст
                                var elemText = document.createTextNode("вкл/выкл");
                                // добавляем текст в элемент в качестве дочернего элемента
                                elem.appendChild($apv);
                                // получаем первый элемент, перед которым будет идти добавление
                                var firstElem = articleDiv.firstChild.nextSibling;
                                // добавляем элемент в блок div перед первым узлом
                                articleDiv.insertBefore(elem, firstElem);
                                
                                var elem = document.createElement("INPUT");
                                elem.type = "checkbox";
                                elem.name = "onoffswitch";
                                elem.value = apv_en;
                                elem.class = "onoffswitch-checkbox";
                                elem.id = 'myonoffswitch-1';
                                document.getElementById("myonoffswitch-1").style.hidden;
                                // создаем для него текст
                                var elemText = document.createTextNode("вкл/выкл");
                                // добавляем текст в элемент в качестве дочернего элемента
                                articleDiv.appendChild(elem);
                                // получаем первый элемент, перед которым будет идти добавление
                                var firstElem = articleDiv.firstChild.nextSibling;
                                // добавляем элемент в блок div перед первым узлом
                                articleDiv.insertBefore(elem, firstElem);


                         document.getElementById("ikz-settings-sets") 





                          var css = '.elem-hover {background: blue;}';
                          var style = document.createElement('style');

                          if (style.styleSheet){
                                 style.styleSheet.cssText = css;

                          } else {
                                style.appendChild(document.createTextNode(css));
                          }

                        document.getElementsByTagName('head')[0].appendChild(style);
                        document.querySelector('.elem').ClassList.add('elem-hover');

                        // ------------------------------------------------------

document.addEventListener("DOMContentLoaded", function() {
  var ids = ["1", "2", "3"];
        for (var id of ids) {
    var input = document.getElementById(id);
    input.value = localStorage.getItem(id);
    (function(id, input) {
      input.addEventListener("change", function() {
        localStorage.setItem(id, input.value);
      });
    })(id, input);
  } 
});

                        a.splice(a.lenght-1, 1);


obj.hasOwnProperty(prop);

var buz = {

   fog: 'stack'
};

for(var name in buzz) { 

    if (buz.hasOwnproperty(name)) {
       alert('это точно туман (' + name + '). Значение: ' + buz[name]);
    }
}

// JavaScript не защищает имя свойства hasOwnProperty; таким образом,
//  вполне может существовать объект с таким свойством, 
//  поэтому для получения правильного результата нужно использовать внешний метод hasOwnProperty:
 

 var foo = {
        hasOwnProperty: function() {
                return false;
        },
        bar: 'Тут текст'
 };


 foo.hasOwnProperty('bar'); // всегда возвращает false

// Используем метод hasOwnProperty другого объекта и вызываем его с передачей foo в качестве this
({}).hasOwnProperty.call(foo, 'bar');

// Также для этих целей можно использовать свойство hasOwnProperty из прототипа Object
object.prototype.hasOwnProperty.call(foo, 'bar');  


// ----------------------------------------------------


var lis = [].slice.call( document.querySelectorAll('li') );
 
document.onclick = function(e){
    if (e.target.nodeName !== 'LI') return false;
    e.target.clicked = true;
 
    lis.forEach(function(el, i) {
        if ( !el.clicked ) return false;
        alert(i);
        el.clicked = undefined;
    });
}
// ____________________________________________________________

document.getElementById('clicked').addEventListener('click', clicker);

function clicker(e) {
  const parent = e.target.parentNode;
  const result = {}

  if (parent.className != 'wrapper') return;
  
  const spans = [...parent.querySelectorAll('span')]; // получаем все спаны и превращаем в массив
  const checkbox = parent.querySelector('input'); // получаем ОДИН чекбокс

  result.checkbox = checkbox.checked;
  result.spanHTML = spans.map(s => s.innerHTML);

  console.log(result);
  Получим такое: ( для первого чекбокса )

{
  "checkbox": false,
  "spanHTML": [
    "1",
    "абвгдейка"
  ]
}

}
___________________________________________________________________________________

document.getElementById('clicked').addEventListener('click', clicker);

function clicker(e) {
  const parent = e.target.parentNode;
  let obj = {};
  e.preventDefault();
  
  if (parent.className != 'wrapper') return;
  
  parent.childNodes.forEach(elem => {
    if (elem.tagName == 'SPAN') obj[elem.className] = elem.innerHTML;
    if (elem.tagName == 'INPUT') obj[elem.className] = elem.checked;
  });
  
  console.log(obj);
}


Array.prototipe.slice.call();


Array.prototype.slice.call()

String.prototype.limit = function( limit, userParams) {
    var text = this
      , options = {
            ending: '...'  // что дописать после обрыва
          , trim: true     // обрезать пробелы в начале/конце?
          , words: true    // уважать ли целостность слов? 
        }
      , prop
      , lastSpace
      , processed = false
    ;

    //  проверить limit, без него целого положительного никак
    if( limit !== parseInt(limit)  ||  limit <= 0) return this;

    // применить userParams
    if( typeof userParams == 'object') {
        for (prop in userParams) {
            if (userParams.hasOwnProperty.call(userParams, prop)) {
                options[prop] = userParams[prop];
            }
        }
    }

    // убрать пробелы в начале /конце
    if( options.trim) text = text.trim();

    

    if( text.length <= limit) return text;    // по длине вписываемся и так

    text = text.slice( 0, limit); // тупо отрезать по лимиту
    lastSpace = text.lastIndexOf(" ");
    if( options.words  &&  lastSpace > 0) {  // урезать ещё до границы целого слова
        text = text.substr(0, lastSpace);
    }
    return text + options.ending;
}


var obj = {test: 'str'};

var f = function (a) {
        a = {
         test: 'fall'
        };
}


f(obj);

console.log();


function test(t) {
        $('body').append();
}



/* ************************                      ********************************************
*******************                                                    ********************** */

function showNote(anchor, position, html) {
    //creating a note and appending to anchor
    anchor.style.position = "relative";
    let note = document.createElement("div");
    note.classList.add("note");
    note.innerHTML = html;
    anchor.append(note);

    //helper
    let borderLeft = parseInt(getComputedStyle(anchor).borderLeft);

    let positionMethods = {
        "top-out"() {
            note.style.top = 0 - note.offsetHeight + "px";
            note.style.left = 0 - borderLeft + "px";
        },
        "top-in"() {
            note.style.top = 0 + "px";
            note.style.left = 0 - borderLeft + "px";
        },
        "right-out"() {
            note.style.right = 0 - note.offsetWidth + "px";
            note.style.top = 0 + "px";
        },
        "right-in"() {
            note.style.right = 0 + "px";
            note.style.top = 0 + "px";
        },
        "bottom-out"() {
            note.style.left = 0 - borderLeft + "px";
            note.style.bottom = 0 - note.offsetHeight + "px";
        },
        "bottom-in"() {
            note.style.left = 0 - borderLeft + "px";
            note.style.bottom = 0 + "px";
        },
        "right-bottom-out"() {
            note.style.right = 0 - note.offsetWidth + "px";
            note.style.bottom = 0 + "px";
        },
        "right-bottom-in"() {
            note.style.right = 0 + "px";
            note.style.bottom = 0 + "px";
        }
    };
    
    //position a note relative anchor
    positionMethods[position]();
}

let anchor = document.querySelector("blockquote");

showNote(anchor, "top-out", "top-out note");
showNote(anchor, "top-in", "top-in note");
showNote(anchor, "right-out", "right-out note");
showNote(anchor, "right-in", "right-in note");
showNote(anchor, "bottom-out", "bottom-out note");
showNote(anchor, "bottom-in", "bottom-in note");
showNote(anchor, "right-bottom-out", "right-bottom-out");
showNote(anchor, "right-bottom-in", "right-bottom-in");

/* ************************                      ********************************************
*******************                                                    ********************** */

let anchor = document.createElement("div");
anchor.id = "anchor";
anchor.insertAdjacentHTML("afterbegin", "Click me for show Note!");
document.body.prepend(anchor);

class Note {
        constructor({ anchor, position, html }) {
                this.anchor = anchor;
                this.position = position;
                this.html = html;
                this.anchor.onclick = () => this._onClick();
        }

        _positionAt() {
                let anchorCoords = this.anchor.getBoundingClientRect();
                this._note.style.position = "fixed";
                switch (this.position) {
                        case "top":
                                this._note.style.top = anchorCoords.top - this._note.offsetHeight + "px";
                                this._note.style.left = anchorCoords.left + "px";
                                break;
                        case "bottom":
                                this._note.style.top = anchorCoords.bottom + "px";
                                this._note.style.left = anchorCoords.left + "px";
                                break;
                        case "left":
                                this._note.style.top = anchorCoords.top + "px";
                                this._note.style.left = anchorCoords.left - this._note.offsetWidth + "px";
                                break;
                        case "right":
                                this._note.style.top = anchorCoords.top + "px";
                                this._note.style.left = anchorCoords.right + "px";
                                break;
                        default:
                                return new Error(
                                        'the value of pos argument must be a "top", "bottom", "left" or "right"'
                                );
                }
        }

        _showNote() {
                this._note = document.createElement("div");
                this._note.classList.add("note");
                this._note.insertAdjacentHTML("afterbegin", this.html);
                this.anchor.insertAdjacentElement("beforebegin", this._note);
                this._positionAt();
                this._deleteNote();
        }

        _deleteNote() {
                setTimeout(() => this._note.remove(), 5000);
        }

        _onClick() {
                this._showNote();
        }
}

let note = new Note({
        anchor: anchor,
        position: "top",
        html: "Hello! I'm a your new Note"
});

/* ************************                      ********************************************
*******************                                                    ********************** */

let notes = {};

    function showNote(anchor, position, text) {
        let txtBlock, name = `${anchor}${position}${text}`;
                


        if (!notes[name]) {
            txtBlock = document.createElement("div");
            txtBlock.classList.add("note");
            txtBlock.textContent = text;
            
            notes[name] = txtBlock;
            anchor.prepend(txtBlock);

        } else txtBlock = notes[name];
        

        function updatePos(txtBlock) {
            
            let elemCrds = anchor.getBoundingClientRect();
            
            switch (position) {
                case "top":
                    txtBlock.style.top = `${elemCrds.top - txtBlock.offsetHeight}px`;
                    break;
                case "right":
                    txtBlock.style.top = `${elemCrds.top}px`;
                    txtBlock.style.left = `${elemCrds.right}px`;
                    break;
                case "bottom":
                    txtBlock.style.top = `${elemCrds.bottom}px`;
                    break;
            }
            
            return updatePos.bind(this, txtBlock);
        }
        
        txtBlock.update = updatePos(txtBlock);
        return txtBlock;

    }

    let blockquote = document.querySelector('blockquote');
    
    showNote(blockquote, "top", "заметка сверху");
    showNote(blockquote, "right", "заметка справа");
    showNote(blockquote, "bottom", "заметка снизу");
    
    window.onscroll = () => {
        Object.values(notes).forEach((note) => note.update());
    };

    /* ************************                      ********************************************
*******************                                                    ********************** */


// 1-ая задача в одну строчку:

const bind = (f, context, ...args) => (...fArgs) => f.apply(context, args.concat(fArgs));


// Так как при использовании метода concat элементы массива добавляются в конец исходного массива,
//  то логично поменять имя массива:
function mul(a, b) {
        return a * b;
    }
    function bind(func, context) {
        var bindArgs = [].slice.call(arguments, 2);
        function wrapper() {
            var args = [].slice.call(arguments);
            var pushArgs = bindArgs.concat(args);
            return func.apply(context, pushArgs);
        }
        return wrapper;
    }
    var g = bind(mul, null, 2);
    alert( g(3) ); // 6


// =============================  собрать JSON =====================

var s = new Set(['foo', 'bar']);
function Set_toJSON(key, value) {
  if (typeof value === 'object' && value instanceof Set) {
    return [...value];
  }
  return value;
}

// Then:

const fooBar = { foo: new Set([1, 2, 3]), bar: new Set([4, 5, 6]) };
JSON.stringify(fooBar, Set_toJSON)

// Result:

"{"foo":[1,2,3],"bar":[4,5,6]}"
// 
// или 
JSON.stringify([...s]);
JSON.stringify([...s.keys()]);
JSON.stringify([...s.values()]);
JSON.stringify(Array.from(s));
JSON.stringify(Array.from(s.keys()));
JSON.stringify(Array.from(s.values()));


// =============================   Проверить строку на пустоту =====================


var test = "   ";
var test2 = " ыва ыва   ";

var str = '  ';

if (str != null && typeof str !== "undefined") {
   str = str.trim();
}

if (!str) { 
   console.log("Пусто");
}



// =============================   Как проверить объект на пустоту =====================

function isEmptyObject(obj) {
    for (var i in obj) {
        if (obj.hasOwnProperty(i)) {
            return false;
        }
    }
    return true;
}

// Либо так при помощи jQuery, если Вы не изменяли прототип Object:

if ($.isEmptyObject({});) {
     console.log('пуст');
}


if(!JSON.stringify({a:7})=='{}'){
 console.log('Не пуст')
}

// Или проверить наличие третьего символа в строке, пустой объект-строка всегда имеет 2 символа.

 if(JSON.stringify({a:7})[2]){
   console.log('Не пуст')
 }


// ============================= Деструктуризация =====================
let user = {};
[user.name, user.surname] = "Ilya Kantor".split(' ');

alert(user.name); // Ilya

// Или
let [a, b, c] = "abc"; // ["a", "b", "c"]

// Или
// значения по умолчанию
let [name = "Guest", surname = "Anonymous"] = ["Julius"];



// Или
let options = {
  title: "My menu",
  items: ["Item1", "Item2"]
};

function showMenu({
  title = "Untitled",
  width: w = 100,  // width присваиваем в w
  height: h = 200, // height присваиваем в h
  items: [item1, item2] // первый элемент items присваивается в item1, второй в item2
}) {
  alert( `${title} ${w} ${h}` ); // My Menu 100 200
  alert( item1 ); // Item1
  alert( item2 ); // Item2
}

showMenu(options);


// если нам нужны все значения по умолчанию, то нам следует передать пустой объект:

showMenu({}); // ок, все значения - по умолчанию


// Или
let title, width, height;

// сейчас всё работает
({title, width, height} = {title: "Menu", width: 200, height: 100});

alert( title ); // Menu

// Или
let options = {
  title: "Menu",
  height: 200,
  width: 100
};

// title = свойство с именем title
// rest = объект с остальными свойствами
let {title, ...rest} = options;

// сейчас title="Menu", rest={height: 200, width: 100}
alert(rest.height);  // 200
alert(rest.width);   // 100



// Цикл с .entries()
let user = {
  name: "John",
  age: 30
};

// цикл по ключам и значениям
for (let [key, value] of Object.entries(user)) {
  alert(`${key}:${value}`); // name:John, then age:30
}

// …то же самое для map:

let user = new Map();
user.set("name", "John");
user.set("age", "30");

for (let [key, value] of user) {
  alert(`${key}:${value}`); // name:John, then age:30
}

////////////////////////////// Работа с url
var url = "https://developer.mozilla.org/en-US/Web/JavaScript";

var parsedURL = /^(\w+)\:\/\/([^\/]+)\/(.*)$/.exec(url);
var [full, protocol, fullhost, fullpath] = parsedURL;

console.log(protocol); // выведет "https"

 
////////////////////////////// Берём 4-ый элемент из массива таким образом
 let { 3: fourth} = [1,2,3,4];
 console.log(fourth);
 ////////////////////////////// Деструктуризация результата функции

let {width} = (function genObj(){
  return {
    width: 100, height: 200
  }
})()


let salaries = {
  "John": ['man',100],
  "Pete": ['man',200],
  "Michael": ['man',200],
  "Mary": ['woman',250],
  "Alisa": ['woman',250],
  "Sandra": ['woman',250]
};

function topSalary(obj = {}) {
let [topName, topSalary, gender] = ['', 0,'man'];
let rest = [];
for (let [key,value] of Object.entries(obj)) {
if (value[1] > topSalary) [topName,topSalary,gender] = [key,value[1],value[0]]
}

for (let [key,value] of Object.entries(obj)) {
if (topName !== key && value[1] === topSalary) rest.push(key)
}
 
return `Сам${gender === 'woman' ? 'ая' : 'ый'} высокооплачеваем${gender === 'woman' ? 'ая' : 'ый'} работни${gender === 'woman' ? 'ца' : 'к'} ${topName}, 
в месяц он${gender === 'woman' ? 'а' : ''} получает ${topSalary} тыс. долларов${rest.length > 0 ? ', такая же зарплата у ' + rest.join(', ') + '.' : '.'}`;
}

console.log(topSalary(salaries)) // Самая высокооплачеваемая работница Mary, в месяц она получает 250 тыс. долларов, такая же зарплата у Alisa, Sandra



// ++++++++++++++++++++                Самая высокоопл


const topSalary = (obj) =>Object.entries(obj)
    .reduce(([maxName,max], [name,curr]) => (max > curr)? 
    [maxName, max] : [name, curr], [null, 0])[0];

// …то же самое 
   function topSalary(salaries) {
// if (Object.keys(salaries).length == 0) return null;
return Object.entries(salaries).reduce((a,b) => a>b?a:b,[ null, 0])[1];
}

// …то же самое 
const topSalary = (obj = {}) => {
var maxSal = Math.max(...Object.values(obj)); 
return Object.entries(obj).reduce((max,[name,salary]) =>  
salary === maxSal ? name : max, null) 

// …то же самое 
function topSalary(obj) {
let [name] = Object.entries(obj).reduce( ( max, next ) => 
    max[1] >= next[1] ? max : next , [ null, 0])
     return name;
} 


// ++++++++++++++++++++           массив, содержащий их длины
var arr = ["Есть", "жизнь", "на", "Марсе"];

var arrLength = [];
for (var i = 0; i < arr.length; i++) {
  arrLength[i] = arr[i].length;
}

alert( arrLength ); // 4,5,2,5


// …то же самое 


var arrLength = arr.map(function(item) {
  return item.length;
});

alert( arrLength ); // 4,5,2,5