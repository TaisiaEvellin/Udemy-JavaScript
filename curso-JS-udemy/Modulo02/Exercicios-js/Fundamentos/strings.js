const escola = "Cod3r";

console.log (escola.charAt(4)); // Pegar um determinado caractere dentro de uma String.
console.log (escola.charAt(5)); // Ao executar, retorna o valor vazio pois não encontra o 5 caractere.
console.log (escola.charCodeAt(3)); // Pegar o código do caractere "3" na constante "Cod3r".
console.log (escola.indexOf('3')); // Pegar a partir de um caractere que pertence a String o índice dele.

console.log (escola.substring(1)); //Passando o índice inicial.
console.log (escola.substring(0, 3)); // Passando o índice inicial e final.

console.log ('Escola '.concat(escola).concat("!")); // Concatenação
console.log (escola.replace(3, 'e'));  //Substituição

console.log ('Ana,Maria,Pedro'.split(',')); 



