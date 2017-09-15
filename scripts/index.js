var ipc = require('electron').ipcRenderer;
var $=require('./jquery.js')


$(function() {
    $('.close').click(function(){
			ipc.send('close-main-window');
	});
	
	var jqxhr = $.getJSON( "https://quotes.rest/qod", function() {
	  console.log( "success" );
	})
	  .done(function(data) {
		$('.lead').text(data.contents.quotes[0].quote);
		$('.author').text(data.contents.quotes[0].author);
		$('.jumbotron').css('background-image','url("'+data.contents.quotes[0].background+'")');
		$('.loader').hide();
		$('.jumbotron').show();
		
	  })
	  .fail(function() {
		console.log( "error" );
	  })
	  .always(function() {
		console.log( "complete" );
	  });
});
