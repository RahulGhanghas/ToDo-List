// Check off Specific Todos By Clicking
$('ul').on("click", "li", function(){
	
	$(this).toggleClass("completed");

	/*if($(this).css("color") === "rgb(128, 128, 128)"){
		$(this).css({
			color: "black",
			textDecoration: "none"
		});
	}
	else{
		$(this).css({
			color: 'gray',
			textDecoration: 'Line-through'
		});
	}*/

});

//Click on X to delete Todo
$('ul').on("click", "span", function(event){
	$(this).parent().fadeOut(function(){
		$(this).remove();
	});
	//Event Bubble
	event.stopPropagation();
});

//Creating new todos
$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//grabbing new todo text from input
		var todoText = $(this).val();
		//clear the input after enter
		$(this).val("");
		//create a new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
	}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});
