// 1.  declare uma variavel de nome person

var person 

//var person =24

//var person = "Gabriel"

//var person = { }

//var person = [ ]

//var person = null

// 2. que tipo de dado é a variavel acima?

console.log(typeof person)

undefined

/*
3.declare uma variavel e atribua valores para cada um dos dados:

name:string

age:number(integer)

weight:number(float)

isAdmin:boolean

isAMan:boolean
*/

 var pessoa = {
    
    name:'Gabriel',
     age:22,
     weight:139,
     isAdmin:false,
     isAman:true,
 }
 console.log(pessoa)

 // 4. a variavel person abaixo é de que tipo de dados?

 Object

 /* 4.1 atribua a ela as mesmas propriedades e valores do exercicio 3.

    4.2 mostre no console a seguinte mensagem
    o humano <name> tem o peso <weight kg. */

    /*let humman = {}
    console.log(human)*/

    let human = {
        name: "Gabriel ",
        age: 22,
        weight:139,
        isAdmin:false,
        isAman:true,
    }
  
       // console.log(typeof human)

    //console.log("O Humano " + human.name + " Tem o peso "+ human.weight + " kg") //concatenado

    console.log(`O Humano ${human.name} Tem o peso ${human.weight} kg `) //interpolado

    /* 5 . Declare uma váriavel do typo Array , de nome humans e atribua a ela nenhum valor ou seja , somente o Array vazio.*/
    
     //let humans =[] 

/* 6. reatribua o valor para a variavel acima , colocando dentro dela o objeto human da questao 4 . ( não copiar e colocar o objeto , mas usar o objeto criado inserir ele no Array)*/

 humans = [human]

 // 7. coloque no console o valor da posicao zero do array acima

 console.log(humans[0])
    
// 8. crie um novo objeto human e coloque na posicao 1 do Array humans

/* 
const = newHuman {
    name : "Murilo Joanol"
    age: 9,
    weigth: 32.5
    isAdmin :false
    isAMan: true
}
*/
//humans =[humman, newHuman]

//ou

//humans[1] =newHuman

let newHuman = {
    name: "MUrilo ",
    age: 9,
    weight:32.5,
    isAdmin:false,
    isAman:true,
};
console.log(newHuman)

human =[human, // 0
     newHuman // 1
    ]
    console.log(humans)
    console.log(humans[1])
// 8 original . crie um novo objeto student e coloque na posicao 1 do array students

 let student = {
   name: 'Dodo Joanol',
    age: 5,
    weight: 15.3,
    raca: 'shih tzu'
 }

 let students = [
     'posicao 0',student]
    console.table(students[1])

    // 9. sem rodar o codigo responda o resultado da saida abaixo:
/*
 a)
 console.log(a),
 var a = 1
 resposta ??  */ //undefined


 /* b)
 let a 
 console.log(a)
 {
     let a = 2
     console.log(a)
 }
 console.log(a)
resposta: */ //undefined e depois dentro do scopo 2 e fora undefined tambem

/*c)
 console.log(b)
 {
     let b=3
     console.log(b)
 }
 console.log(b)
resposta: */ //só vai aparecer 3 dentro do scopo, nos outros vai dar undefined ou null porque a variavel é local.

/* d)
 const c = 10
 {
     console.log(c)
     const c = 20
     console.log(c)
 }
 resposta:*/ //vai ficar apenas o numero 10 porque const não altera o valor.
