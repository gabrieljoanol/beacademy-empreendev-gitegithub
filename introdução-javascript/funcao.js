// exemplo 1

            //Method
//function myFristFunction(){
    //entra meu codigo
   // console.log("Oi meu chapa")
//}

//execute
//myFristFunction()

//funçao com parametros e argumentos

//number1 = 32 e number2 = 24
//function sum (number1, number2){
    //console.log(number1 + number2)
//}

//sum(32,24)

//funçao com return

//function myFristFunctionWhithReturn(num1, num2){
    //let total = num1 + num2
   // return total
//}

//console.log(myFristFunctionWhithReturn (20,20))

// -> Total = 40

//Restaurante
//function meuPratoDecomida(comida1, comida2, comida3, comida4) {
          //  return `meu prato de comida é : ${comida1}, ${comida2}, ${comida3}, ${comida4}` 
//}

//const prato = meuPratoDecomida('arroz', 'feijao', 'bife', 'batata frita')
//console.log(prato)

//Arrow function
//const myFirstArrowFunction = (number1,number2) => {
    //    let total = number1 + number2
     //   return total;
//}
//const result = myFirstArrowFunction(20,50);
//console.log(result);


// funçao anonima 

/*(function(){
    console.log('Paylivre S2')
})()//autoexecuçao

setTimeout(function(){
console.log("meu chapa daqui 3 segundos apareço")
},3000)*/


//parte 1
/*let assunto
function criarAssunto(assunto) {
    return assunto 
}

console.log(criarAssunto(assunto));*/

//parte 2
/*let assunto = 'estudar' //var = valor
function criarAssunto(assunto) {
    return assunto //
}
console.log(assunto)// resposta => 'estudar'
console.log(criarAssunto(assunto));// resposta => 'estudar'*/

//parte 3
/*let assunto = 'estudar' //var = valor
function criarAssunto(assunto) {
    assunto = "escutar musica"//mudança de valor
    return assunto //
}
console.log(assunto)// resposta => 'estudar'
console.log(criarAssunto(assunto));// resposta => 'escutar musica'*/

//parte 4

/*let assunto = 'estudar' //var = valor
function criarAssunto() { //sem paramento
    assunto = "escutar musica"//mudança de valor
    return assunto //
}
console.log(assunto)// resposta => 'estudar'
console.log(criarAssunto(assunto));// resposta => 'escutar musica'*/

//hosting

//function digaMinhaIdade(){
//return console.log(22)
//}
//digaMinhaIdade() 

/*digaMinhaIdade()

const digaMinhaIdade = function () {
    return console.log(22)
}*///nao funciona hosting





//callback
                //function
/*function minhaFunçao (callback){
    console.log ('inicio da minha função =)')
    callback(15, 15)
    console.log('final da minha função')
}

minhaFunçao(
    (num1, num2)=>{
        return console.log(num1 + num2)
    }

)*/

//function construct
/*function Sum () {
    this.num1,
    this.num2,
    this.calc = function (num1, num2) {
    return total = num1 + num2
}
}*/

//const math = new Sum()
//console.log(math)
//console.log(math.calc(35,29))

//const math2 = new Sum()
//console.log(math2.calc(54,60))

/*const num1 = math.num1 = 24
const num2 = math.num2 = 50
console.log(num1)
console.log(num2)
console.log(math.calc(num1, num2))

const math2 = new Sum()
const number1 = math2.num1 = 30
const number2 = math2.num2 = 10
console.log(math2.calc(num1 , num2))*/

//const math = new Sum().calc(45,45)

//console.log(math)

function Sum (num1, num2) {
    this.num1 =num1
    this.num2 =num2
    this.calc = function (num1, num2) {
    return total = num1 + num2
}
}//com parametros

const math = new Sum(20,40)
//console.log(math)
console.log(math.calc(20,20))

//
//const data = new Date();
//const data = new Date().getDay();
const data = new Date().getDate();
console.log(data)



























