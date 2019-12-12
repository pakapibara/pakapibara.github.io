var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/fuji.jpg') {
      myImage.setAttribute ('src','images/fuji2.jpg');
    } else {
      myImage.setAttribute ('src','images/fuji.jpg');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('あなたの名前を入力してください。');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'ようこそ、' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'ようこそ，' + storedName;
}

myButton.onclick = function() {
  setUserName();
}