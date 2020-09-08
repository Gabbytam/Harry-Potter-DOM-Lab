document.addEventListener('DOMContentLoaded', ()=>{
    console.log('DOM is loaded!')
})

const container= document.getElementById('container');
console.log(container);

const h1= document.createElement('h1');
//console.log(h1);
h1.innerText= 'Hogwarts';
//document.body.appendChild(h1); //this would append the created h1 element to the body
container.appendChild(h1);

const h2= document.createElement('h2');
h2.innerText= 'Gabrielle';

const h3= document.createElement('h3');
h3.innerText= 'Slytherin';
//console.log(h3);

const h4= document.createElement('h4');
h4.innerText= 'Fredrick';
h4.className= 'owl';
console.log(h4);

const h4Wand= document.createElement('h4');
h4Wand.innerText= 'Birch Wand with Phoenix Feather Core';

container.appendChild(h2);
container.appendChild(h3);
container.appendChild(h4);
container.appendChild(h4Wand);