
// valor esperado de 'valores' objeto com props valor e transacao
// valores = { 
//     transacao: 'saque' ou 'deposito',
//     valor: 00
// }


function ValidarCampos(saldo, valores) {

    if (valores.transacao == 'saque') {
        if (valores.valor > saldo) {
            return false;
        } else {
            return true;
        }
    } else {
        if (valores.valor <= 0) {
            return false;
        } else {
            return true;
        }
    }

}

export default ValidarCampos;