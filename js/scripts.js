function carregarConteudoPagina() {
	var localAtual = window.location.href.replace(urlBase, '');
	localAtual = localAtual.replace('#', '');
	var pagina = localAtual == '' || localAtual == '#' ? 'inicio' : localAtual;

	$.ajax({
		url: urlBase + 'paginas/' + pagina + '.html',
		success: function (retorno) {
			$('#conteudo').html(retorno);
		},
		error: function () {
			$('#conteudo').html('<h1 class="naoEncontrada">Desculpe, página não encontrada</h1>');
		}
	});
}

window.onhashchange = carregarConteudoPagina;

carregarConteudoPagina();