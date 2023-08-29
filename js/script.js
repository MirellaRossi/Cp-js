const calcularbot = document.getElementById("calculo");
const resultadobot = document.getElementById("resultado");
//Evento para calcular o aumenbto do salário quando clicar no botão
calcularbot.addEventListener("click", () => {
    const salario = [1500, 1700, 2200, 1900, 2500, 2700, 2100, 3000, 1680, 2300];
//Criação da váriavel a qual o aumento será atribuido
    const salarioN = salario.map(salario => {
        if (salario <= 2000) {
            return Math.round(salario * 1.15);
        } else {
            return Math.round(salario * 1.1);
        }
    });

    // Utilizando o método filter() para filtrar e mostrar apenas valores acima de 2500
    const SDQ = salarioN.filter(salario => salario > 2500);

    // Utilizando o reduce() para somar os valores do array SDQ
    const soma = SDQ.reduce((acumulado, atual) => acumulado + atual, 0);

//A partir do  do resultado do cálculo, usamos o inner.html para mostrar ao usuário os tópicos acima
    resultadobot.innerHTML = `
        <p>Salários Atualizados em 10% quando maiores que R$2000 e em 15% quando menores ou iguais a R$2000: ${(salarioN)}</p> 
        <p>Salários Superiores a 2500: ${(SDQ)}</p>
        <p>Soma dos Salários Superiores a 2500: ${soma}</p>
    `;
});




