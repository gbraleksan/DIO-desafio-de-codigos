//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

//Saiba mais sobre Expressões Regulares: 
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_expressions

// O gets() receberá um número de conta como entrada:
const numeroConta = gets();

// Verifica se o número de conta consiste em exatamente 6 dígitos usando uma expressão regular:
if (/^\d{6}$/.test(numeroConta)) {
  const numArray = numeroConta.split('').map(Number);

  // Calcula a soma dos dígitos no número de conta
  const sum = numArray.reduce((a, b) => a + b, 0);

  // Verifica se o primeiro dígito é maior que zero e a soma dos dígitos é menor ou igual a 30
  if (numArray[0] > 0 && sum <= 30) {
  // TODO: Se a condição acima for verdadeira, imprima a mensagem esperada:
    print('Numero de conta valido.');
  } else {
  // TODO: Verifique se o numArray[0] referente ao primeiro dígito é igual a zero :
    if (numArray[0] === 0 ) {
      // TODO: Se o primeiro dígito for igual a zero, imprima a mensagem esperada:
      print('Numero de conta invalido: O primeiro digito deve ser maior que zero.');
    } else {
      print('Numero de conta invalido: A soma dos digitos e maior que 30.');
    }
  }
}