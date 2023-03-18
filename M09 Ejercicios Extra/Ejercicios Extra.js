/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   let arrayDeArray = []
   for (let prop in objeto) {
      let miniArray = [prop, objeto[prop]];
      arrayDeArray.push(miniArray);
   }
   return arrayDeArray
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   let objeto = {}
   for(let letra of string) {
      if (objeto.hasOwnProperty(letra)) objeto[letra] += 1;
      else {
         objeto[letra] = 1}
   }
   return objeto
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   let minusculas = ""
   let mayusculas = ""

   for(let letra of string) {
      if (letra === letra.toUpperCase()) mayusculas += letra;
      else minusculas += letra; 
   }
   return mayusculas + minusculas;
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   let words = frase.split(" ");

   let reverseWords = words.map((elem) => {
      let res = ""
      for(let i = elem.length - 1; i >= 0; i--) {
         res = res + elem[i];
      }
      return res
   })
   return reverseWords.join(" ")
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
     let div = String(numero).split("");
     let rigth = null
     let left = null

     if (div.length % 2 === 0) {
      left = div.slice(0, div.length / 2)
      rigth = div.slice(div.length / 2)
     }
     if (div.length % 2 === 1) {
      left = div.slice(0, (div.length - 1) / 2)
      rigth = div.slice((div.length + 1) / 2)
     }

     for (let i = 0; i < div.length; i++){
      if (div[i] !== div[div.length - 1 - i])
      return "No es capicua"
     }
     return "Es capicua"
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:

   let stringfinal = []
   let letra = string.split("")
   for(let i = 0; i < letra.length; i++) {
      if (letra[i] !== "a" && letra[i] !== "b" && letra[i] !== "c")
      stringfinal.push(letra[i])
   }
   return stringfinal.join("")
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:

   for(let i = 0; i < arrayOfStrings.length - 1; i ++) {
      for(let j = i; j < arrayOfStrings.length; j++)
      if(arrayOfStrings[i].length > arrayOfStrings[j].length) {
         let temp = arrayOfStrings[i]
         arrayOfStrings[i] = arrayOfStrings[j]
         arrayOfStrings[j] = temp
      }
   }
   return arrayOfStrings
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   let array3 = []
   for(let i = 0; i < array1.length; i++) {
      for(let j = 0; j < array2.length; j++) {
         if(array1[i] === array2[j])
         array3.push(array1[i])
      }
   }
   return array3
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
