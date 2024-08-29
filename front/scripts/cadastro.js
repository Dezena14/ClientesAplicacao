document.getElementById('clienteForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(this);
    const data = Object.fromEntries(formData.entries());

    fetch('http://localhost:3000/api/clientes', {  // Arrumar a URL
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
        alert('Cliente cadastrado com sucesso!');
        console.log(result);
        this.reset();  // Reseta o formulário
    })
    .catch(error => {
        console.error('Erro ao cadastrar o cliente:', error);
    });
});