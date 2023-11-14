let number = 0;
const titleArea = document.getElementById("title");
const contentArea = document.getElementById("content");
const videoArea = document.getElementById("video");
const button = document.getElementById("btn");

let data = [];

function getData() {
  // 1. generar objeto XMLHttpRequest
  const request = new XMLHttpRequest();
  // 2. Configurar event handlers en el objeto XMLHttpRequest
  request.onreadystatechange = function () {
    if ((request.readyState = 4)) {
      if (request.status == 200) {
        console.log(request.response);
        data = request.response;
      }
    }
  };

  // 3. enviar la solicitud
  request.open("GET", "ajax.json");
  request.responseType = "json";
  request.send(null);
}

function changeVideo() {
  getData();
  button.addEventListener("click", (e) => {
    titleArea.innerHTML = data[number].title;
    contentArea.innerHTML = data[number].content;
    videoArea.setAttribute("src", data[number].url);
    number === 2 ? (number = 0) : number++;
  });
}

window.onload = changeVideo;
