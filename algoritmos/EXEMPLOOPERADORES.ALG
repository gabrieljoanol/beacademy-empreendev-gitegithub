 Algoritmo "ExemploOperadores" //nome do programa
 VAR // definiçao das variaveis
  nome : caractere;
  salario : real;
 INICIO
  escreva("Digite o nome:")
  leia(nome)
  escreval(nome + "joanol")
  escreval("digite seu salario:")
  leia(salario)
  escreval("Salário:", salario)
  escreval("Salário menor que o minimo :" ,(salario<1200))
  escreval("Salário maior que o minimo:",(salario>1200))
  escreval("Salário diferente do o minimo:",(salario<>1200))
  escreval("Salário igual ao minimo:",(salario=1200))
  escreval("resto da divisão de 5 por 2:",(5%2))
  escreval("Salário é igual ao minimo e menor que 5000:",((salario>1200) E (salario<5000)))
Fimalgoritmo