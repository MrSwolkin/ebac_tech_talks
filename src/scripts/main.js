AOS.init();

const dataDoEvento = new Date("May 15 2023 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horasEmMS = 1000 * 60 * 60;
    const minutosEmMS = 1000 * 60;
    

    const tempoAteOEvento = timeStampDoEvento - timeStampAtual;
    const diaAteOEvento = Math.floor(tempoAteOEvento / diaEmMs);
    const horasAteOEvento = Math.floor((tempoAteOEvento % diaEmMs) / horasEmMS)
    const minutosAteOEvento = Math.floor((tempoAteOEvento % horasEmMS) / minutosEmMS);
    const segundosAteOEvento = Math.floor((tempoAteOEvento % minutosEmMS) / 1000);


    document.getElementById('contador'). innerHTML = `${diaAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;

    if (tempoAteOEvento < 0 ) {
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = 'Evento expirado!'
    }

}, 1000);