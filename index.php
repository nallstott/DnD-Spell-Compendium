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
	<meta name="keywords" content="DnD, 5e, Spells, Spell Compendium, Class Spells">
	<meta name="description" content="A spell compendium organized by spell-casting class in the world of DnD 5e designed for quick browsing."
	<meta http-equiv="X-UA=Compatible" content="ie=edge">
	<title>DnD 5e Spell Compendium</title>
	<link rel="icon" href="images/favicon.png" type="image/png">
	<link rel="stylesheet" href="https://use.typekit.net/nha3vfk.css">
	<link href="https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700&display=swap" rel="stylesheet">
	<link rel="stylesheet" href="style.css">
	<link rel="stylesheet" href="index.css">
	<script src="http://code.jquery.com/jquery-1.10.1.min.js"></script>
</head>
<body>
	<header class="home-header">
		<div class="black-20p-overlay"></div>
		<h1>DnD 5e Spell Compendium</h1>
		<p>This is a resource for players to use when browsing spells available to their characters and exploring the different class capabilities. It is meant to be a supplement to resources like The Player’s Handbook and the existing online resources. The spells included are based on the spell lists and classes in the player’s handbook, and spells made available by warlock pacts, cleric domains, and other class specific expansions of the standard spell lists.</p>
	</header>
	<div class="body-container">
		<div class="page-link-div">
			<div class="page-link-div-image" id="bard-page-link-div"></div>
			<a href="bard.php">
				<h2>Bard</h2>
			</a>
		</div>
		<div class="page-link-div">
			<div class="page-link-div-image" id="cleric-page-link-div"></div>
			<a href="cleric.php">
				<h2>Cleric</h2>
			</a>
		</div>
		<div class="page-link-div">
			<div class="page-link-div-image" id="druid-page-link-div"></div>
			<a href="druid.php">
				<h2>Druid</h2>
			</a>
		</div>
		<div class="page-link-div">
			<div class="page-link-div-image" id="paladin-page-link-div"></div>
			<a href="paladin.php">
				<h2>Paladin</h2>
			</a>
		</div>
		<div class="page-link-div">
			<div class="page-link-div-image" id="ranger-page-link-div"></div>
			<a href="ranger.php">
				<h2>Ranger</h2>
			</a>
		</div>
		<div class="page-link-div">
			<div class="page-link-div-image" id="sorcerer-page-link-div"></div>
			<a href="sorcerer.php">
				<h2>Sorcerer</h2>
			</a>
		</div>
		<div class="page-link-div">
			<div class="page-link-div-image" id="warlock-page-link-div"></div>
			<a href="warlock.php">
				<h2>Warlock</h2>
			</a>
		</div>
		<div class="page-link-div">
			<div class="page-link-div-image" id="wizard-page-link-div"></div>
			<a href="wizard.php">
				<h2>Wizard</h2>
			</a>
		</div>
		<div class="page-link-div full">
			<div class="page-link-div-image" id="search-page-link-div"></div>
			<a href="search.php">
				<h2>Spell Search</h2>
			</a>
		</div>
	</div>
	<?= include 'footer.php';?>
</body>
</html>
