'use strict';

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
  }

const randomAguacate = getRandomNumber(10);
const randomPatata = getRandomNumber(10);
const randomPizza = getRandomNumber(10);

function ten(word, number){
    for(let i=0; i<number; i++){
       console.log(word);
    }
}

ten('aguacate', randomAguacate);
ten('patata', randomPatata);
ten('pizza', randomPizza);
