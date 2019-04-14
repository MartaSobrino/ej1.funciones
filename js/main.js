'use strict';

  const myWordList =  [
    {
      text: 'Pencil',
      total: 6
    },
    {
      text: 'Thermo',
      total: 2
    },
    {
      text: 'TV',
      total: 8
    },
    {
      text: 'Phone',
      total: 4
    }
  ];

function writeThis(word, number){
  for(let i=0; i<number; i++){
      console.log(word);
  }
}

function writeMyArray (oneArray) {
  for(const item of oneArray){
    writeThis(item.text, item.total);
  }
}

writeMyArray(myWordList);