//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

//Saiba mais sobre isNaN(): https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/isNaN

const valorDinheiro = parseFloat(gets());
const moedaOrigem = gets();
const moedaDestino = gets();

// Aqui é verificado se valorDinheiro é um número.
// !isNaN é uma função embutida em JavaScript que verifica se o valor passado como argumento não é um número.
if (!isNaN(valorDinheiro)) {
// Definição fixa das taxas de câmbio para as moedas:
  const taxaCambioBRLtoUSD = 0.1875;
  const taxaCambioBRLtoEUR = 0.1520;
  const taxaCambioUSDtoBRL = 5.3333;
  const taxaCambioEURtoBRL = 6.5789;

  let valorConvertido;

//TODO: Crie uma estrutura condicional que realize a conversão das moedas:
  if (moedaOrigem === 'BRL' && moedaDestino === 'USD') {
    valorConvertido = valorDinheiro * taxaCambioBRLtoUSD;
  } else if (moedaOrigem === 'BRL' && moedaDestino === 'EUR') {
    valorConvertido = valorDinheiro * taxaCambioBRLtoEUR;
  } else if (moedaOrigem === 'USD' && moedaDestino === 'BRL') {
    valorConvertido = valorDinheiro * taxaCambioUSDtoBRL;
  } else if (moedaOrigem === 'EUR' && moedaDestino === 'BRL') {
    valorConvertido = valorDinheiro * taxaCambioEURtoBRL;
  } 

//TODO: Imprima a conversão com duas casas decimais:
  print(`${valorDinheiro} ${moedaOrigem} equivalem a ${valorConvertido.toFixed(2)} ${moedaDestino}.`);
}