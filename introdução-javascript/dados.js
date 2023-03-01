//Type conversion

//Convertendo Strint para número e número para String

//console.log('9' +24);

/*console.log(Number('9') +24);
console.log(String(9) + ' converteu tio !!');
//console.log(typeof String(9) + ' converteu tio !!');

//contar caracteres

let oneWord = "Murilo" //6 letras
console.log(oneWord.length)//????????

//Maiusculas e Minusculas
let phrase = "Olha o bonde da PayLivre uaaaauuu"
console.log(phrase.toUpperCase())
console.log(phrase.toLowerCase())

//convertendo para Inteiro
let decimalNumber = 32.8
console.log(parseInt(decimalNumber))

//convertendo para Decimal
let IntegerNumber = 24
console.log(parseInt(IntegerNumber))

// trabalhar com casa decimais , numeros depois da virgula
let niceNumber = 24.98883422321234324
//console.log(niceNumber.toFixed());
//console.log(niceNumber.toFixed(2));
console.log(niceNumber.toFixed(4));
console.log(niceNumber.toFixed(4).replace('.','.'));


//precisao numerica
let otherNumber = 129/32
//console.log(otherNumber.toPrecision())
//console.log(otherNumber)
//console.log(typeof otherNumber.toPrecision())
//console.log(Number(otherNumber.toPrecision()))
console.log(typeof Number(otherNumber.toPrecision()))

// manipulando string e Arrays


//separando um texto que contem espaços , em um novo array onde cada texto é uma posiçao do array.


let newPhrase = "Fala meus queridos e queridas"
console.log(newPhrase)
let pharseToArray= newPhrase.split(' ')
console.log(pharseToArray)

//convertendo novamente para texto string

//.join(" ") -> perminte que eu gere separaçoes ( - , _ / '')

//let phraseModify = pharseToArray.join(" ")

let phraseModify = pharseToArray.join(" ").toLowerCase()


console.log(phraseModify)*/

// manipulando strings e Arrays
// vereficar se contem palavras ou letras

//let stringInclude = "Veem ne mim PayLivre , pay pay 🤖 "
//console.log(stringInclude.includes("PayLivre"))
//console.log(stringInclude.includes("Pay"))

//objetos

/*let Arrayinclide = [
    "PayLivre",
    "Veem",
    "ne mim",
    "Meu amor",
    {
     FristName: "Pay",
     lastName: "livre"
    }
]*/
//console.log(Arrayinclide.includes("Pay"))
//console.log(Arrayinclide.includes("PayLivre"))
//console.log(Arrayinclide.includes("Meu amor"))

//string startWith

//console.log(stringInclude.startsWith("Ve"))

//string endsWith

//console.log(stringInclude.endsWith("🤖"))

// Transformando um Array em caracteres

//let wordToArray = "quem ta gostando diz hey!!"
//console.log(Array.from(wordToArray))

//manipulano arrays
const animals = ['🐶','🐰','🦍','🦒','🐟']//4 length 5
console.log(animals)

// adicionar item no fim do array
console.log(animals.push('🐀'))
console.log(animals)

// adicionar item no comeco do array
console.log(animals.unshift(`🐍`))
console.log(animals)

//remover item do fim
console.log(animals.pop())
console.log(animals)

//remover item do começo
console.log(animals.shift())
console.log(animals)

//pegar somente alguns elementos do Array
///nao modificar o Array
console.log(animals.slice(0,3))
console.log(animals)

 //remover 1 ou mais itens do Array
animals.splice(1,3)
console.log(animals)
 //console.log(animals.splice(1,3))
console.log(animals)

 // encontrar a posicao do array
//let index = animals.indexOf('🦍')
let index = animals.indexOf('🐰')
console.log(index)
animals.splice(index,1)
console.log(animals)