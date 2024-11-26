var $screen = $("#screen");

document.getElementById("num1").onclick = function write1() {
  $screen.append(1);
};

document.getElementById("num2").onclick = function write2() {
  $screen.append(2);
};

document.getElementById("num3").onclick = function write3() {
  $screen.append(3);
};

document.getElementById("num4").onclick = function write4() {
  $screen.append(4);
};

document.getElementById("num5").onclick = function write5() {
  $screen.append(5);
};

document.getElementById("num6").onclick = function write6() {
  $screen.append(6);
};

document.getElementById("num7").onclick = function write7() {
  $screen.append(7);
};

document.getElementById("num8").onclick = function write8() {
  $screen.append(8);
};

document.getElementById("num9").onclick = function write9() {
  $screen.append(9);
};

document.getElementById("num0").onclick = function write0() {
  $screen.append(0);
};


var $screen = $("#screen");
var $number = $(".number");


document.getElementById("clear").onclick = function writeClear() {
  $("#screen").empty();
};

document.getElementById("plus").onclick = function writePlus() {
  $("#screen").append("+");
  op = "+";
};

document.getElementById("minus").onclick = function writeMinus() {
  console.log("minus");
  $("#screen").append("-");
  op = "-";
};

document.getElementById("times").onclick = function writeMultiply() {
  console.log("times");
  $("#screen").append("x");
  op = "x";
};

document.getElementById("divide").onclick = function writeDivide() {
  $("#screen").append("/");
  op = "/";
};

var num1 = 11;
var num2 = 11;

document.getElementById("equals").onclick = function writeEqual() {
  $screen.append("=");
  var screenContent = $screen.text();
  var parts = screenContent.split(/(\+|\-|\x|\/|=)/);
  num1 = parseInt(parts[0]);
  op = parts[1];
  num2 = parseInt(parts[2]);
  console.log(num1, op, num2);
  if (op == "+") {
    answer = num1 + num2;
  }
  if (op == "-") {
    answer = num1 - num2;
  }
  if (op == "x" || op == "*") {
    answer = num1 * num2;
  }
  if (op == "/") {
    if (num2 == 0) {
      answer = "Error";
    } else {

answer = num1 / num2;
    }
  }
  $screen.append(answer);
};























