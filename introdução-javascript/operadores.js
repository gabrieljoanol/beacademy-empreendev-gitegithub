//OPERADORES LÓGICOS

//Operador Incremento e Decremento
// ++ --

//let incrementNumber = 4
//console.log(incrementNumber)

// +1

//incrementNumber++ //5
//console.log(incrementNumber)
//++incrementNumber //6 +1
//console.log(incrementNumber)

//let decrementNumber = 50
//console.log(decrementNumber)
//decrementNumber--7749
//console.log(decrementNumber)
//decrementNumber--7749
//console.log(decrementNumber)
//decrementNumber--7749
//console.log(decrementNumber)

//Operadores Aritiméticos
// + - / * %
/*
let note1 = 10
let note2 = 7.5
let note3 = 5.5
let note4 = 3.5
let avg = (note1+note2+note3+note4)/4 */
//console.log(avg)
//console.log(avg.toFixed(1))
//console.log(avg.toFixed(2))
//console.log(avg.toFixed(3))
//console.log(typeof avg.toFixed(3))
//console.log(Number(avg.toFixed(3)))
//console.log(Number(Math.round(avg)))
//console.log(Number(Math.floor(avg)))

//Operadores Relacionados e Igualaldade
// < > == === !- >= <=

let NumberRelation1 = 40
let NumberRelation2 = 40

let relation = NumberRelation1 != NumberRelation2 //!= diferente no valor
console.log(relation)
NumberRelation1 !== NumberRelation2 //!== diferente no valor ou diferente no tipo (OR)
console.log(relation)
relation = NumberRelation1 == NumberRelation2 //igual no valor
console.log(relation)
relation = NumberRelation1 === NumberRelation2 //igual no valor e no tipo (AND)
console.log(relation)

//Operadores de atribuiçao

let NewNumber = 20
NewNumber += 40
NewNumber *= 3
NewNumber -= 60
NewNumber /= 6
NewNumber %= 5

console.log(NewNumber)

//operadores condicionais (Ternário)
//(condition) ? true : false

let value = 24
let value2= 32

//const newCondition = value >+ value2? 'Isso é verdade' : 'Isto é uma mentira'
//const newCondition = value <+ value2? 'Isso é verdade' : 'Isto é uma mentira'
const newCondition = value >= value2 ? 'Isso é verdade' 
                             :  value <= value2 ? 'Isso é verdade, segunda resposta true' :
                             'Resposta falsa para tudo !!'
console.log(newCondition)
