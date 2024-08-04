function cadastrar() {
    const itemInput = document.getElementById('item');
    const itemText = itemInput.value.trim();

    if (itemText === '') {
        mostrarPopup();
    } else {
        const lista = document.getElementById('lista');
        const li = document.createElement('li');
        li.textContent = itemText;

        const removeIcon = document.createElement('img');
        removeIcon.src = 'src/images/excluir.svg'; // Caminho da imagem
        removeIcon.alt = 'Remover';
        removeIcon.className = 'remove-icon';
        removeIcon.onclick = () => {
            li.remove();
            exibirMensagem();
        };

        li.appendChild(removeIcon);
        lista.appendChild(li);

        itemInput.value = '';
    }
}

function mostrarPopup() {
    const popup = document.getElementById('popup');
    popup.classList.remove('popup-oculto');
    popup.classList.add('popup-visivel');

    setTimeout(() => {
        esconderPopup();
    }, 3000); // O popup desaparece após 3 segundos
}

function esconderPopup() {
    const popup = document.getElementById('popup');
    popup.classList.remove('popup-visivel');
    popup.classList.add('popup-oculto');
}

function exibirMensagem() {
    const mensagem = document.getElementById('mensagem');
    mensagem.classList.remove('mensagem-oculta');
    mensagem.classList.add('mensagem');

    setTimeout(() => {
        mensagem.style.opacity = '1';
    }, 100); // Pequeno atraso para a transição

    setTimeout(() => {
        mensagem.style.opacity = '0';
        setTimeout(() => {
            mensagem.classList.remove('mensagem');
            mensagem.classList.add('mensagem-oculta');
        }, 500); // Esconder após a transição
    }, 3000); // Exibir a mensagem por 3 segundos
}
