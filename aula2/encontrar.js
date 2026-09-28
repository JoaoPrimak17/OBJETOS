const clientes = require("./cliente.json");

function encontar(lista, chave, valor) {
    return lista.find(item => item[chave] === valor);
}

const encontrado = encontar(clientes, "nome", "Tildi");

const encontrado2 = encontrar(clientes, "telefone", "1918820860");

console.log(encontrado);