// JavaScript Document
$('#msgAudio').live('pageshow', function(event) {
	var lang 	= getUrlVars()["lang"];
	var pastor	= getUrlVars()["pastor"];
	console.log(serviceURL + 'messageJson.php?lang='+lang + '&pastor=' + pastor);
	$.getJSON(serviceURL + 'messageJson.php?lang='+lang + '&pastor=' + pastor,  function(data) {
		$.each(data, function(index, paster) {
			$('#msgAudioList').append('<li data-theme="c">	' +
				'<a href="messagePlay.html?lang=' + lang + '&song=' + paster.song + '&id=' + paster.id + '&caption=' + paster.caption + '&paster=' + paster.pastor +'" data-transition="slide">'+paster.caption+'</a>'+
			'</li>');
		});
		$('#msgAudioList').listview('refresh');
		$('#heading h3').text(decodeURIComponent('Message of ' + pastor));
		$('#back').attr('href','messageDetails.html?lang='+lang);


	});
	
});