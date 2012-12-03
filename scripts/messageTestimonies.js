// JavaScript Document
$('#msgTest').live('pageshow', function(event) {
	console.log(serviceURL + 'msgTestimoniesJson.php');
	$.getJSON(serviceURL + 'msgTestimoniesJson.php',  function(data) {
		$.each(data, function(index, testimony) {
			$('#msgTestList').append('<li data-theme="c">	' +
				'<a href="testimonyPlay.html?id=' + testimony.id + '&audio=' + testimony.audio +'" data-transition="slide">'+testimony.caption+'</a>'+
			'</li>');
		});
		$('#msgTestList').listview('refresh');
	});
	$('#heading h3').text(decodeURIComponent('Audio Testimonies'));
});