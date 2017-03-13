/* globals $ */
'use strict';

function createRandomDiv() {
  var randomDiv = document.createElement('div');
  $(randomDiv).css({
    'background-color' : 'black',
    'width'  : Math.random() * 20 + 10,
    'height' : Math.random() * 20 + 10,
    'left'   : Math.random() * 500,
    'top'    : Math.random() * 500
  });

  return randomDiv;
}

for (var i = 0; i < 10; i++) {
  var newDiv = createRandomDiv();
  $('#zone-1').append(newDiv);
}
