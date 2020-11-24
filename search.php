<!DOCTYPE html>
<html lang="en-US">
<head>
	<!-- Global site tag (gtag.js) - Google Analytics -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=UA-109114111-4"></script>
	<script>
	  window.dataLayer = window.dataLayer || [];
	  function gtag(){dataLayer.push(arguments);}
	  gtag('js', new Date());

	  gtag('config', 'UA-109114111-4');
	</script>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA=Compatible" content="ie=edge">
	<title>Search for Spell</title>
	<link rel="icon" href="images/favicon.png" type="image/png">
	<link rel="stylesheet" href="https://use.typekit.net/nha3vfk.css">
	<link href="https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700&display=swap" rel="stylesheet">
	<link rel="stylesheet" href="style.css">
	<link rel="stylesheet" href="search.css">
	<script src="http://code.jquery.com/jquery-1.10.1.min.js"></script>
</head>
<body>
    <?php include 'header.php';?>
	<header class="spell-page-header">
		<h1>Search for Spell</h1>
	</header>
	<div class="body-container">
		<p class="search-intro">This isn’t Google. Type in the name of the spell as it appears in The Player’s Handbook.</p>
		<input class="list-input" type="text" id="search-input" name="search-input" placeholder="Fireball" / >
		<button id="searchBtn">Search for Spell</button>
		<div class="search-return">
			<div class="searched-spell-list">
				<div class="description-box-content">
					<h1 id="spell-name"></h1>
					<h5 id="spell-level"></h5>
					<h5 id="spell-type"></h5>
					<h5 id="spell-casting-time"></h5>
					<h5 id="spell-range"></h5>
					<h5 id="spell-components"></h5>
					<h5 id="spell-duration"></h5>
					<p id="spell-description"></p>
					<form method="POST" action="srdClearance.php" id="SRD-clearance-form" style="display: none">
						<br>
						<input type="text" name="clearance" id="clearance"/>
						<input type="submit" style="display: none" id="submitSRD"/>
						<script type="text/javascript">
							const clearance = document.querySelector('#clearance');
							clearance.addEventListener('keyup', function(event){
								if (event.keyCode === 13){
									event.preventDefault();
									$('submitSRD').click();
								}
							});
						</script>
						<br>
					</form>
				</div>
			</div>
	</div>
	<?php include 'footer.php';?>
	<script type="text/javascript" src="./search.js"></script>
</body>
</html>
