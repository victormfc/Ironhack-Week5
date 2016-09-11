$('#js-btn').on('click', function(){

	var inputValue = $('#POST-name').val();
//aquí guardamos el valor de la busqueda q hacemos en el cuadro
	$.ajax({
		type:"GET",
		url:"https://api.spotify.com/v1/search?q="+inputValue+"&type=artist",
//metemos el valor de la busqueda en la url
		success: takeInfo,
		error: handleError,
	});

	function takeInfo(response){
		for(var i = 0; i < response.artists.items.length; i++){
			var artist = response.artists.items[i];
			showArtist(artist);
			takeId(artist);
		}

	};

	function showArtist(artist){
//aqui artist sí está definido
		var html_name = "<p><li>" + artist.name;
		$('#js-artist-name-photo').append(html_name);
		if (artist.images.length > 0){
			var html_image = "<img src=" + artist.images[2].url + "></li></p>";
			$('#js-artist-name-photo').append(html_image)
		} else { $('#js-artist-name-photo').append("</li></p>") }; 
	};

	function takeId(artist){
		var id = artist.id;
		console.log(id);
	}

	function handleError(error){
	console.log("Error!");
	console.log(error.responseText);
	};

	$.ajax({
		type:"GET",
		url:"https"
	})

})