
let extention1 = document.getElementById('extention1');
let trade = document.getElementById('ex-trade');
let earn = document.getElementById('ex-earn');
let finance = document.getElementById('ex-finance');
let product = document.getElementById('ex-product');
let usd = document.getElementById('usd');





let ng = "one"
let bu = "one"
let go = "one"
let come = "one"
let Livebuy = "one"
let Live = "one"
function buy(k){
  if(Livebuy == "one" && k == 1){
   
    extention1.style.display = "block"
  
   
    Livebuy = "two"
  }
  else if(Livebuy == "two"){
   
    extention1.style.display = "none"
    Livebuy = "one"
  }
  if(Live == "one" && k == 2){
   
    trade.style.display = "block"
  
   
    Live = "two"
  }
  else if(Live == "two"){
   
    trade.style.display = "none"
    Live = "one"
  }
  if(bu == "one" && k == 3){
   
    earn.style.display = "block"
  
   
    bu = "two"
  }
  else if(bu == "two"){
   
    earn.style.display = "none"
    bu = "one"
  }
  if(come == "one" && k == 4){
   
    finance.style.display = "block"
  
   
    come = "two"
  }
  else if(come == "two"){g
   
    finance.style.display = "none"
    come = "one"
  }
  if(go == "one" && k == 5){
   
    product.style.display = "block"
    
  
   
    go = "two"
  }
  else if(go == "two"){
   
    product.style.display = "none"
    
    go = "one"
  }


}


addEventListener(click, ()=>{
 if(k == 6 && go == "one"){
  usd.style.display = "block"
  go = "two"
 }
})


// const product1 = document.getElementById('product-arrow');
// const arrow = document.getElementById('green-arrow');



// function pro(y){
//   if(y == 1){
//     arrow.style.display = "block"
//     product1.style.display = "none"
//   }else if(y == 2){
//        arrow.style.display = "none"
//     product1.style.display = "block"
//   }
// }



