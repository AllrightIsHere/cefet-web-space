// Faça o exercício da equação de GRAVITAÇÃO UNIVERSAL aqui
// Este arquivo AINDA NÃO ESTÁ INCLUÍDO no arquivo HTML

const btnCalcularEl = document.querySelector('#calcular');

btnCalcularEl.addEventListener('click', () => {
    const constante = Number(document.querySelector('#constante').value);
    const massa1 = Number(document.querySelector('#massa1').value);
    const massa2 = Number(document.querySelector('#massa2').value);
    const distancia = Number(document.querySelector('#distancia').value);

    const resultEl = btnCalcularEl.previousElementSibling.firstElementChild;
    resultEl.value = constante * massa1 * massa2 / (distancia ** 2);
});