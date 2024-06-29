const username = 'queirozzrafael';

fetch(`https://api.github.com/users/${username}/repos`)
.then(response => response.json())
.then(data => {
    const repoList = document.getElementById('repoList');
    data.forEach(repo => {
        const repoItem = document.createElement('div');
        repoItem.className = 'col-md-6 col-lg-4 repo-container';
        repoItem.innerHTML = `
            <h5>${repo.name}</h5>
            <p>${repo.description || 'Sem descrição disponível.'}</p>
            <a href="${repo.html_url}" target="_blank">Visitar Repositório</a>
        `;
        repoList.appendChild(repoItem);
    });
})
.catch(error => console.error('Erro:', error));