//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

// Saiba mais sobre Template Strings: 
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Template_literals

let nomeBeneficiario;
let valorConta;
let dataVencimento;

// Neste bloco, temos as funções gets para ler os valores de entrada:
nomeBeneficiario = gets();
valorConta = parseFloat(gets());
dataVencimento = gets();

// TODO: Imprima a saída adequada utilizando o conceito de template strings:
print(`Pagamento Agendado! Valor: R$ ${valorConta}, vencimento ${dataVencimento}.`);