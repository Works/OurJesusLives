// JavaScript Document
$('#audios').live('pageshow', function(event) {
	var lang 		= getUrlVars()["lang"];
	var alphabet	= getUrlVars()["alphabet"];
	$.getJSON(serviceURL + 'audioJson.php?lang='+lang + '&alphabet=' + alphabet,  function(data) {
		$.each(data, function(index, song) {
			$('#audioList').append('<li data-theme="c">	' +
				'<a href="audioplay.html?lang=' + lang + '&song=' + song.file + '&title=' + song.title + '&alphabet=' + alphabet + '" data-transition="slide">'+song.title+'</a>'+
			'</li>');
		});
		$('#audioList').listview('refresh');
	});
	$('#heading h3').text(lang);
	$('#backto').attr('href','audioAlphabet.html?lang=' + lang);

});