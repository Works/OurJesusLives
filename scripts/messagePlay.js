// JavaScript Document
$('#messagePlay').live('pageshow', function(event) {
	var lang 	= getUrlVars()["lang"];
	var song 	= getUrlVars()["song"];
	var caption = getUrlVars()["caption"];
	var paster 	= getUrlVars()["paster"];
	var id		= getUrlVars()["id"];
	console.log(song);
	console.log(serviceURL + 'messageJson.php?lang='+lang + '&song=' + song);
	$.getJSON(serviceURL + 'messageJson.php?lang='+lang,  function(data) {
		$('#songTitle strong').html(decodeURIComponent(caption));
		$('#mp3Source')
		.attr('src',
		'http://ourjesuslives.org/audio_uploads/' + song)
		.detach().appendTo($("#audioPlayer"));
		$('#mp3Source')
		$('#backPlay').attr('href','messageAudio.html?lang=' + lang + '&pastor=' + paster);
	});
	
});

