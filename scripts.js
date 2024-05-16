// Função para abrir e fechar o menu de navegação em dispositivos móveis
function toggleNav() {
  var nav = document.getElementById("nav");
  if (nav.style.display === "block") {
      nav.style.display = "none";
  } else {
      nav.style.display = "block";
  }
}

// Adiciona evento de clique ao botão de menu
document.getElementById("menu-btn").addEventListener("click", toggleNav);

// Função para rolagem suave ao clicar em links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});