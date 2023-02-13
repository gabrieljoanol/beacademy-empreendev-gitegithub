 Algoritmo "ExemploOperadores2" //nome do programa
 VAR // definiçao das variaveis
  nome : caractere;
  salario : real;
 INICIO
  escreva("Digite o nome:")
  leia(nome)
  escreval(nome+"joanol")
  escreval("digite seu salario:")
  leia(salario)
  escreval("Salário:", salario)
  escreval("Salário menor que o minimo OU nenor que 5000:" ,((salario<1200) OU (salario<5000)))
  escreval("Salário NAO é maior que o minimo e menor que 5000:", (((salario>1200) E (salario<5000))))
  escreval("Salário diferente do o minimo: " , (salario<>1200) OU ((salario<>5000)))
  escreval("Salário igual ao minimo Ou diferente 5000:",((salario=1200) OU (salario<>5000)))
  escreval("Salário é igual ao minimo e é diferente 5000:",((salario=1200)XOU(salario<>5000)))
Fimalgoritmo