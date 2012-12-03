// JavaScript Document
$('#pastors').live('pageshow', function(event) {
	$.getJSON(serviceURL + 'pastorsJson.php',  function(data) {
		$.each(data, function(index, pastor) {
			$('#pastorsList').append('<li data-theme="c">	' +
				'<a href="videos.html?pastor=' + pastor.name + '" data-transition="slide">' + pastor.name + '</a>'+
			'</li>');
		});
		$('#pastorsList').listview('refresh');
		$('#heading h3').text('Pastors');

	});
});