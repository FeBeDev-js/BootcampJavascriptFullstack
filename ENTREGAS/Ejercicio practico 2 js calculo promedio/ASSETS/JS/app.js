window.alert("A continuación deberá ingresar 3 notas para calcular el promedio del alumno");
var nota1=parseFloat(prompt("Ingrese Nota1:"));
var nota2=parseFloat(prompt("Ingrese Nota2:"));
var nota3=parseFloat(prompt("Ingrese Nota3:"));

promedio=(nota1+nota2+nota3)/3;

if (promedio>=6.0){
    document.write("Excelente! Tienes promedio " + promedio);
    }else if(promedio <6.0 && promedio>=5.0){
        document("Tienes promedio " + promedio + ". Sigue adelante, puedes mejorar!");
    }else if(promedio >=4.0 && promedio <5.0){
        document.write("Tienes promedio " + promedio + ". Debes esforzarte más.");
    }
    else{
        document.write("Has reprobado con promedio " + promedio + ". Continúa intentandolo");
    }