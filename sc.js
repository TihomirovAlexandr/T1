$(function(){   alert("KKAKAKAKAKK");
$('#buttonAdd').click(function(){

                       if ($(".swapmenu").is(":hidden")) {

                               $(".swapmenu").slideDown();

                       } else {

                               $(".swapmenu").slideUp();

                       }

});
 $("#hederbutton").hover(function() {
 $(".swpm").stop().animate({ backgroundColor: "#8d8d8d"}, 400);
 },function() {
 $(".swpm").stop().animate({ backgroundColor: "#000000" }, 400);
 });
});