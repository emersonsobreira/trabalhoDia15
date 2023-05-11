// vetor
let notas = [];

// Definindo a função para adicionar notas
function adicionarNota() {
	// Obtendo os valores do formulário
	var titulo = document.getElementById("titulo").value;
	var texto = document.getElementById("texto").value;
	
	// Criando o elemento de lista para a nova nota
	var novaNota = document.createElement("li");
	novaNota.classList.add("list-group-item");
	novaNota.innerHTML = "<h5>" + titulo + "</h5><p>" + texto + "</p>";

	// Obtendo os valores do formulário
var titulo = document.getElementById("titulo").value;
var texto = document.getElementById("texto").value;

// Criando objeto com dados da nota
var nota = {titulo: titulo, texto: texto};

// Obtendo as notas já cadastradas no armazenamento local
var notas = JSON.parse(localStorage.getItem("notas")) || [];

// Adicionando a nova nota ao array de notas
notas.push(nota);

// Salvando o array de notas no armazenamento local
localStorage.setItem("notas", JSON.stringify(notas));

	// Criando o botão de apagar nota
	var btnApagar = document.createElement("button");
	btnApagar.classList.add("btn", "btn-danger");
	btnApagar.innerHTML = "Apagar";
	btnApagar.onclick = function() {
		novaNota.remove();
	}
	
	// Adicionando o botão de apagar nota à nova nota
	novaNota.appendChild(btnApagar);
	
	// Adicionando a nova nota à lista
	var listaNotas = document.getElementById("lista-notas");
	listaNotas.appendChild(novaNota);
	
	// Limpando o formulário
	document.getElementById("titulo").value = "";
	document.getElementById("texto").value = "";
}





function exibirNotas() {
    const listaNotas = document.getElementById("lista-notas");
    listaNotas.innerHTML = "";

    notas.forEach(nota => {
        const li = document.createElement("li");
        li.classList.add("list-group-item");
        li.innerHTML = `
            <div>
                <h4>${nota.titulo}</h4>
                <p>${nota.texto}</p>
            </div>
            <div>
                <button type="button" class="btn btn-secondary" onclick="editarNota(${nota.id})">Editar</button>
                <button type="button" class="btn btn-danger" onclick="excluirNota(${nota.id})">Excluir</button>
            </div>
        `;
        listaNotas.appendChild(li);
    });
}

function exibir_nota(nota) {
    const listaNotas = document.getElementById("lista-notas-pagina2");
    listaNotas.innerHTML = "";

    notas.forEach(nota => {
        const li = document.createElement("li");
        li.classList.add("list-group-item");
        li.innerHTML = `
            <div>
                <h4>${nota.titulo}</h4>
                <p>${nota.texto}</p>
            </div>
            <div>
                <button type="button" class="btn btn-secondary" onclick="editarNota(${nota.id})">Editar</button>
                <button type="button" class="btn btn-danger" onclick="excluirNota(${nota.id})">Excluir</button>
            </div>
        `;
        listaNotas.appendChild(li);
    });
}

function carregar_notas(){

    if(notas.length === 0){
        for(var i = 0; i< localStorage.length;i++){
            var key = localStorage.key(i);
            notajson = JSON.parse(localStorage[key]);
            const nota = {
                id: notajson.id,
                titulo: notajson.titulo,
                texto: notajson.texto
            };
            notas.push(nota);
            
        }
    }
    exibir_nota(notas);
}

function atualizar_localStorage(nota){
    for(var i = 0; i< localStorage.length;i++){
        var key = localStorage.key(i);
        notajson = JSON.parse(localStorage[key]);
        if(notajson.id == nota.id){
            const jsonObject = JSON.stringify(nota);
            localStorage.setItem(nota.id, jsonObject);
        }
        
    }
}

function delete_localStorage(nota){
    for(var i = 0; i< localStorage.length;i++){
        var key = localStorage.key(i);
        notajson = JSON.parse(localStorage[key]);
        if(notajson.id == nota.id){
            localStorage.removeItem(nota.id);
        }
        
    }
}
function excluirNota(id) {
  notas = notas.filter(nota => nota.id !== id);
  localStorage.setItem("notas", JSON.stringify(notas));
  exibirNotas();
}
function excluirNota(id) {
    notas = notas.filter(nota => nota.id !== id);
    localStorage.setItem("notas", JSON.stringify(notas));
    exibirNotas();
  }
  