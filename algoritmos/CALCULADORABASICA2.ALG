Algoritmo "CalculadoraBasica2"
Var
   numero1, numero2 : real;
   operacao: caractere;
   resultado: real;

Inicio
   escreva("Digite o primeiro numero: ")
   leia(numero1)
   escreva("Digite a operação: ")
   leia(operacao)
   escreva("Digite o segundo numero: ")
   leia(numero2)
   escolha operacao
   caso ("+")
      resultado := numero1 + numero2
   caso ("-")
      resultado := numero1 - numero2
   outrocaso
   fimescolha
   se  (resultado =-1) entao
      escreva("Operação inválida! Escreva + ou - ")
   senao
      escreva("Resultado: ", resultado)
   fimse

Fimalgoritmo
