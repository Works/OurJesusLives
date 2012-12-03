// JavaScript Document
$('#videos').live('pageshow', function(event) {
	var pastor = getUrlVars()["pastor"];
	console.log(serviceURL + 'videosJson.php?pastor='+pastor);
	$.getJSON(serviceURL + 'videosJson.php?pastor='+pastor,  function(data) {
		$.each(data, function(index, video) {
			$('#videosList').append('<li data-theme="c">	' +
				'<a href="videoplay.html?id=' + video.id + '" data-transition="slide">'+video.caption+'</a>'+
			'</li>');
		});
		$('#videosList').listview('refresh');
	});
	$('#heading h3').text(decodeURIComponent('Videos of ' + pastor));
});