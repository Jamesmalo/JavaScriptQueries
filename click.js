//declare samecolor() here
function samecolor(){
  let color = "#009900"
  const doc = document;
  let divs = doc.querySelectorAll("#samecolor div");
    for(let i=0;i<divs.length;i++){
      divs[i].style.backgroundColor = color;
    }
}
function diffcolor(){
  let color = "#990099"
  const doc = document;
  let divs = doc.querySelectorAll("#diffcolor div")
    for(let i=0;i<samecolor.length;i++){
      divs[i].style.backgroundColor = color;
    }
}
//declare diffcolor() here
