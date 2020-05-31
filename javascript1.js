$(function (){
$('#header .要素１ li a').hover(function(){
  $("ul:not(:animated)", this).slideDown();
},
function(){
$("ul.dropdown",this).slideUp();
});
});




$(function (){
$('#sideber .kamoku li a').hover(function(){
  $("ul:not(:animated)", this).slideDown();
},
function(){
$("ul.dropdown",this).slideUp();
});
});
