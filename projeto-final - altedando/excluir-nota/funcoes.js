

// Obtendo as notas cadastradas no armazenamento local
var notas = JSON.parse(localStorage.getItem("notas")) || [];

// Selecionando o elemento HTML onde as notas serão exibidas
var listaNotas = document.getElementById("lista-notas");

// Iterando sobre as notas e adicionando cada uma à lista HTML
notas.forEach(function(nota)) {
  var novaNota = document.createElement("li");
  novaNota.classList.add("list-group-item");
  novaNota.innerHTML = "<h5>" + nota.titulo + "</h5><p>" + nota.texto + "</p>";
}
  var btnApagar = document.createElement("button");
  btnApagar.classList.add("btn", "btn-danger");
  btnApagar.innerHTML = "Apagar";
  btnApagar.onclick = function() {
    // Removendo a nota da lista HTML
    novaNota.remove();
  }
    // Removendo a nota do array de notas
