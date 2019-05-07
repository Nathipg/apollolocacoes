var infoErro = document.getElementById('infoMap');

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
        infoErro.innerHTML = 'Entregas disponíveis para o seu endereço.';
    } else {
        infoErro.innerHTML = 'Seu navegador não suporta geolocalização.';
    }
}
function showPosition(position) {
    var latlon = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    var mapProp = {
        center:latlon,
        zoom:15,
        navigationControlOptions:{style:google.maps.NavigationControlStyle.SMALL}
    };
    var map = new google.maps.Map(document.getElementById('googleMap'),mapProp);
    var marker = new google.maps.Marker({
            position:latlon,
            map:map,
            title: 'Você está aqui!'});
}

function showError(error) {
    console.log(error);
    switch(error.code) {
        case error.PERMISSION_DENIED:
            infoErro.innerHTML = 'Usuário não permitiu acesso a geolocalização.';
            break;
        case error.POSITION_UNAVAILABLE:
            infoErro.innerHTML = 'Informação de localização não disponível.';
            break;
        case error.TIMEOUT:
            infoErro.innerHTML = 'O pedido para obter a localização do usuário expirou.';
            break;
        case error.UNKNOWN_ERROR:
            infoErro.innerHTML = 'Ocorreu um erro não identificado.';
            break;
    }
}
