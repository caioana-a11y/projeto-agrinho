// Array com frases sobre sustentabilidade no agro
const dicas = [
    "A rotação de culturas evita o desgaste do solo e reduz pragas de forma natural!",
    "O uso de drones no campo ajuda a aplicar água e insumos apenas onde é realmente necessário.",
    "Preservar as matas ciliares protege os rios contra o assoreamento e garante água para o futuro.",
    "A integração Lavoura-Pecuária-Floresta (ILPF) pode neutralizar as emissões de carbono da pecuária!"
];

// Seleciona o botão do rodapé
const botaoAlerta = document.getElementById('btn-alerta');

// Adiciona o evento de clique
botaoAlerta.addEventListener('click', () => {
    // Escolhe uma dica aleatória do array
    const dicaAleatoria = dicas[Math.floor(Math.random() * dicas.length)];
    // Exibe a dica em um alerta na tela
    alert(`Dica Sustentável: ${dicaAleatoria}`);
});
