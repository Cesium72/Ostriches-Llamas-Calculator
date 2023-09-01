function calculate() {
  var heads = parseFloat(document.getElementById("heads").value);
  var legs = parseFloat(document.getElementById("legs").value);
  var llamas = (legs - (heads * 2))/2;
  var ostriches = (legs - (llamas * 4))/2;
  document.getElementById("result").innerHTML = `Llamas: ${llamas}<br/>Ostriches: ${ostriches}`;
}