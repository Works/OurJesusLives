// JavaScript Document
$('#msgDetails').live('pageshow', function(event) {
	var lang = getUrlVars()["lang"];
	$.getJSON(serviceURL + 'messageJson.php?lang='+lang,  function(data) {
		$.each(data, function(index, msg) {
			$('#msgList').append('<li data-theme="c">	' +
				'<a href="messageAudio.html?lang=' + lang + '&pastor=' + msg.pastor + '" data-transition="slide">' + msg.pastor + '</a>'+
			'</li>');
		});
		$('#msgList').listview('refresh');
		$('#heading h3').text('Pastors');

	});
});


