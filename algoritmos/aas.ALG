Algoritmo "Exemplovetor"
Var
   alunos : vetor [1..3] de caractere
   notas : vetor [1..3] de real
   i : inteiro
Inicio
   para i<-1 ate 3 faca
   escreva("Digite o nome do ", i , "º aluno:" )
   leia(alunos[i])
   escreva("Digite o nota do ", i , "º aluno:" )
   leia(notas[i])
   fimpara
   para i<-1 ate 3 faca
   escreva("Nome do ", i ,"º aluno:", alunos[i] )
   fimpara
   para i<-1 ate 3 faca
   escreval(alunos[i], "obteve a nota", notas[i])
   fimpara
Fimalgoritmo
