function verificarRespostas() {
    const respostasCorretas = ['c', 'a', 'a', 'b', 'c', 'c', 'c', 'c', 'b', 'c'];
    const form = document.getElementById('quizForm');
    const resultadoDiv = document.getElementById('resultado');
    const formData = new FormData(form);
    let pontuacao = 0;

    for (let pair of formData.entries()) {
        const [question, answer] = pair;
        const questionNumber = parseInt(question.substring(1)) - 1;

        if (answer === respostasCorretas[questionNumber]) {
            pontuacao++;
        }
    }

    resultadoDiv.innerHTML = `<h2>Você acertou ${pontuacao} de 10 questões.</h2>`;
}

const form = document.getElementById('quizForm');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    verificarRespostas();
});