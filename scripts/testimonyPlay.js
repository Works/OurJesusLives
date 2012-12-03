// JavaScript Document
$('#testimonyPlay').live('pageshow', function(event) {
	var id		= getUrlVars()["id"];
	var audio	= getUrlVars()["audio"];
	console.log(audio);
	console.log(serviceURL + 'msgTestimoniesJson.php?id='+id);
	$.getJSON(serviceURL + 'msgTestimoniesJson.php?id='+id,  function(data) {
		$('#testimonyTitle strong').html(decodeURIComponent('Audio Testimonies'));
		$('#mp3Source')
		.attr('src',
		'http://ourjesuslives.org/songs/testimony/' + audio)
		.detach().appendTo($("#audioPlayer"));
		$('#mp3Source')
		$('#backPlay').attr('href','messageTestimonies.html');
	});
	
});

