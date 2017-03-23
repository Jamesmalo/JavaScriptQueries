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
  let color = "#990099"
  let opcolor = "#66FF66"
  const doc = document;
  let divs = doc.querySelectorAll("#diffcolor div")
    for(let i=0;i<divs.length;i++){
      if(i % 2 ==0){
        return divs[i].style.backgroundColor = color;
      }
      else{
        return divs[i].style.backgroundColor = opcolor;
      }
    }
}
//declare diffcolor() here
