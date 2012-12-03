// JavaScript Document
$('#audioplay').live('pageshow', function(event) {
	var lang 	= getUrlVars()["lang"];
	var song 	= getUrlVars()["song"];
	var title 	= getUrlVars()["title"];
	var alphabet	= getUrlVars()["alphabet"];

	console.log(song);
	console.log('http://ourjesuslives.org/songs/'+ lang + '/' + song);
	$('#songTitle strong').html(decodeURIComponent(title));
	$('#mp3Source')
		.attr('src',
		   'http://ourjesuslives.org/songs/'+ lang + '/' + song)
		.detach().appendTo($("#audioPlayer"));
			$('#mp3Source')
	$('#backfplay').attr('href', 'audios.html?lang='+ lang + '&alphabet=' + alphabet);

});