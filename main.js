(function() {



var $quoteMachine = $('.quote-machine');
var html="";





$.getJSON('https://wisdomapi.herokuapp.com/v1/random?callback=?', function(data){
	console.log(data);
	html+='<h2>Inspirational Quotes for Entrepreneurs</h2> <h1>'+data.content+'</h1> <p> -'+data.author.name+', '+data.author.company+'</p>';
	$quoteMachine.html(html);

	console.log(data);


});

 } () );