function soBoaNoticia(nota) {
    if(nota >= 7) {
        console.log('Aprovado com ' + nota)
    }
}

soBoaNoticia(8.1);
soBoaNoticia(6.1);

function seForVerdadeEuFalo(valor) {
    if(valor) {
        console.log('É verdade...' + valor)
    }
}

seForVerdadeEuFalo() // false, não imprimi no console.
seForVerdadeEuFalo(null) // false, não imprimi no console.
seForVerdadeEuFalo(undefined) // false, não imprimi no console.
seForVerdadeEuFalo(NaN) // false, não imprimi no console.
seForVerdadeEuFalo('') // false, não imprimi no console.
seForVerdadeEuFalo(0) // falso, não imprimi no console.
seForVerdadeEuFalo(-1) // true
seForVerdadeEuFalo(' ') // true
seForVerdadeEuFalo('?') // true 
seForVerdadeEuFalo([]) // true
seForVerdadeEuFalo([1, 2]) // true
seForVerdadeEuFalo({}) // true