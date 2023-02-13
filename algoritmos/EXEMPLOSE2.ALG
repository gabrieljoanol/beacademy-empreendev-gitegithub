 Algoritmo "ExemploSE2" //nome do programa
 VAR // definiçao das variaveis
  nome : caractere;
  salario : real;
 INICIO
  escreva("Digite o nome:")
  leia(nome)
  escreval("digite seu salario:")
  leia(salario)
  escreval("Salário:", salario)
  se (salario>1200) entao
  escreval(nome," seu salário é maior que o mínimo!!!")
  senao
  escreval(nome," seu salário é menor que o mínimo!!!")
  fimse
  fimalgoritmo
