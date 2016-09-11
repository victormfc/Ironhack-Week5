// Write your Pizza Builder JavaScript in this file.
//Boton Pepperoni

$('.btn-pepperonni').on('click',function () {
 $('.pep').toggle('slow');
   $('.btn-pepperonni').toggleClass('active')
 
})


//Boton mushroom

$('.btn-mushrooms').on('click',function () {
 $('.mushroom').toggle('slow');
   $('.btn-mushrooms').toggleClass('active')
})


//Boton green-peppers

$('.btn-green-peppers').on('click',function () {
 $('.green-pepper').toggle('slow');
   $('.btn-green-peppers').toggleClass('active')
})


//Boton sauce

$('.btn-sauce').on('click',function () {
   $('.sauce').toggleClass('sauce-white');
     $('.btn-sauce').toggleClass('active')


})

//Boton crust

$('.btn-crust').on('click',function () {
 $('.crust').toggleClass('crust-gluten-free');
   $('.btn-crust').toggleClass('active')
})

$(document).on('ready',function () {
 $('.crust').toggleClass('crust-gluten-free');
   $('.btn-crust').toggleClass('active')
})

$(document).on('ready',function () {
 $('.sauce').toggleClass('sauce-white');
   $('.btn-sauce').toggleClass('active')
})

