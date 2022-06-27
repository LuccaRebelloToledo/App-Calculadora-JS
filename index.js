function Calcular(tipo, valor) {
    
if(tipo === 'acao') {
    if (valor === 'clear') document.getElementById('resultado').value = '';
    if (valor === '+' || valor === '-' || valor === '/' || valor === '*' || valor === '.') document.getElementById('resultado').value += valor;
    if (valor === '=') {
        valor_campo_resultado = eval(document.getElementById('resultado').value);
        document.getElementById('resultado').value = valor_campo_resultado;
        }    
} else if (tipo === 'valor') {
    document.getElementById('resultado').value += valor;
    }
}