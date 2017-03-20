function fareheit(){
  var elemento=document.getElementById("farenheit").value;
  var resultado=  ((elemento-32) /1.8).toFixed(2);

  document.getElementById("celcius").value = resultado;
}

function celcius(){
  var elemento = document.getElementById("celcius").value;
  var resultado=  elemento * 1.8 + 32 ;

  document.getElementById("farenheit").value = resultado;
}
