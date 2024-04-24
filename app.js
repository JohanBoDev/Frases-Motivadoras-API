document.getElementById('getAdviceBtn').addEventListener('click', function() {
    fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(data => {
        const adviceId = data.slip.id; // Obtener el número de consejo
        const adviceText = data.slip.advice; // Obtener el consejo en sí
        document.getElementById('numero').textContent = `ADVISE  #${adviceId}`;
        document.getElementById('aviso').textContent = `"${adviceText}"`;
    })
    .catch(error => console.error('Error al obtener el consejo:', error));
});
