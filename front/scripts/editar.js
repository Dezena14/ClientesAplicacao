function editClient(event) {
    event.preventDefault();

    const formData = new FormData(document.querySelector('form'));
    const data = Object.fromEntries(formData.entries());

    const clientId = new URLSearchParams(window.location.search).get('id');  // Supondo que você tenha passado o ID como parâmetro

    fetch(`http://localhost:3000/api/clientes/${clientId}`, {  // Ajuste a URL conforme necessário
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
        alert('Cliente editado com sucesso!');
        window.location.href = 'gerenciar.html';
    })
    .catch(error => console.error('Erro ao editar o cliente:', error));
}

document.querySelector('form').addEventListener('submit', editClient);

function deleteClient(clientId) {
    fetch(`http://localhost:3000/api/clientes/${clientId}`, {  // Ajuste a URL conforme necessário
        method: 'DELETE'
    })
    .then(response => response.json())
    .then(result => {
        alert('Cliente deletado com sucesso!');
        fetchClients();  // Recarrega a lista de clientes
    })
    .catch(error => console.error('Erro ao deletar o cliente:', error));
}