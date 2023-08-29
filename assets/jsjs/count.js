var counterElement = document.getElementById("counter");


if (localStorage.getItem("counter")) {

    var count = parseInt(localStorage.getItem("counter"));
    counterElement.textContent = count;
} else {

    var count = 0;
}


count++;
counterElement.textContent = count;
localStorage.setItem("counter", count.toString());