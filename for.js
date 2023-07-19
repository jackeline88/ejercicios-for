//1. Crea un programa que imprima en consola los números impares del 1 al 50.

for (let i = 1; i <= 50; i++) {
    if (i % 2 === 1){ 
    console.log(i + "Es un número impar");

}else{
    console.log(i + "es un número par")

}
 }

 //2. Crea un programa que pregunte al usuario un número. Usando el archivo de arreglo de Pokémons, mostrar solo los nombres de los Pokémons cuyos números que son múltiplos de 5 desde 1 hasta el número introducido por el usuario. https://pastebin.com/Zzk8g7Z6.
  
 let usuario = prompt("Ingrese un número");
 let numero = []

 for(let numero = 1; numero<= usuario; numero++);
 if(numero % 5 === 0){
    alert(numero + "eres un Mewtwo");
 }else{
    alert("No eres un pokemón ")
 }

 //3. Crea un programa que recorra el arreglo [4,”dos”,8,”tres”,5,9,1,”cero”] y muestre en consola solo los elementos que son tipo número.

 
 const arreglo = [4, "dos", 8, "tres", 5, 9, 1, "cero"];

function mostrarNumerosEnConsola(arreglo) {
  for (const elemento of arreglo) {
    if (typeof elemento === "number") {
      console.log(elemento);
    }
  }
}

mostrarNumerosEnConsola(arreglo);
