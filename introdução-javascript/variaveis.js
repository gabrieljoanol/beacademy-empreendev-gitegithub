// Declaração

/* var name
let name2
//const name3

name ="afdafad"
name2 = "assads" */

/*let name = "Gabriel"
console.log(name)

name = 22
console.log(name)

name = "Joanol"
console.log(name)*/

/*const name = "Gabriel"
console.log(name)

name ="Joanol"*/

//let name:String = "Gabriel"

//Globais
//hosting -> var

 //var name,

//console.log("Variável name existe aqui?" , name )

//{//scopo (bloco de código)
    //local

    //var name = "Gabriel"

   // name = "Gabriel"
//}console.log("Variável name existe aqui?" , name)

//locais 

/*let name = "Gabriel"

console.log('Meu nome chegou aqui?', name)

{//scopo (bloco de cód/igo)
    //local
    let name = "Murilo"
console.log('Meu nome chegou aqui?', name)
}

console.log('Meu nome chegou aqui?', name)*/

//Objetos

const human = {
    name: "Gabriel Joanol",
    age: 22,
    weight:139,
    isAthlete: false ,
    walk: function walking() {

        console.log('Eu ando bastante!')
} 

}
//objeto

//console.log({human})
/*
console.log(human.age)

console.log(human.name)

console.log(human.walk())
*/

//concatenar

console.log("O Humano " + human.name + " Tem a idade "+ human.age) 

//interpolação

console.log(`O Humano ${human.name} Tem a idade ${human.age}`) 

//Array
const animals = [
     "Elefante", //0
     "Gato", //1
     "Leão", //2
     "Cachorro", //3
    
     {//4
        name: "Dodo",
        age: 3,
        weight: 5,
     }
]
// Tamanho 5
//console.log(animals.length)
//console.log(animals[2])
//console.log(animals[1])
//console.log(animals[3])
//console.log(animals[4])
//console.log(animals[4].name)
//console.log(animals[4].age)
console.log(animals[4].weight)