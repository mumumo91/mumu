$(function (){
$('.要素１ li').hover(function(){
  $("ul:not(:animated)", this).slideDown();
},
function(){
$("ul.dropdown",this).slideUp();
});
});




$(function (){
$('.kamoku li').hover(function(){
  $("ul:not(:animated)", this).slideDown();
},
function(){
$("ul.dropdown",this).slideUp();
});
});
