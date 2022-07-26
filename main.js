document.getElementById("btnSubmit5").onclick = function () {
  var primeNumber = [];
  var number5 = document.getElementById("number5").value * 1;
  for (i = 2; i <= number5; i++) {
    var a = true;
    for (var j = 2; j <= i / 2; j++) {
      if (i % j === 0) {
        a = false;
        break;
      }
    }
    if (a) primeNumber.push(i);
  }
  document.getElementById("thongBao5").innerHTML = primeNumber;
};
