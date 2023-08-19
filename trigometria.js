var trigonometria=prompt("Escolha \n1.Sen\n2.Cos\n3.tag");
var angulo = prompt ("Digite o ângulo");
switch (trigonometria){
    case '1':
        alert (Math.sin((angulo*Math.PI)/180).toFixed(2)); break;
        case '2':
            alert (Math.cos((angulo*Math.PI)/180).toFixed(2)); break;
            case '3':
                alert (Math.tan((angulo*Math.PI)/180).toFixed(2));break;
                default:
                    alert ("opção inválida");

}