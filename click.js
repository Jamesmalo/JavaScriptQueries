//declare samecolor() here
function samecolor(){
  let color = "#009900"
  const doc = document;
  let divs = doc.querySelectorAll("#samecolor div");
    for(let i=0;i<divs.length;i++){
      divs[i].style.backgroundColor = color;
      divs[i].style.opacity = Math.random();
    }
}
function diffcolor(){
  const doc = document;
  let divs = doc.querySelectorAll("#diffcolor div")
    for(let i=0;i<divs.length;i++){
      if(i % 2 == 0){
        divs[i].style.backgroundColor = "#990099";
      }
      else{
        divs[i].style.backgroundColor = "#66FF66";
      }
    }
}
//declare diffcolor() here
