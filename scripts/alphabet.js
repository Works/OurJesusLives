// JavaScript Document
$('#alpha').live('pageshow', function(event) {
	var lang 		= getUrlVars()["lang"];
	$.getJSON(serviceURL + 'alphabetJson.php?lang='+lang ,  function(data) {
		$.each(data, function(index, alpha) {
							  
			$('#alphabetList').append('<li data-theme="c">	' +
				'<a href="audios.html?lang=' + lang + '&alphabet=' + 'A' + '" data-transition="slide">'+ 'A' +'</a>'+
			'</li>');
			$('#alphabetList').append('<li data-theme="c">	' +
				'<a href="audios.html?lang=' + lang + '&alphabet=' + 'B' + '" data-transition="slide">'+ 'B' +'</a>'+
			'</li>');
			$('#alphabetList').append('<li data-theme="c">	' +
				'<a href="audios.html?lang=' + lang + '&alphabet=' + 'C' + '" data-transition="slide">'+ 'C' +'</a>'+
			'</li>');
			$('#alphabetList').append('<li data-theme="c">	' +
				'<a href="audios.html?lang=' + lang + '&alphabet=' + 'D' + '" data-transition="slide">'+ 'D' +'</a>'+
			'</li>');
			$('#alphabetList').append('<li data-theme="c">	' +
				'<a href="audios.html?lang=' + lang + '&alphabet=' + 'E' + '" data-transition="slide">'+ 'E' +'</a>'+
			'</li>');
			$('#alphabetList').append('<li data-theme="c">	' +
				'<a href="audios.html?lang=' + lang + '&alphabet=' + 'F' + '" data-transition="slide">'+ 'F' +'</a>'+
			'</li>');
			$('#alphabetList').append('<li data-theme="c">	' +
				'<a href="audios.html?lang=' + lang + '&alphabet=' + 'G' + '" data-transition="slide">'+ 'G' +'</a>'+
			'</li>');
			$('#alphabetList').append('<li data-theme="c">	' +
				'<a href="audios.html?lang=' + lang + '&alphabet=' + 'H' + '" data-transition="slide">'+ 'H' +'</a>'+
			'</li>');
			$('#alphabetList').append('<li data-theme="c">	' +
				'<a href="audios.html?lang=' + lang + '&alphabet=' + 'I' + '" data-transition="slide">'+ 'I' +'</a>'+
			'</li>');
			$('#alphabetList').append('<li data-theme="c">	' +
				'<a href="audios.html?lang=' + lang + '&alphabet=' + 'J' + '" data-transition="slide">'+ 'J' +'</a>'+
			'</li>');
			$('#alphabetList').append('<li data-theme="c">	' +
				'<a href="audios.html?lang=' + lang + '&alphabet=' + 'K' + '" data-transition="slide">'+ 'K' +'</a>'+
			'</li>');
			$('#alphabetList').append('<li data-theme="c">	' +
				'<a href="audios.html?lang=' + lang + '&alphabet=' + 'L' + '" data-transition="slide">'+ 'L' +'</a>'+
			'</li>');
			$('#alphabetList').append('<li data-theme="c">	' +
				'<a href="audios.html?lang=' + lang + '&alphabet=' + 'M' + '" data-transition="slide">'+ 'M' +'</a>'+
			'</li>');
			$('#alphabetList').append('<li data-theme="c">	' +
				'<a href="audios.html?lang=' + lang + '&alphabet=' + 'N' + '" data-transition="slide">'+ 'N' +'</a>'+
			'</li>');
			$('#alphabetList').append('<li data-theme="c">	' +
				'<a href="audios.html?lang=' + lang + '&alphabet=' + 'O' + '" data-transition="slide">'+ 'O' +'</a>'+
			'</li>');
			$('#alphabetList').append('<li data-theme="c">	' +
				'<a href="audios.html?lang=' + lang + '&alphabet=' + 'P' + '" data-transition="slide">'+ 'P' +'</a>'+
			'</li>');
			$('#alphabetList').append('<li data-theme="c">	' +
				'<a href="audios.html?lang=' + lang + '&alphabet=' + 'Q' + '" data-transition="slide">'+ 'Q' +'</a>'+
			'</li>');
			$('#alphabetList').append('<li data-theme="c">	' +
				'<a href="audios.html?lang=' + lang + '&alphabet=' + 'R' + '" data-transition="slide">'+ 'R' +'</a>'+
			'</li>');
			$('#alphabetList').append('<li data-theme="c">	' +
				'<a href="audios.html?lang=' + lang + '&alphabet=' + 'S' + '" data-transition="slide">'+ 'S' +'</a>'+
			'</li>');
			$('#alphabetList').append('<li data-theme="c">	' +
				'<a href="audios.html?lang=' + lang + '&alphabet=' + 'T' + '" data-transition="slide">'+ 'T' +'</a>'+
			'</li>');
			$('#alphabetList').append('<li data-theme="c">	' +
				'<a href="audios.html?lang=' + lang + '&alphabet=' + 'U' + '" data-transition="slide">'+ 'U' +'</a>'+
			'</li>');
			$('#alphabetList').append('<li data-theme="c">	' +
				'<a href="audios.html?lang=' + lang + '&alphabet=' + 'V' + '" data-transition="slide">'+ 'V' +'</a>'+
			'</li>');
			$('#alphabetList').append('<li data-theme="c">	' +
				'<a href="audios.html?lang=' + lang + '&alphabet=' + 'W' + '" data-transition="slide">'+ 'W' +'</a>'+
			'</li>');
			$('#alphabetList').append('<li data-theme="c">	' +
				'<a href="audios.html?lang=' + lang + '&alphabet=' + 'X' + '" data-transition="slide">'+ 'X' +'</a>'+
			'</li>');
			$('#alphabetList').append('<li data-theme="c">	' +
				'<a href="audios.html?lang=' + lang + '&alphabet=' + 'Y' + '" data-transition="slide">'+ 'Y' +'</a>'+
			'</li>');
			$('#alphabetList').append('<li data-theme="c">	' +
				'<a href="audios.html?lang=' + lang + '&alphabet=' + 'Z' + '" data-transition="slide">'+ 'Z' +'</a>'+
			'</li>');
		});
		$('#alphabetList').listview('refresh');
	});
	$('#heading h3').text(lang);
});