
$(function(){
  $("#header").load("header.html");
    $("#footer").load("footer.html");
});




$(function(){
$('.要素１ li').hover(function(){
  $("ul:not(:animated)", this).slideDown();
},
function(){
$("ul.dropdown",this).slideUp();
});
});
