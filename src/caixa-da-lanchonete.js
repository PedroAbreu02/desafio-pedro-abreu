class CaixaDaLanchonete {


    calcularValorDaCompra(metodoDePagamento, itens) {
        let total = 0;
        let temCafe = false;
        let temChantily = false;
        let temSanduiche = false;
        let temQueijo = false;

        if (itens.length == 0) {
            return "Não há itens no carrinho de compra!";
        }

        for (const i of itens) {
            let resultado = i.split(",");
            let codigo = resultado[0];
            let quantidade = parseInt(resultado[1]);

            if (quantidade == 0) {
                return "Quantidade inválida!";
            }

            if (codigo == "cafe") {
                total += 3.00 * quantidade;
                temCafe = true;
            } else if (codigo == "chantily") {
                total += 1.50 * quantidade;
                temChantily = true;
            } else if (codigo == "suco") {
                total += 6.20 * quantidade;
            } else if (codigo == "sanduiche") {
                total += 6.50 * quantidade;
                temSanduiche = true;
            } else if (codigo == "queijo") {
                total += 2.00 * quantidade;
                temQueijo = true;
            } else if (codigo == "salgado") {
                total += 7.25 * quantidade;
            } else if (codigo == "combo1") {
                total += 9.50 * quantidade;
            } else if (codigo == "combo2") {
                total += 7.50 * quantidade;
            } else {
                return "Item inválido!";
            }
        }
        if (temChantily && !temCafe) {
            return "Item extra não pode ser pedido sem o principal";
        }
        if (temQueijo && !temSanduiche) {
            return "Item extra não pode ser pedido sem o principal";
        }

        if (metodoDePagamento == "credito") {
            total *= 1.03;
        } else if (metodoDePagamento == "dinheiro") {
            total *= 0.95;
        } else if (metodoDePagamento != "debito") {
            return "Forma de pagamento inválida!";
        }
        
        total = "R$ " + total.toFixed(2);
        return total.replace(".", ",");
    }

}

export { CaixaDaLanchonete };
