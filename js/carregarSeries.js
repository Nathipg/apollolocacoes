$(document).ready(function () {
	$.ajax({
		url: urlBase + 'json/series.json',
		success: function (retorno) {
			var itens = '';
			$.each(retorno, function(indice, conteudo) {
				itens += indice % 2 == 0 ? '<div class="row">' : '';
				itens += '\n\
				<article class="col-xs-12 col-md-6 itemDisponivel">\n\
					<div class="col-xs-12 col-md-5">\n\
						<img src="img/capas/' + conteudo.capa + '" class="img-responsive">\n\
					</div>\n\
					<div class="col-xs-12 col-md-7">\n\
						<h1>' + conteudo.titulo + '</h1>\n\
						<h2 class="preco">R$ ' + conteudo.preco + '</h2>\n\
					</div>\n\
				</article>';
				itens += indice % 2 == 0 ? '' : '</div>';
			});
			$('.series').append(itens);
		}
	});
});