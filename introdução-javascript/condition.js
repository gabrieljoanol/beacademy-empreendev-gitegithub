// IF AND ELSE
// SE E SE NÃO

/*let num = 10
let num2 =20
//let isAdmin = true
//let isAdmin = false
//let isAdmin = true
//let isAdmin = false
let isAdmin = true

// < > == === != !==
// && (AND) || (OR) ! (NOT)
//if (num >= 5) {
   //if (num >= 10 && num2 >= 10) {
    //if (num >= 10 && num2 <= 10) {
    //if (num >= 10 || num2 <= 10) {
    //if (isAdmin) {
    //if (num >= 10) {
    if (num < 10) {
    //console.log('Sou maior que 5')
     //console.log('Verdadeiro')
     //console.log('Ele Não é Admin')
     //console.log('Ele é Admin , Tem Permissão')
     console.log('Sou Maior')
//} else if (num >= 10 && num2 <= 20) {
} else if (num < 10 && num2 == 20) {
    //console.log('Não sou maior que 5')
    //console.log('Falsa')
    //console.log('Ele é Admin , Tem Permissão')
   // console.log('Ele Não é Admin')
   console.log('Segunda Resposta Verdade')
}else{
    console.log('Resposta Falsa')
}

//SWITCH

//let myEpression = 'x'
//let myEpression = 'b'
//let myEpression = 'c'
//let myEpression = 'd'
let myEpression = 'x'

switch (myEpression) {
               /* case 'a':
                    console.log('Apertou o A')
                case 'b':
                    console.log('Apertou o B') 
                case 'c':
                    console.log('Apertou o C')  */ 
            /*
                    case 'a':
                        console.log('Apertou o A')
                        break
                    case 'b':
                        console.log('Apertou o B') 
                        break
                    case 'c':
                         console.log('Apertou o C')   
                         break
                    default: 
                    console.log('Você Apertou outro tecla' , myEpression) 
                    break

}



//Calculadora
function calc (num1, operator , num2) {
    let result

    switch(operator) {
        case "+":
        result = num1 + num2
        break

        case "-":
        result = num1 - num2
        break

        case "*":
        result = num1 * num2
        break

        case "/":
        result = num1 / num2
        break

        default: 
        console.log('Não entendi') 
        break

    }

    return result
}

//console.log(calc(4, '*', 4))
//console.log(calc(8, '/', 2))
//console.log(calc(12, '+', 12))
console.log(calc(4, '%', 4))*/


//Throw And Try Catch

//Saber A Minha Idade

function myAge(myAge){
    if(!myAge) {
        throw 'Você Precisa Colocar A Idade!'
    }

    console.log('Eu Executei Depois De Erro!')
}

try{
    //myAge(22)
    //myAge()
    myAge(22)
    console.log('Já Tratei E Deu Certo')
} catch(error) {
  console.log(error)
}

console.log('Programa Continua')
