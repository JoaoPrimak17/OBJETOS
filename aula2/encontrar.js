const clientes = require("./cliente.json");

function encontar(lista, chave, valor) {
    return lista.find(item => item[chave] === valor);
}

const encontrado = encontar(clientes, "nome", "Tildi");

console.log(encontrado);