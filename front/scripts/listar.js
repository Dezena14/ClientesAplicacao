function fetchClients() {
    fetch('http://34.203.228.20:3000/clientes')  // Ajuste a URL conforme necessário
        .then(response => response.json())
        .then(data => {
            const tableBody = document.querySelector('#manageTable tbody');
            tableBody.innerHTML = '';  // Limpa o conteúdo atual

            data.forEach(client => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td  class="table-cell">${client.nome}</td>
                    <td  class="table-cell">${client.cpf}</td>
                    <td  class="table-cell">${client.data_nascimento}</td>
                    <td  class="table-cell">${client.email}</td>
                `;
                tableBody.appendChild(row);
            });
        })
        .catch(error => console.error('Erro ao buscar clientes:', error));
}

// Chama a função ao carregar a página
window.onload = fetchClients;