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
	<title>Ranger Spells</title>
	<link rel="icon" href="images/favicon.png" type="image/png">
	<link rel="stylesheet" href="https://use.typekit.net/nha3vfk.css">
	<link href="https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700&display=swap" rel="stylesheet">
	<link rel="stylesheet" href="style.css">
	<link rel="stylesheet" href="ranger.css">
	<script src="http://code.jquery.com/jquery-1.10.1.min.js"></script>
</head>
<body>
    <?php include 'header.php';?>
	<header class="spell-page-header">
		<h1>Ranger Spell List</h1>
	</header>
	<div class="body-container">
		<div class="spell-list-container">
			<div class="spell-list level1-list">
				<h3>Level 1</h3>
					<ul>
						<li class="spell" id="alarm">Alarm</li>
						<li class="spell" id="animalFriendship">Animal Friendship</li>
						<li class="spell" id="cureWounds">Cure Wounds</li>
						<li class="spell" id="detectMagic">Detect Magic</li>
						<li class="spell" id="detectPoisonAndDisease">Detect Poison and Disease</li>
						<li class="spell" id="ensnaringStrike">Ensnaring Strike</li>
						<li class="spell" id="fogCloud">Fog Cloud</li>
						<li class="spell" id="goodberry">Goodberry</li>
						<li class="spell" id="hailOfThorns">Hail of Thorns</li>
						<li class="spell" id="huntersMark">Hunter's Mark</li>
						<li class="spell" id="jump">Jump</li>
						<li class="spell" id="longstrider">Longstrider</li>
						<li class="spell" id="speakWithAnimals">Speak with Animals</li>
					</ul>
			</div>
			<div class="spell-list level2-list">
				<h3>Level 2</h3>
					<ul>
						<li class="spell" id="animalMessenger">Animal Messenger</li>
						<li class="spell" id="barkskin">Barkskin</li>
						<li class="spell" id="beastSense">Beast Sense</li>
						<li class="spell" id="cordonOfArrows">Cordon of Arrows</li>
						<li class="spell" id="darkvision">Darkvision</li>
						<li class="spell" id="findTraps">Find Traps</li>
						<li class="spell" id="lesserRestoration">Lesser Restoration</li>
						<li class="spell" id="locateAnimalsOrPlants">Locate Animals or Plants</li>
						<li class="spell" id="locateObject">Locate Object</li>
						<li class="spell" id="passWithoutTrace">Pass without Trace</li>
						<li class="spell" id="protectionFromPoison">Protection from Poison</li>
						<li class="spell" id="silence">Silence</li>
						<li class="spell" id="spikeGrowth">Spike Growth</li>
					</ul>
			</div>
			<div class="spell-list level3-list">
				<h3>Level 3</h3>
					<ul>
						<li class="spell" id="conjureAnimals">Conjure Animals</li>
						<li class="spell" id="conjureBarrage">Conjure Barrage</li>
						<li class="spell" id="daylight">Daylight</li>
						<li class="spell" id="lightningArrow">Lightning Arrow</li>
						<li class="spell" id="nondetection">Nondetection</li>
						<li class="spell" id="plantGrowth">Plant Growth</li>
						<li class="spell" id="protectionFromEnergy">Protection from Energy</li>
						<li class="spell" id="speakWithPlants">Speak with Plants</li>
						<li class="spell" id="waterBreathing">Water Breathing</li>
						<li class="spell" id="waterWalk">Water Walk</li>
						<li class="spell" id="windWall">Wind Wall</li>
					</ul>
			</div>
			<div class="spell-list level4-list">
				<h3>Level 4</h3>
					<ul>
						<li class="spell" id="conjureWoodlandBeings">Conjure Woodland Beings</li>
						<li class="spell" id="freedomOfMovement">Freedom of Movement</li>
						<li class="spell" id="graspingVine">Grasping Vine</li>
						<li class="spell" id="locateCreature">Locate Creature</li>
						<li class="spell" id="stoneskin">Stoneskin</li>
					</ul>
			</div>
			<div class="spell-list level5-list">
				<h3>Level 5</h3>
					<ul>
						<li class="spell" id="communeWithNature">Commune with Nature</li>
						<li class="spell" id="conjureVolley">Conjure Volley</li>
						<li class="spell" id="swiftQuiver">Swift Quiver</li>
						<li class="spell" id="treeStride">Tree Stride</li>
					</ul>
			</div>
		</div>
		<div id="spell-description-box">
			<div class="description-box-content">
				<div id="close-trigger">close</div>
				<h1 id="spell-name">Alarm</h1>
				<h5 id="spell-level">Level: 1</h5>
				<h5 id="spell-type">Type: Abjuration (ritual)</h5>
				<h5 id="spell-casting-time">Casting Time: 1 minute</h5>
				<h5 id="spell-range">Range: 30 feet</h5>
				<h5 id="spell-components">Components: V S M (a tiny bell and a piece of fine silver wire)</h5>
				<h5 id="spell-duration">Duration: 8 hours</h5>
				<p id="spell-description">You set an alarm against unwanted intrusion. Choose a door, a window, or an area within range that is no larger than a 20-foot cube. Until the spell ends, an alarm alerts you whenever a Tiny or larger creature touches or enters the warded area. When you cast the spell, you can designate creatures that won't set off the alarm. You also choose whether the alarm is mental or audible.<br>A mental alarm alerts you with a ping in your mind if you are within 1 mile of the warded area. This ping awakens you if you are sleeping.<br>An audible alarm produces the sound of a hand bell for 10 seconds within 60 feet.</p>
				<form method="POST" action="srdClearance.php" id="SRD-clearance-form" style="display: none">
					<br>
					<input type="text" name="clearance" id="clearance"/>
					<input type="submit" style="display: none" id="submitSRD"/>
					<script type="text/javascript">
						document.getElementByID('#clearance').addEventListener('keyup', function(event){
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
	<script type="text/javascript" src="./spells.js"></script>
</body>
</html>
