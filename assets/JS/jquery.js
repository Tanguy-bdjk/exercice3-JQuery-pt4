$(function(){
var prix = 0;
var paris = null;
prix = Math.floor(Math.random() * (100 - 0) + 1);
console.log(prix);
$('#paris').click(function(){
  paris = $('#nombre').val();
  if(paris == prix){
    alert('Gagné');
  } else if (paris > prix){
    $('#response').html("Moins");
  } else {
    $('#response').html("Plus");
  }
    $('#count').get(0).value++;
});
});
