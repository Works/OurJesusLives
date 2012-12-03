// JavaScript Document
$('#videoPlay').live('pageshow', function(event) {
	var id = getUrlVars()["id"];
	$.getJSON(serviceURL + 'videoJson.php?id='+id,  function(data) {
		$('#heading').text((data.pastor + data.caption));
		$('#video').html((data.video));
		$('#back').attr('href','videos.html?pastor='+data.pastor);
	});
	
});