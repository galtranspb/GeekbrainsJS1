'use strict';

(function () {
  // 5. *Нарисовать пирамиду с помощью console.log, как показано на рисунке,
  // только у вашей пирамиды должно быть 20 рядов, а не 5:
  // x
  // xx
  // xxx
  // xxxx
  // xxxxx

  const numberOfRows = 20;

  let drawPyramid = function (value) {
    for(let string = 'x'; string.length < value; string += 'x'){
      console.log(string);
    }
  };

  console.log('Задача 5');
  drawPyramid(numberOfRows);

})();