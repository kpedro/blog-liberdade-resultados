const posts = [
    {
        title: "Mentalidade no Marketing de Rede",
        excerpt: "Descubra como desenvolver uma mentalidade vencedora...",
        link: "/posts/2024-07-15-mentalidade.md"
    },
    {
        title: "Saúde e Bem-Estar para Empreendedores",
        excerpt: "Dicas para manter a saúde física e mental...",
        link: "/posts/2024-07-20-saude.md"
    },
    {
        title: "Estratégias de Empreendedorismo",
        excerpt: "Como construir um negócio sustentável no marketing de rede...",
        link: "/posts/2024-07-25-empreendedorismo.md"
    }
];

const postsContainer = document.getElementById('posts-container');
posts.forEach(post => {
    postsContainer.innerHTML += `
        <div class="col-md-4 mb-4">
            <div class="card">
                <div class="card-body">
                    <h5>${post.title}</h5>
                    <p>${post.excerpt}</p>
                    <a href="${post.link}" class="btn btn-primary">Ler Mais</a>
                </div>
            </div>
        </div>
    `;
});