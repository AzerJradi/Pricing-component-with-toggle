var switches = document.getElementsByClassName("switch");
var prices1 = document.getElementById("a");
var prices2 = document.getElementsByClassName("b");
var prices3 = document.getElementsByClassName("x");
var btns1 = document.getElementsByClassName("btn");
var btn2 = document.getElementById("btn");
var btns3 = document.getElementsByClassName("btnn");

for (let i = 0; i < switches.length; i++) {
  switches[i].addEventListener("click", function () {
    if (btns1[i].style.backgroundColor === "white") {
      btns1[i].style.backgroundColor = "darkorchid";
      btns1[i].style.color = "white";  // Fixed the assignment operator here
    } else {
      btns1[i].style.backgroundColor = "white";
      btns1[i].style.color = "darkorchid";  // Fixed the assignment operator here
    }

    if (btn2.style.backgroundColor === "darkorchid") {
      btn2.style.backgroundColor = "white";
      btn2.style.color = "darkorchid";
    } else {
      btn2.style.backgroundColor = "white";
      btn2.style.color = "darkorchid"; 
    }
    if (btns3[i].style.backgroundColor === "white") {
      btns3[i].style.backgroundColor = "darkorchid";
      btns3[i].style.color = "white";  
    } else {
      btns3[i].style.backgroundColor = "white";
      btns3[i].style.color = "darkorchid"; 
    }
    if (prices1.innerText === "$19.99") {
      prices1.innerText = "$199.99";
    } else {
      prices1.innerText = "$19.99";
    }
    if (prices2[i].innerText === "$24.99") {
      prices2[i].innerText = "$249.99";
    } else {
      prices2[i].innerText = "$24.99";
    }

    if (prices3[i].innerText === "$39.99") {
      prices3[i].innerText = "$399.99";
    } else {
      prices3[i].innerText = "$39.99";
    }
  });
}
