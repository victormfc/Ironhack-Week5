
//$.get('http://pokeapi.co/api/v2/pokemon/1/', function(response){
//  console.log(response)
//});

$("#submit").on("click", function () {
  event.preventDefault();	
  var identification = $("#search-box").val();
//  console.log($("#search-box").val());
$.ajax({
  type: "GET",
  url: "http://pokeapi.co/api/v2/pokemon/" + identification,
  success: showId,
});

  function showId(response){
    console.log("Success!");
    console.log(response);
};
});

  function takeInfo(pokeinfo){
  	

  	
  }
  descripcion: http://pokeapi.co/api/v2/pokemon-species/' + pokemonId

 //  PokemonApp.Pokemon = function (pokemonUri) {
 //   this.id = PokemonApp.idFromUri(pokemonUri);
 //  };

 //  PokemonApp.Pokemon.prototype.render = function () {
 //   console.log("Regarding pokemon: #" + this.id);
 //   $.ajax({
 //     url: "http://pokeapi.co/api/v2/pokemon/" + this.id,
 //     success: function (response) {
 //   	  console.log("Pokemon name: " + response.name);
 // 	    console.log("Pokemon number: " + response.pkdx_id);
 //   	  console.log("Pokemon height: " + response.height);
 //   	  console.log("Pokemon weight: " + response.weight);

 //   	  $(".js-pokemon.modal").modal("show");
 //     }  
 //   });
 // };

