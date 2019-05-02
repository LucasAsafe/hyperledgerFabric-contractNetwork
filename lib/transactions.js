/**
 * Buy card transaction
 * @param {org.teste2.virtue.mudarContratante} tradeContratante
 * @transaction
 */

async function mudarParteContratante(tradeContratante) {
if(tradeContratante.contrato.mutavel){
    tradeContratante.contrato.contratante = tradeContratante.novoContratante;
    return getAssetRegistry("org.teste2.virtue.Contrato")
    .then(assetRegistry => {
        return assetRegistry.update(tradeContratante.contrato); // Update the network registry
    })
    .then(() => {
        let event = getFactory().newEvent(
        "org.teste2.virtue",
        "tradeNotification"
        ); // Get a reference to the event specified in the modeling language
        event.contrato = tradeContratante.contrato;
        emit(event); // Fire off the event
    });
}
}

async function mudarParteContratada(tradeContratado){
if(tradeContratado.contrato.mutavel){
    tradeContratado.contrato.contratada = tradeContratado.novoContratado;
    return getAssetRegistry("org.teste2.virtue.Contrato")
    .then(assetRegistry => {
        return assetRegistry.update(tradeContratado.contrato); // Update the network registry
    })
    .then(() => {
        let event = getFactory().newEvent(
        "org.teste2.virtue",
        "tradeNotification"
        ); // Get a reference to the event specified in the modeling language
        event.contrato = tradeContratado.contrato;
        emit(event); // Fire off the event
    });
}
}

async function mudarEmissor(tradeEmissor){
if(tradeEmissor.contrato.mutavel){
    tradeEmissor.contrato.emissor = tradeEmissor.novoEmissor;
    return getAssetRegistry("org.teste2.virtue.Contrato")
    .then(assetRegistry => {
        return assetRegistry.update(tradeEmissor.contrato); // Update the network registry
    })
    .then(() => {
        let event = getFactory().newEvent(
        "org.teste2.virtue",
        "tradeNotification"
        ); // Get a reference to the event specified in the modeling language
        event.contrato = tradeEmissor.contrato;
        emit(event); // Fire off the event
    });
}
}
    
async function mudarAgRef(tradeAgref){
if(tradeAgref.contrato.mutavel){
    tradeAgref.contrato.agenteReflorestamento = tradeAgref.novoAgRef;
    return getAssetRegistry("org.teste2.virtue.Contrato")
    .then(assetRegistry => {
        return assetRegistry.update(tradeAgref.contrato); // Update the network registry
    })
    .then(() => {
        let event = getFactory().newEvent(
        "org.teste2.virtue",
        "tradeNotification"
        ); // Get a reference to the event specified in the modeling language
        event.contrato = tradeAgref.contrato;
        emit(event); // Fire off the event
    });
}
}