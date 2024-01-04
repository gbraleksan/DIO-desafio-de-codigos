//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

// Log to console
const contaBancaria = {
    nomeCliente: "",
    saldo: 0,
  };
  
  contaBancaria.nomeCliente = gets();
  contaBancaria.saldo = parseFloat(gets());
  
  const numOperacoes = parseInt(gets());
  
  // TODO: Crie um loop for para iterar sobre o número de operações especificado:
  for ( var i = 0; i < numOperacoes; i++ ) {
    const tipoOperacao = gets();
    const valorOperacao = parseFloat(gets())
  
   // TODO: Verifique o tipo de operação (saque) e atualize o saldo da conta bancária:
    if (tipoOperacao.toLowerCase() === "depósito") {
      // Se for um depósito, adiciona o valor ao saldo.
      contaBancaria.saldo += valorOperacao;
    } else if ( tipoOperacao.toLowerCase() === "saque") {
      // Se for um saque, subtrai o valor do saldo.
      contaBancaria.saldo -= valorOperacao;
    }
  }
  
  // Imprime o nome do cliente da conta bancária;
  print(`Nome do cliente: ${contaBancaria.nomeCliente}`);
  // Imprime o saldo final da conta bancária formatado como moeda brasileira (R$) com duas casas decimais.
  print(`Saldo final: R$ ${contaBancaria.saldo.toFixed(2)}`);