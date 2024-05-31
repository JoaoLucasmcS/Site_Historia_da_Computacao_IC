document.addEventListener('DOMContentLoaded', function () {
    const quizForm = document.getElementById('quizForm');
    quizForm.addEventListener('submit', function (event) {
        event.preventDefault();
        mostrarResultado();
    });

    function mostrarResultado() {
        const respostasCorretas = {
            q1: 'a',
            q2: 'c',
            q3: 'a',
            q4: 'b',
            q5: 'a',
            q6: 'c',
            q7: 'c',
            q8: 'c',
            q9: 'b',
            q10: 'c'
        };

        let pontuacao = 0;
        let respostasCertas = [];
        let respostasErradas = [];

        for (const [pergunta, resposta] of Object.entries(respostasCorretas)) {
            const inputSelecionado = document.querySelector(`input[name="${pergunta}"]:checked`);
            if (inputSelecionado) {
                if (inputSelecionado.value === resposta) {
                    pontuacao++;
                    respostasCertas.push({ pergunta, resposta });
                } else {
                    const respostaSelecionada = inputSelecionado.id;
                    respostasErradas.push({ pergunta, resposta, respostaSelecionada });
                }
            } else {
                respostasErradas.push({ pergunta, resposta, respostaSelecionada: null });
            }
        }

        const resultadoContainer = document.getElementById('resultadoContainer');
        resultadoContainer.innerHTML = `
            <h2>Você acertou ${pontuacao} de ${Object.keys(respostasCorretas).length} questões.</h2>
            <h3>Respostas corretas:</h3>
            <ul>
                ${respostasCertas.map(resposta => `<li><strong>Pergunta ${resposta.pergunta.substr(1)}:</strong> Resposta ${resposta.resposta.toUpperCase()}</li>`).join('')}
            </ul>
            <h3>Respostas erradas:</h3>
            <ul>
                ${respostasErradas.map(resposta => `
                    <li>
                        <strong>Pergunta ${resposta.pergunta.substr(1)}:</strong> 
                        Sua resposta: ${resposta.respostaSelecionada ? `Alternativa ${resposta.respostaSelecionada.substr(-1).toUpperCase()}` : 'Nenhuma resposta selecionada'}. 
                        Gabarito: Alternativa ${resposta.resposta.toUpperCase()}
                    </li>
                `).join('')}
            </ul>
        `;
    }
});
