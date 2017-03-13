'use strict';

var englishDiv = document.getElementById('text-en');
englishDiv.style.backgroundColor = 'black';
englishDiv.style.color = 'white';

var importants = document.getElementsByClassName('important');
for (var i = 0; i < importants.length; i++) {
  var important = importants[i];
  important.style.textDecoration = 'underline';
  important.style.color = 'red';
}

var listDontLike = document.getElementById('dont-like');
for (var i = 0; i < listDontLike.children.length; i++) {
  var dontLike = listDontLike.children[i];
  dontLike.style.fontStyle = 'italic';
}
