'use strict';

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
  }

const random = getRandomNumber(10);
console.log(random);

function ten(word, number){
    for(let i=0; i<number; i++){
       console.log(word);
    }
}

ten('aguacate', random);
ten('patata', random);
ten('pizza', random);
