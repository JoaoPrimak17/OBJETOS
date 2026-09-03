const cliente = {
    nome: "João",
    idade:23,
    email:"Joao@firma.com",
    telefone:["115555550", "114444440"],
    saldo: 200,
    efetuaPagamento: function (valor) {
        if (valor > this.saldo) {
            console.log("Saldo insuficiente");
        } else {
            this.saldo -= valor;
        }
    }
};

