// Faça o exercício dos PARÁGRAFOS aqui
// Este arquivo AINDA NÃO ESTÁ INCLUÍDO no arquivo HTML

const btnsEl = document.querySelectorAll('.botao-expandir-retrair');

for (let btnEl of btnsEl) {
    btnEl.addEventListener('click', (e) => {
        const btnTargetEl = e.currentTarget;
        const pEl = btnTargetEl.parentNode;
        btnTargetEl.innerHTML = pEl.classList.toggle('expandido') ? '-' : '+';
    });
}