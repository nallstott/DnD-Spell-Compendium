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
	<title>Sorcerer Spells</title>
	<link rel="icon" href="images/favicon.png" type="image/png">
	<link rel="stylesheet" href="https://use.typekit.net/cxo2npv.css">
	<link href="https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700&display=swap" rel="stylesheet">
	<link rel="stylesheet" href="style.css">
	<link rel="stylesheet" href="sorcerer.css">
	<script src="http://code.jquery.com/jquery-1.10.1.min.js"></script>
</head>
<body>
	<?php include 'header.php';?>
	<header class="spell-page-header">
		<h1>Sorcerer Spell List</h1>
	</header>
	<div class="body-container">
		<div class="spell-list-container">
			<div class="spell-list cantrip-list">
				<h3>Cantrips</h3>
					<ul>
						<li class="spell" id="acidSplash">Acid Splash</li>
						<li class="spell" id="bladeWard">Blade Ward</li>
						<li class="spell" id="chillTouch">Chill Touch</li>
						<li class="spell" id="dancingLights">Dancing Lights</li>
						<li class="spell" id="fireBolt">Fire Bolt</li>
						<li class="spell" id="friends">Friends</li>
						<li class="spell" id="light">Light</li>
						<li class="spell" id="mageHand">Mage Hand</li>
						<li class="spell" id="mending">Mending</li>
						<li class="spell" id="message">Message</li>
						<li class="spell" id="minorIllusion">Minor Illusion</li>
						<li class="spell" id="poisonSpray">Poison Spray</li>
						<li class="spell" id="prestidigitation">Prestidigitation</li>
						<li class="spell" id="rayOfFrost">Ray of Frost</li>
						<li class="spell" id="shockingGrasp">Schocking Grasp</li>
						<li class="spell" id="trueStrike">True Strike</li>
					</ul>
			</div>
			<div class="spell-list level1-list">
				<h3>Level 1</h3>
					<ul>
						<li class="spell" id="burningHands">Burning Hands</li>
						<li class="spell" id="charmPerson">Charm Person</li>
						<li class="spell" id="chromaticOrb">Chromatic Orb</li>
						<li class="spell" id="colorSpray">Color Spray</li>
						<li class="spell" id="comprehendLanguages">Comprehend Languages</li>
						<li class="spell" id="detectMagic">Detect Magic</li>
						<li class="spell" id="disguiseSelf">Disguise Self</li>
						<li class="spell" id="expeditiousRetreat">Expeditious Retreat</li>
						<li class="spell" id="falseLife">False Life</li>
						<li class="spell" id="featherFall">Feather Fall</li>
						<li class="spell" id="fogCloud">Fog Cloud</li>
						<li class="spell" id="jump">Jump</li>
						<li class="spell" id="mageArmor">Mage Armor</li>
						<li class="spell" id="magicMissile">Magic Missile</li>
						<li class="spell" id="rayOfSickness">Ray of Sickness</li>
						<li class="spell" id="shield">Shield</li>
						<li class="spell" id="silentImage">Silent Image</li>
						<li class="spell" id="sleep">Sleep</li>
						<li class="spell" id="thunderwave">Thunderwave</li>
						<li class="spell" id="witchBolt">Witch Bolt</li>
					</ul>
			</div>
			<div class="spell-list level2-list">
				<h3>Level 2</h3>
					<ul>
						<li class="spell" id="alterSelf">Alter Self</li>
						<li class="spell" id="blindnessDeafness">Blindess / Deafness</li>
						<li class="spell" id="blur">Blur</li>
						<li class="spell" id="cloudOfDaggers">Cloud of Daggers</li>
						<li class="spell" id="crownOfMadness">Crown of Madness</li>
						<li class="spell" id="darkness">Darkness</li>
						<li class="spell" id="darkvision">Darkvision</li>
						<li class="spell" id="detectThoughts">Detect Thoughts</li>
						<li class="spell" id="enhanceAbility">Enhance Ability</li>
						<li class="spell" id="enlargeReduce">Enlarge/Reduce</li>
						<li class="spell" id="gustOfWind">Gust of Wind</li>
						<li class="spell" id="holdPerson">Hold Person</li>
						<li class="spell" id="invisibility">Invisibility</li>
						<li class="spell" id="knock">Knock</li>
						<li class="spell" id="levitate">Levitate</li>
						<li class="spell" id="mirrorImage">Mirror Image</li>
						<li class="spell" id="mistyStep">Misty Step</li>
						<li class="spell" id="phantasmalForce">Phantasmal Force</li>
						<li class="spell" id="scorchingRay">Scorching Ray</li>
						<li class="spell" id="seeInvisibility">See Invisibility</li>
						<li class="spell" id="shatter">Shatter</li>
						<li class="spell" id="spiderClimb">Spider Climb</li>
						<li class="spell" id="suggestion">Suggestion</li>
						<li class="spell" id="web">Web</li>
					</ul>
			</div>
			<div class="spell-list level3-list">
				<h3>Level 3</h3>
					<ul>
						<li class="spell" id="blink">Blink</li>
						<li class="spell" id="clairvoyance">Clairvoyance</li>
						<li class="spell" id="counterspell">Counterspell</li>
						<li class="spell" id="daylight">Daylight</li>
						<li class="spell" id="dispelMagic">Dispel Magic</li>
						<li class="spell" id="fear">Fear</li>
						<li class="spell" id="fireball">Fireball</li>
						<li class="spell" id="fly">Fly</li>
						<li class="spell" id="gaseousForm">Gaseus Form</li>
						<li class="spell" id="haste">Haste</li>
						<li class="spell" id="hypnoticPattern">Hypnotic Pattern</li>
						<li class="spell" id="lightningBolt">Lightning Bolt</li>
						<li class="spell" id="majorImage">Major Image</li>
						<li class="spell" id="protectionFromEnergy">Protection from Energy</li>
						<li class="spell" id="sleetStorm">Sleet Storm</li>
						<li class="spell" id="slow">Slow</li>
						<li class="spell" id="stinkingCloud">Stinking Cloud</li>
						<li class="spell" id="tongues">Tongues</li>
						<li class="spell" id="waterBreathing">Water Breathing</li>
						<li class="spell" id="waterWalk">Water Walk</li>
					</ul>
			</div>
			<div class="spell-list level4-list">
				<h3>Level 4</h3>
					<ul>
						<li class="spell" id="banishment">Banishment</li>
						<li class="spell" id="blight">Blight</li>
						<li class="spell" id="confusion">Confusion</li>
						<li class="spell" id="dimensionDoor">Dimension Door</li>
						<li class="spell" id="dominateBeast">Dominate Beast</li>
						<li class="spell" id="greaterInvisibility">Greater Invisibility</li>
						<li class="spell" id="iceStorm">Ice Storm</li>
						<li class="spell" id="polymorph">Polymorph</li>
						<li class="spell" id="stoneskin">Stoneskin</li>
						<li class="spell" id="wallOfFire">Wall of Fire</li>
					</ul>
			</div>
			<div class="spell-list level5-list">
				<h3>Level 5</h3>
					<ul>
						<li class="spell" id="animateObjects">Animate Objects</li>
						<li class="spell" id="cloudkill">Cloudkill</li>
						<li class="spell" id="coneOfCold">Cone of Cold</li>
						<li class="spell" id="creation">Creation</li>
						<li class="spell" id="dominatePerson">Dominate Person</li>
						<li class="spell" id="holdMonster">Hold Monster</li>
						<li class="spell" id="insectPlague">Insect Plague</li>
						<li class="spell" id="seeming">Seeming</li>
						<li class="spell" id="telekinesis">Telekinesis</li>
						<li class="spell" id="teleportationCircle">Teleportation Cricle</li>
						<li class="spell" id="wallOfStone">Wall of Stone</li>
					</ul>
			</div>
			<div class="spell-list level6-list">
				<h3>Level 6</h3>
					<ul>
						<li class="spell" id="arcaneGate">Arcane Gate</li>
						<li class="spell" id="chainLightning">Chain Lightning</li>
						<li class="spell" id="circleOfDeath">Circle of Death</li>
						<li class="spell" id="disintegrate">Disintegrate</li>
						<li class="spell" id="eyebite">Eyebite</li>
						<li class="spell" id="globeOfInvulnerability">Globe of Invulnerability</li>
						<li class="spell" id="massSuggestion">Mass Suggestion</li>
						<li class="spell" id="moveEarth">Move Earth</li>
						<li class="spell" id="sunbeam">Sunbeam</li>
						<li class="spell" id="trueSeeing">True Seeing</li>
					</ul>
			</div>
			<div class="spell-list level7-list">
				<h3>Level 7</h3>
					<ul>
						<li class="spell" id="delayedBlastFireball">Delayed Blast Fireball</li>
						<li class="spell" id="etherealness">Etherealness</li>
						<li class="spell" id="fingerOfDeath">Finger of Death</li>
						<li class="spell" id="fireStorm">Fire Storm</li>
						<li class="spell" id="planeShift">Plane Shift</li>
						<li class="spell" id="prismaticSpray">Prismatic Spray</li>
						<li class="spell" id="reverseGravity">Reverse Gravity</li>
						<li class="spell" id="teleport">Teleport</li>
					</ul>
			</div>
			<div class="spell-list level8-list">
				<h3>Level 8</h3>
					<ul>
						<li class="spell" id="dominateMonster">Dominate Monster</li>
						<li class="spell" id="earthquake">Earthquake</li>
						<li class="spell" id="incendiaryCloud">Incendiary Cloud</li>
						<li class="spell" id="powerWordStun">Power Word Stun</li>
						<li class="spell" id="sunburst">Sunburst</li>
					</ul>
			</div>
			<div class="spell-list level9-list">
				<h3>Level 9</h3>
					<ul>
						<li class="spell" id="gate">Gate</li>
						<li class="spell" id="meteorSwarm">Meteor Swarm</li>
						<li class="spell" id="powerWordKill">Power Word Kill</li>
						<li class="spell" id="timeStop">Time Stop</li>
						<li class="spell" id="wish">Wish</li>
					</ul>
			</div>
		</div>
		<div id="spell-description-box">
			<div class="description-box-content">
				<div id="close-trigger">close</div>
				<h1 id="spell-name">Acid Splash</h1>
				<h5 id="spell-level">Level: Cantrip</h5>
				<h5 id="spell-type">Type: Conjuration</h5>
				<h5 id="spell-casting-time">Casting Time: 1 Action</h5>
				<h5 id="spell-range">Range: 60 feet</h5>
				<h5 id="spell-components">Components: V S</h5>
				<h5 id="spell-duration">Duration: Instantaneous</h5>
				<p id="spell-description">You hurl a bubble of acid. Choose one creature within range, or choose two creatures within range that are within 5 feet of each other. A target must succeed on a Dexterity saving throw or take 1d6 acid damage.</p>
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
