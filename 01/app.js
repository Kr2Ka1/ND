console.log('Pradedam!');

function rand(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

//1


const tagH1 = document.querySelector('h1');

tagH1.innerText = 1;

const tagH2 = document.querySelector('h2');

tagH2.innerText = 2;

const tagH3 = document.querySelector('h3');

tagH3.innerText = 3;

const tagH4 = document.querySelector('h4');

tagH4.innerText = 4;


// kodėl kai ketvirta eilutė atsiranda rodo ją vietoje trečios kai ją užkomentuoju, rodoo trečią?


//2


const div1 = document.querySelector('div:nth-of-type(1)');
const div2 = document.querySelector('div:nth-of-type(2)');

// div1.innerText = 'Laimas';
// div2.innerText = 'Kaladė';

div1.style.width = '40px';
div1.style.height = '40px';
div1.style.backgroundColor = 'blue';

div2.style.width = '40px';
div2.style.height = '40px';
div2.style.borderRadius = '20px';
div2.style.backgroundColor = 'red';

// 3


const A = document.querySelector('section#go3 span:nth-of-type(1)');
const B = document.querySelector('section#go3 span:nth-of-type(2)');
const suma = document.querySelector('section#go3 span:nth-of-type(3)');

const a1 = rand(0, 4);
const b1 = rand(0, 4);
let suma1;
let biger;
let smaller;

console.log(a1, b1);
if (a1 > b1) {
    biger = a1
} else {
    biger = b1
}
if (a1 < b1) {
    smaller = a1;
} else {
    smaller = b1;
}
if (a1 === b1) {
    biger = a1;
}

if (a1 > b1) {
    suma1 = biger / smaller;
}
if (a1 === b1) {
    suma1 = 1;
}
if (a1 < b1) {
    suma1 = smaller / biger;
}
if (b1 === 0) {
    suma1 = 'dalyba negalima';
}





A.innerText = a1;
B.innerText = b1;
suma.innerText = suma1;

// if (tag1 / tag2){
//     console.log()
// }
// tag3.innerText = parseInt(tag1 / tag2);



// let tag3 = tag1 / tag2;
// const tag3 = (tag1 / tag2);



//4

const A4 = document.querySelector('section#go4 div:nth-of-type(1)');
const B4 = document.querySelector('section#go4 div:nth-of-type(2)');
const C4 = document.querySelector('section#go4 div:nth-of-type(3)');
const section_4 = document.querySelector('section#go4');

section_4.style.display = 'flex';

const uzd4a = rand(50, 200);
const uzd4b = rand(50, 200);
const uzd4c = rand(50, 200);

let small;
let big;
let large;

console.log(uzd4a, uzd4b, uzd4c);



if (uzd4a <= uzd4b && uzd4a <= uzd4c) {
    small = uzd4a;
    if (uzd4b >= uzd4c) {
        big = uzd4c;
        large = uzd4b;
    }
    else if (uzd4c >= uzd4b) {
        large = uzd4c;
        big = uzd4b;
    }
}


else if (uzd4b <= uzd4a && uzd4b <= uzd4c) {
    small = uzd4b;
    if (uzd4a >= uzd4c) {
        big = uzd4c;
        large = uzd4a;
    }
    else if (uzd4c >= uzd4a) {
        large = uzd4a;
        big = uzd4c;
    }
}

else if (uzd4c <= uzd4b && uzd4c <= uzd4a) {
    small = uzd4c;
    if (uzd4a >= uzd4b) {
        big = uzd4b;
        large = uzd4a;
    }
    else if (uzd4b >= uzd4a) {
        large = uzd4b;
        big = uzd4a;
    }
}


A4.style.width = small + 'px';
A4.style.height = small + 'px';
A4.style.borderRadius = '50%';
A4.style.backgroundColor = 'skyblue';

B4.style.width = big + 'px';
B4.style.height = big + 'px';
B4.style.borderRadius = '50%';
B4.style.backgroundColor = 'pink';

C4.style.width = large + 'px';
C4.style.height = large + 'px';
C4.style.borderRadius = '50%';
C4.style.backgroundColor = 'green';







//5

const skaiciai = document.querySelector('section#go5 span:nth-of-type(1)');
const skaiciai2 = document.querySelector('section#go5 span:nth-of-type(2)');
const skaiciai3 = document.querySelector('section#go5 span:nth-of-type(3)');


const sk1 = rand(-10, 10);
const sk2 = rand(-10, 10);
const sk3 = rand(-10, 10);

if (sk1 < 0) {
    skaiciai.style.color = "red";
} else if (sk1 > 0) {
    skaiciai.style.color = "blue";
} else if (sk1 == 0) {
    skaiciai.style.color = "green";
}

if (sk2 < 0) {
    skaiciai2.style.color = "red";
} else if (sk2 > 0) {
    skaiciai2.style.color = "blue";
} else if (sk2 == 0) {
    skaiciai2.style.color = "green";
}

if (sk3 < 0) {
    skaiciai3.style.color = "red";
} else if (sk3 > 0) {
    skaiciai3.style.color = "blue";
} else if (sk3 == 0) {
    skaiciai3.style.color = "green";
}



skaiciai.innerText = sk1;
skaiciai2.innerText = sk2;
skaiciai3.innerText = sk3;




// 6 span find

const uzd6span1 = document.querySelector('section#go6 [data-amount] span');
const uzd6span2 = document.querySelector('section#go6 [data-subtotal] span');
const uzd6span3 = document.querySelector('section#go6 [data-discount] span');
const uzd6span4 = document.querySelector('section#go6 [data-total] span');

const zvakiuKiekis = rand(5, 3000);
let uzd6suma;
uzd6span2.innerText = zvakiuKiekis;
uzd6span1.innerText = zvakiuKiekis;


if(zvakiuKiekis >= 1000 && zvakiuKiekis<2000){
    uzd6span3.innerText = 3;
    uzd6suma = zvakiuKiekis * 0.97;
} else if (zvakiuKiekis >= 2000 && zvakiuKiekis < 3000){
    uzd6span3.innerText = 4;
    uzd6suma = zvakiuKiekis * 0.96;
} else if (zvakiuKiekis < 1000){
    uzd6span3.innerText = 0;
    uzd6suma = zvakiuKiekis;
    
}


uzd6span4.innerText = uzd6suma;

console.log();



// 7

const uzd7div = document.querySelector('section#go7 div');

const figure = rand(1, 3);

if(figure === 1){


uzd7div.style.width = '60px';
uzd7div.style.height = '60px';
uzd7div.style.borderRadius = '60%';
uzd7div.style.backgroundColor = 'skyblue';
} else if (figure === 2){

uzd7div.style.width = '60px';
uzd7div.style.height = '60px';
uzd7div.style.backgroundColor = 'pink';
} else {
uzd7div.style.width = '0px';
uzd7div.style.height = '0px';
uzd7div.style.borderLeft = '60px solid transparent';
uzd7div.style.borderRight = '60px solid transparent';
uzd7div.style.borderBottom = '60px solid orange';
}



// console.log(next);




//8

const uzd8span1 = document.querySelector('section#go8 [data-green] span');
const uzd8span2 = document.querySelector('section#go8 [data-red] span');
const uzd8span3 = document.querySelector('section#go8 [data-blue] span');
const uzd8div1 = document.querySelector('section#go8 div:nth-of-type(1)');
const uzd8div2 = document.querySelector('section#go8 div:nth-of-type(2)');
const uzd8div3 = document.querySelector('section#go8 div:nth-of-type(3)');
const uzd8div4 = document.querySelector('section#go8 div:nth-of-type(4)');
const uzd8div5 = document.querySelector('section#go8 div:nth-of-type(5)');
const uzd8div6 = document.querySelector('section#go8 div:nth-of-type(6)');




let raudonas = 0;
let zalias = 0;
let melynas = 0;

if (uzd8div1.style.backgroundColor == 'red') {
    raudonas++;
} else if (uzd8div1.style.backgroundColor == 'blue') {
    melynas++;
} else {
    zalias++;
}

if (uzd8div2.style.backgroundColor == 'red') {
    raudonas++;
} else if (uzd8div2.style.backgroundColor == 'blue') {
    melynas++;
} else {
    zalias++;
}

if (uzd8div3.style.backgroundColor == 'red') {
    raudonas++;
} else if (uzd8div3.style.backgroundColor == 'blue') {
    melynas++;
} else {
    zalias++;
}

if (uzd8div4.style.backgroundColor == 'red') {
    raudonas++;
} else if (uzd8div4.style.backgroundColor == 'blue') {
    melynas++;
} else {
    zalias++;
}

if (uzd8div5.style.backgroundColor == 'red') {
    raudonas++;
} else if (uzd8div5.style.backgroundColor == 'blue') {
    melynas++;
} else {
    zalias++;
}
if (uzd8div6.style.backgroundColor == 'red') {
    raudonas++;
} else if (uzd8div6.style.backgroundColor == 'blue') {
    melynas++;
} else {
    zalias++;
}


uzd8span1.innerText = zalias;
uzd8span2.innerText = raudonas;
uzd8span3.innerText = melynas;




//9

const uzd9 = document.querySelectorAll('#go9 div');

for (let i = 0; i < uzd9.length; i++) {
    const row = uzd9[i];
    const spans = row.querySelectorAll('span');

    const num1 = spans[0].textContent;
    const num2 = spans[1].textContent;

    const result = num1 * num2;

    spans[2].innerText = result;
}


//10

const uzd10div1 = document.querySelector('#go10 div:nth-of-type(1)');
const uzd10div2 = document.querySelector('#go10 div:nth-of-type(2)');
const uzd10div3 = document.querySelector('#go10 div:nth-of-type(3)');
const uzd10div4 = document.querySelector('#go10 div:nth-of-type(4)');
const uzd10div5 = document.querySelector('#go10 div:nth-of-type(5)');


if (uzd10div1) {
    const width = parseInt(uzd10div1.style.width);
    const height = parseInt(uzd10div1.style.height);
    const plotas = width * height;
    if (plotas > 10000) {
        uzd10div1.style.backgroundColor = 'red'
    }
}

if (uzd10div2) {
    const width = parseInt(uzd10div2.style.width);
    const height = parseInt(uzd10div2.style.height);
    const plotas = width * height;
    if (plotas > 10000) {
        uzd10div2.style.backgroundColor = 'red'
    }
}

if (uzd10div3) {
    const width = parseInt(uzd10div3.style.width);
    const height = parseInt(uzd10div3.style.height);
    const plotas = width * height;
    if (plotas > 10000) {
        uzd10div3.style.backgroundColor = 'red'
    }
}

if (uzd10div4) {
    const width = parseInt(uzd10div4.style.width);
    const height = parseInt(uzd10div4.style.height);
    const plotas = width * height;
    if (plotas > 10000) {
        uzd10div4.style.backgroundColor = 'red'
    }
}

if (uzd10div5) {
    const width = parseInt(uzd10div5.style.width);
    const height = parseInt(uzd10div5.style.height);
    const plotas = width * height;
    if (plotas > 10000) {
        uzd10div5.style.backgroundColor = 'red'
    }
}




