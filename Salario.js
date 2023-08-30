var salario = 0;
var salarioliquido = 0;
var salarioBase = parseFloat(prompt("Quanto é seu salário base? "));  
var horaSemanalTrabalhada = parseFloat(prompt("Quantas horas semanais trabalha? "));
var hora = salarioBase/160 // 40h da carga trabalhada semanal * 4 semanas do mês aproximada
var horaExtra = hora*1.5;
 if(horaSemanal = Trabalhada >= 40){
salario= salarioBase +(horaExtra *(horaSemanalTrabalhada-40));
salarioliquido = salario * 0.975; // ISS calculado é 2,5% alert("Salário bruto é de R$"+ salario.toFixed(2));
alert(" Salário líquido é de R$" + salarioLiquido.toFixed(2));
 }
else {
salario salarioBase - (horaSemanal Trabalhada*hora);
salarioliquido salario * 0.975
}
; alert("Salário bruto é de R$"+ salario.toFixed(2));

alert(" Salário líquido é de R$" + salarioliquido.toFixed(2));