AOS.init()

// Deixando sempre o timer atualizado após o termino dele
const anoAtual = new Date();

// É possível definir uma data do futuro ou do passado
const dataDoEvento = new Date(`Dec 12, ${anoAtual} 19:00:00`);
// Com o getTime() é recuperado o TimeStamp
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horasEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60;

    const diasAteOEvento = Math.floor(distanciaAteOEvento / diaEmMs);
    const horasAteOEvento = Math.floor((distanciaAteOEvento % diaEmMs) / horasEmMs);
    const minutosAteOEvento = Math.floor((distanciaAteOEvento % horasEmMs) / minutoEmMs);
    const segundosAteOEvento = Math.floor((distanciaAteOEvento % minutoEmMs) / 1000);

    const span = document.getElementById('contador')
    span.innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;

    if(distanciaAteOEvento < 0){
        clearInterval(contaAsHoras)
        span.innerHTML = 'EVENTO EXPIRADO';
        span.style.color = "red";
    }
}, 1000);