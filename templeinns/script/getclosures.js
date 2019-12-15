fetch('script/templeclosure.json')
.then(response => response.json())
.then(function(json) {
  for (var t=0; t<=json.temples.length; t++) {
    var list="";
    for (var i=0;  i<json.temples[t].closures.length;  i++) {
      list += json.temples[t].closures[i] + "<br><br>";
    }
    document.getElementById("closure"+t).innerHTML = list;
  }
});