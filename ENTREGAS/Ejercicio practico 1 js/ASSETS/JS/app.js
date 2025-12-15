var diametro=prompt("Ingrese un diámetro de la circunferencia")
radio=diametro/2;
area=Math.PI*Math.pow(radio,2);


console.log(area);

window.alert("El valor del ára para la circunferencia de diámetro " + diametro + " es igual a " + area);

resultado=document.getElementById("resultado");
resultado.innerHTML="El valor del área para la circunferencia de diámetro " + diametro + " es igual a " + area;
