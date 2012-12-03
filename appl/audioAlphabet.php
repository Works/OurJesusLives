<?php
$lang	= $_GET['lang'];

?>
<!DOCTYPE html> 
<html>
<head>
</head> 
<body> 

<div data-role="page" id="home"  data-add-back-btn="true">
		<div data-theme="b" data-role="header">
        <a href="audio.html" data-icon="arrow-l">Back</a>
    		<h3> Our Jesus Lives </h3>
            <a href="index.html" data-icon="home" data-theme="b">Home</a>
  		</div><br />
        
        
        <br/>
        
        
		<ul data-role="listview" data-divider-theme="b" data-inset="true" id='audioList'  data-filter="true" style="margin-top:15px;">
				<li><a href="audios.html?lang=<?=$lang;?>&alphabet=A" data-theme="d">A</a></li>
				<li><a href="audios.html?<?=$lang;?>&alphabet=B" data-theme="d">B</a></li>
				<li><a href="audios.html?lang=<?=$lang;?>&alphabet=C" data-theme="d">C</a></li>
				<li><a href="audios.html?lang=<?=$lang;?>&alphabet=D"  data-theme="d">D</a></li>
				<li><a href="audios.html?lang=<?=$lang;?>&alphabet=E" data-theme="d">E</a></li>
			
				<li><a href="audios.html?lang=<?=$lang;?>&alphabet=F" data-theme="d">F</a></li>
				<li><a href="audios.html?<?=$lang;?>&alphabet=G" data-theme="d">G</a></li>
				<li><a href="audios.html?lang=<?=$lang;?>&alphabet=H" data-theme="d">H</a></li>
				<li><a href="audios.html?lang=<?=$lang;?>&alphabet=I"  data-theme="d">I</a></li>
				<li><a href="audios.html?lang=<?=$lang;?>&alphabet=J" data-theme="d">J</a></li>
			
				<li><a href="audios.html?lang=<?=$lang;?>&alphabet=K" data-theme="d">K</a></li>
				<li><a href="audios.html?<?=$lang;?>&alphabet=L" data-theme="d">L</a></li>
				<li><a href="audios.html?lang=<?=$lang;?>&alphabet=M" data-theme="d">M</a></li>
				<li><a href="audios.html?lang=<?=$lang;?>&alphabet=N"  data-theme="d">N</a></li>
				<li><a href="audios.html?lang=<?=$lang;?>&alphabet=O" data-theme="d">O</a></li>
			
				<li><a href="audios.html?lang=<?=$lang;?>&alphabet=P" data-theme="d">P</a></li>
				<li><a href="audios.html?<?=$lang;?>&alphabet=Q" data-theme="d">Q</a></li>
				<li><a href="audios.html?lang=<?=$lang;?>&alphabet=R" data-theme="d">R</a></li>
				<li><a href="audios.html?lang=<?=$lang;?>&alphabet=S"  data-theme="d">S</a></li>
				<li><a href="audios.html?lang=<?=$lang;?>&alphabet=T" data-theme="d">T</a></li>
			
				<li><a href="audios.html?lang=<?=$lang;?>&alphabet=U" data-theme="d">U</a></li>
				<li><a href="audios.html?<?=$lang;?>&alphabet=V" data-theme="d">V</a></li>
				<li><a href="audios.html?lang=<?=$lang;?>&alphabet=W" data-theme="d">W</a></li>
				<li><a href="audios.html?lang=<?=$lang;?>&alphabet=X"  data-theme="d">X</a></li>
				<li><a href="audios.html?lang=<?=$lang;?>&alphabet=Y" data-theme="d">Y</a></li>
                <li><a href="audios.html?lang=<?=$lang;?>&alphabet=Z" data-theme="d">Z</a></li>
			</ul>
		
         
        <div data-theme="b" data-role="footer" data-position="fixed">
    		<div data-role="navbar" data-iconpos="left">
                <ul>
                    <li> <a href="audio.html" data-theme="a" data-icon="gear" data-transition="slide"> Audio </a> </li>
                    <li> <a href="pastors.html" data-theme="" data-icon="plus"> Video </a> </li>
                    <li> <a href="messages.html" data-theme="" data-icon="star"> Messages </a> </li>
                </ul>
            </div>
  		</div>
</div>

</body>
</html>