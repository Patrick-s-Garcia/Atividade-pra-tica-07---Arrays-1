let numeros = []

for(i=1; i<=5; i++){
    let numero = Number(prompt(`Digite o ${i}º numero.`))
    numeros.push(numero)
}


let soma = 0

for(let i of numeros){
    console.log(i)   
    soma += i

}

console.log(`Soma = ${soma}`)



// let numeros = [5,7,4,6,7]

// let soma = 0

// for(let i of numeros){
//     console.log(i)   
//     soma += i

// }

// console.log(`Soma = ${soma}`)