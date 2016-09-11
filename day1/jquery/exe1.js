var phrases = [
'I like surfing',

'Add some ingredients to your pizza',

'Make sure to add all the iterations'

];
var f=function () {
  var c=(parseInt(Math.random()*(2-0)+0));
  return  phrases[c];
}

$(document).on('ready',function () {
  $('.phrases').text(f());
})


$('input').on('keypress',function(event){
  var enter_key_code=event.keyCode;
  if (enter_key_code===13) {
    phrases.push($('input').val());
    $('.list_of_phrases').append("<p>"+" "+ $('input').val()+" "+'<button class="checkbox_remove">remove</button>'+"<br>"+"</p>")
    $ ('input').val("");
    $('.checkbox_remove').on('click',function () {
    })

  }
});

$(document).on('ready',function(){
    for (var i = 0; i < phrases.length; i++) {

      $('.list_of_phrases').append("<p>"+" "+phrases[i]+" "+'<button  class="checkbox_remove">Remove</button>'+"<br>"+"</p>")

      }

  });

  $('a').on('click',function () {
      $('.list_of_phrases').toggle('.list_of_phrases')
      $( ".checkbox_remove" ).closest( "p" )
  });
