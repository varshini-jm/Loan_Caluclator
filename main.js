 const drumlength=document.querySelectorAll('.drum').length;
console.log(drumlength);
for (let i=0;i<drumlength;i++){
    document.querySelectorAll('.drum')
    [i].addEventListener('click', function(e){
makeNoise(this.innerHTML);
    })
};
function makeNoise(key){
switch(key){
 case"s":
  const sa = new Audio("Sounds/sa (7).wav");
  sa.play();
  break;

 case"r":
  const re = new Audio("Sounds/re.wav");
  re.play();
  break;

 case"g":
  const ga = new Audio(" Sounds/ga.wav");
  ga.play();
  break;

 case"m":
  const ma = new Audio("Sounds/ma.wav");
  ma.play();
  break;

 case"p":
  const pa = new Audio("Sounds/pa.wav");
  pa.play();
  break;

 case"d":
   const da = new Audio("Sounds/da.wav");
   da.play();
  break;

 case"n":
   const ni = new Audio("Sounds/ni.wav");
  ni.play();
  break;

 case"b":
  const saa = new Audio("Sounds/saa.wav");
  saa.play();
  break;

    }
}