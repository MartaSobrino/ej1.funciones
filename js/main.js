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

  function writeMyArray () {
    for (const item of myWordList){
      for(let i=0; i<item.total; i++){
        console.log(item.text);
      }
    }
  }

writeMyArray();
