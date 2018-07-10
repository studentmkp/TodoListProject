//Check off specific Todos by Clicking

// //Method 1 with if
// $("ul").on("click", "li", function(){
//   //if li is gray
//   if($(this).css("color")=== "rgb(128, 128, 128)"){
//     //turn it black
//     $(this).css("color", "black");
//   }
//   //else
//   else{
//     //turn it gray
//     $(this).css({
//       color: "gray",
//       textDecoration: "line-through"
//       });
//   }
// });

//Method 2 with class="completed" in css file
$("ul").on("click", "li", function(){
  $(this).toggleClass("completed");
});

//click X to delete todo
$("ul").on("click", "span", function(event){
  $(this).parent().fadeOut(500, function(){
    //(this) refers to span
    $(this).remove();
    //(this) refers to span + li
  });
  event.stopPropagation();
});

//Set up Enter key(13) on input
$("input[type= 'text']").keypress(function(event){
  if(event.which === 13){
    //garbbing new todo text from input
    var todoText = $(this).val();
    //clean the input after hit Enter (empty value)
    $(this).val("");
    //create a new li and add to ul
    $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
  }
});

$(".fa-plus").click(function(){
  $("input[type='text']").fadeToggle();
})
