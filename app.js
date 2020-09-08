document.addEventListener('DOMContentLoaded', ()=>{
    console.log('DOM is loaded!')
})

const container= document.getElementById('container');
console.log(container);

const h1= document.createElement('h1');
console.log(h1);
h1.innerText= 'Hogwarts';
//document.body.appendChild(h1); //this would append the created h1 element to the body
container.appendChild(h1);