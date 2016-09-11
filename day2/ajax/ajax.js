$('#js-btn').on('click', function(){

$.ajax({
type:"GET",
url: "https://ironhack-characters.herokuapp.com/characters",
success: showCharacters, 
error: handleError,
});

function showCharacters(response){
    //callbacks argument contains the response from server
    console.log("Success!");
    console.log(response);
    //always we have to start by printing the response
    // $('.js-character-list').

    var charactersArray = response;
    //the response is an array
    charactersArray.forEach(function(theCharacter){
    //loop over the array
        var html = "<li>" + theCharacter.name + "</lil>";
    //make some html for each array item
        $('#js-characters-list').append(html);
    //append it to the dom, in this case ul
    });
};

function handleError(error){
    console.log("Error!");
    console.log(error.responseText);
};



$.ajax({
    type: "POST",
    url: "https://ironhack-characters.herokuapp.com/characters",
    data: JSON.parse($('#js-new-character').val()),
    //we receive responses as string. to turn or send them as objects
    //and arrays we use json.parse
    success: updateList,
    error: handleError
});

function updateList(response){
    var object = response;
    var html1 = "<li>" + object.name + "</lil>";
    $('#js-characters-list').append(html1);
}
})

// have to add text as an object: {"name":"Victor","occupation":"Smuggler",
//"debt":true,"weapon":"Blaster Pistol","id":1}





