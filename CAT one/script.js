function myFunction() {
  var x = document.getElementById("SignUp");
  var text = "";
  var i;
  for (i = 0; i < x.length ;i++) {
    text += x.elements[i].value.toUpperCase() + "<br>";
  }
  document.getElementById("output").innerHTML = text;
}