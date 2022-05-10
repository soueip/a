 
var like=document.getElementsByClassName("like");
var plusBtn=document.getElementsByClassName('plus-btn');
var minBtn=document.getElementsByClassName('minus-btn');
var prix=document.getElementsByClassName('price');
var Delete = document.getElementsByClassName("delete");
var item = document.getElementsByClassName("Item");
var total=document.getElementById('finalPrice');

for(let i=0; i<plusBtn.length;i++){
    let onelike=like[i];
    let onePlus=plusBtn[i];
    let oneMin=minBtn[i];
    let del = Delete[i];
    let oneprix=parseInt( prix[i].innerHTML);
    let quant;
    function sum(x,y){
        return(x+y)
    }
    function divs(x,y){
        return(x-y)
    }

   onePlus.addEventListener('click',function(){
       onePlus.previousElementSibling.value++;
       quant=parseInt(onePlus.previousElementSibling.value);
       prix[i].innerHTML=quant*oneprix;
        total.value=sum(parseInt(total.value),oneprix);

   })
    oneMin.addEventListener('click',function(){
       if(oneMin.nextElementSibling.value>1){
       oneMin.nextElementSibling.value--;
       quant=parseInt(onePlus.previousElementSibling.value);
       prix[i].innerHTML=quant*oneprix;
       total.value=divs(parseInt(total.value),oneprix);
       }})




   del.addEventListener("click", function () {
    item[i].remove();
  });
  var p=0;
  onelike.addEventListener('click',function(){
    if(onelike.firstElementChild.style.color!="red"){
        onelike.firstElementChild.style.color="red";
    }
    else {
        onelike.firstElementChild.style.color="black";
    }
    
  })
}


