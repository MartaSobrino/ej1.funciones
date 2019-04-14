'use strict';

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
  }

function ten(word, number){
    for(let i=0; i<number; i++){
       console.log(word);
    }
}

ten('aguacate', getRandomNumber(10));
ten('patata', getRandomNumber(10));
ten('pizza', getRandomNumber(10));
