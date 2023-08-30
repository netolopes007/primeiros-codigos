alert ("Supermerca do Torquato");
let produtos=0, preco=0, precototal=0;
while (preco!=-1){
preco=parseFloat(prompt("Preço R$"));
precototal+=preco;
produtos++;
}
precototal+=1;
produtos-=1;

alert ("  Quantidade  " + produtos+" : " + "R$" + precototal);