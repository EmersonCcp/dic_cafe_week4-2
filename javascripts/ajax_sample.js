let number = 0; //--1
let data = [];
const titleArea = document.getElementById("title"); //--2
const contentArea = document.getElementById("content"); //--2
const videoArea = document.getElementById("video"); //--2
const button = document.getElementById("btn"); //--3

function getData(callback) {
  const request = new XMLHttpRequest();
  request.onreadystatechange = function () {
    if (request.readyState == 4 && request.status == 200) {
      data = JSON.parse(request.responseText);
      callback();
    }
  };

  request.open("GET", "ajax.json");
  request.responseType = "json";
  request.send(null);
}

function changeVideo() {
  if (data.length > 0) {
    titleArea.innerHTML = data[number].title;
    contentArea.innerHTML = data[number].content;
    videoArea.setAttribute("src", data[number].url);
    number == 2 ? (number = 0) : number++;
  } else {
    getData(changeVideo);
  }
}

window.onload = getData(changeVideo);
