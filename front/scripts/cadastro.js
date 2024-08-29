document.getElementById('clienteForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(this);
    const data = Object.fromEntries(formData.entries());

    console.log(data);

    fetch('http://34.203.228.20:3000/clientes', {  // Arrumar a URL
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
        if(result.error){
            alert('Erro ao cadastrar o cliente!');
        } else {
            alert('Cliente cadastrado com sucesso!');
        }
        console.log(result);
        this.reset();  // Reseta o formulário
    })
    .catch(error => {
        console.error('Erro ao cadastrar o cliente:', error);
    });
});