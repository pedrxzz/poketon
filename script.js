function mostrarDetalhes(cartaNome, descricao, imagem) {
    const modal = document.createElement("div");
    modal.classList.add("modal");
  
    modal.innerHTML = `
      <div class="modal-content">
        <span class="close-btn">&times;</span>
        <h2>${cartaNome}</h2>
        <img src="${imagem}" alt="${cartaNome}">
        <p>${descricao}</p>
      </div>
    `;
  
    document.body.appendChild(modal);
  
    const closeBtn = modal.querySelector(".close-btn");
    closeBtn.addEventListener("click", () => modal.remove());
  
    window.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.remove();
      }
    });
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const cartas = [
      {
        nome: "Pikachu",
        descricao: "Ataque elétrico poderoso",
        imagem: "imagens/pikachu-carta.jpg"
      },
      {
        nome: "Charizard",
        descricao: "Fogo ardente",
        imagem: "imagens/charizard-carta.jpg"
      }
    ];
  
    const cardsContainer = document.getElementById("cards-container");
  
    cartas.forEach(carta => {
      const card = document.createElement("div");
      card.classList.add("card-item");
      card.innerHTML = `
        <img src="${carta.imagem}" alt="${carta.nome}">
        <p>${carta.nome}</p>
        <p>${carta.descricao}</p>
      `;
  
      card.addEventListener("click", () =>
        mostrarDetalhes(carta.nome, carta.descricao, carta.imagem)
      );
  
      cardsContainer.appendChild(card);
    });
  });
  