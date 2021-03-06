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
	<title>Wizard Spells</title>
	<link rel="icon" href="images/favicon.png" type="image/png">
	<link rel="stylesheet" href="https://use.typekit.net/cxo2npv.css">
	<link href="https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700&display=swap" rel="stylesheet">
	<link rel="stylesheet" href="style.css">
	<link rel="stylesheet" href="wizard.css">
	<script src="http://code.jquery.com/jquery-1.10.1.min.js"></script>
</head>
<body>
    <?php include 'header.php';?>
	<header class="spell-page-header">
		<img src="images/MadMage_Expansion_2560x1600_Wallpaper_Template.jpg"/>
		<h1>Wizard Spell List</h1>
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
						<li class="spell" id="alarm">Alarm</li>
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
						<li class="spell" id="findFamiliar">Find Familiar</li>
						<li class="spell" id="fogCloud">Fog Cloud</li>
						<li class="spell" id="grease">Grease</li>
						<li class="spell" id="identify">Identify</li>
						<li class="spell" id="illusoryScript">Illusory Script</li>
						<li class="spell" id="jump">Jump</li>
						<li class="spell" id="longstrider">Longstrider</li>
						<li class="spell" id="mageArmor">Mage Armor</li>
						<li class="spell" id="magicMissile">Magic Missile</li>
						<li class="spell" id="protectionFromEvilAndGood">Protection From Evil and Good</li>
						<li class="spell" id="rayOfSickness">Ray of Sickness</li>
						<li class="spell" id="shield">Shield</li>
						<li class="spell" id="silentImage">Silent Image</li>
						<li class="spell" id="sleep">Sleep</li>
						<li class="spell" id="tashasHideousLaughter">Tasha's Hideous Laughter</li>
						<li class="spell" id="tensersFloatingDisk">Tenser's Floating Disk</li>
						<li class="spell" id="thunderwave">Thunderwave</li>
						<li class="spell" id="unseenServant">Unseen Servant</li>
						<li class="spell" id="witchBolt">Witch Bolt</li>
					</ul>
			</div>
			<div class="spell-list level2-list">
				<h3>Level 2</h3>
					<ul>
						<li class="spell" id="alterSelf">Alter Self</li>
						<li class="spell" id="arcaneLock">Arcane Lock</li>
						<li class="spell" id="blindnessDeafness">Blindess / Deafness</li>
						<li class="spell" id="blur">Blur</li>
						<li class="spell" id="cloudOfDaggers">Cloud of Daggers</li>
						<li class="spell" id="continualFlame">Continual Flame</li>
						<li class="spell" id="crownOfMadness">Crown of Madness</li>
						<li class="spell" id="darkness">Darkness</li>
						<li class="spell" id="darkvision">Darkvision</li>
						<li class="spell" id="detectThoughts">Detect Thoughts</li>
						<li class="spell" id="enlargeReduce">Enlarge/Reduce</li>
						<li class="spell" id="flamingSphere">Flaming Sphere</li>
						<li class="spell" id="gentleRepose">Gentle Repose</li>
						<li class="spell" id="gustOfWind">Gust of Wind</li>
						<li class="spell" id="holdPerson">Hold Person</li>
						<li class="spell" id="invisibility">Invisibility</li>
						<li class="spell" id="knock">Knock</li>
						<li class="spell" id="levitate">Levitate</li>
						<li class="spell" id="locateObject">Locate Object</li>
						<li class="spell" id="magicMouth">Magic Mouth</li>
						<li class="spell" id="magicWeapon">Magic Weapon</li>
						<li class="spell" id="melfsAcidArrow">Melf's Acid Arrow</li>
						<li class="spell" id="mirrorImage">Mirror Image</li>
						<li class="spell" id="mistyStep">Misty Step</li>
						<li class="spell" id="nystulsMagicAura">Nystul's Magic Aura</li>
						<li class="spell" id="phantasmalForce">Phantasmal Force</li>
						<li class="spell" id="rayOfEnfeeblement">Ray of Enfeeblement</li>
						<li class="spell" id="ropeTrick">Rope Trick</li>
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
						<li class="spell" id="animateDead">Animate Dead</li>
						<li class="spell" id="bestowCurse">Bestow Curse</li>
						<li class="spell" id="blink">Blink</li>
						<li class="spell" id="clairvoyance">Clairvoyance</li>
						<li class="spell" id="counterspell">Counterspell</li>
						<li class="spell" id="dispelMagic">Dispel Magic</li>
						<li class="spell" id="fear">Fear</li>
						<li class="spell" id="feignDeath">Feign Death</li>
						<li class="spell" id="fireball">Fireball</li>
						<li class="spell" id="fly">Fly</li>
						<li class="spell" id="gaseousForm">Gaseus Form</li>
						<li class="spell" id="glyphOfWarding">Glyph of Warding</li>
						<li class="spell" id="haste">Haste</li>
						<li class="spell" id="hypnoticPattern">Hypnotic Pattern</li>
						<li class="spell" id="leomundsTinyHut">Leomund's Tiny Hut</li>
						<li class="spell" id="lightningBolt">Lightning Bolt</li>
						<li class="spell" id="magicCircle">Magic Circle</li>
						<li class="spell" id="majorImage">Major Image</li>
						<li class="spell" id="nondetection">Nondetection</li>
						<li class="spell" id="phantomSteed">Phantom Seed</li>
						<li class="spell" id="protectionFromEnergy">Protection from Energy</li>
						<li class="spell" id="removeCurse">Remove Curse</li>
						<li class="spell" id="sending">Sending</li>
						<li class="spell" id="sleetStorm">Sleet Storm</li>
						<li class="spell" id="slow">Slow</li>
						<li class="spell" id="stinkingCloud">Stinking Cloud</li>
						<li class="spell" id="tongues">Tongues</li>
						<li class="spell" id="vampiricTouch">Vampiric Touch</li>
						<li class="spell" id="waterBreathing">Water Breathing</li>
					</ul>
			</div>
			<div class="spell-list level4-list">
				<h3>Level 4</h3>
					<ul>
						<li class="spell" id="arcaneEye">Arcane Eye</li>
						<li class="spell" id="banishment">Banishment</li>
						<li class="spell" id="blight">Blight</li>
						<li class="spell" id="confusion">Confusion</li>
						<li class="spell" id="conjureMinorElementals">Conjure Minor Elementals</li>
						<li class="spell" id="controlWater">Control Water</li>
						<li class="spell" id="dimensionDoor">Dimension Door</li>
						<li class="spell" id="evardsBlackTentacles">Evard's Black Tentacles</li>
						<li class="spell" id="fabricate">Fabricate</li>
						<li class="spell" id="fireShield">Fire Shield</li>
						<li class="spell" id="greaterInvisibility">Greater Invisibility</li>
						<li class="spell" id="hallucinatoryTerrain">Hallucinatory Terrain</li>
						<li class="spell" id="iceStorm">Ice Storm</li>
						<li class="spell" id="leomundsSecretChest">Leomund's Secret Chest</li>
						<li class="spell" id="locateCreature">Locate Creature</li>
						<li class="spell" id="mordenkainensFaithfulHound">Mordenkainen's Faithful Hound</li>
						<li class="spell" id="mordenkainensPrivateSanctum">Mordenkainen's Private Sanctum</li>
						<li class="spell" id="otilukesResilientSphere">Otiluke's Resilient Sphere</li>
						<li class="spell" id="phantasmalKiller">Phantasmal Killer</li>
						<li class="spell" id="polymorph">Polymorph</li>
						<li class="spell" id="stoneShape">Stone Shape</li>
						<li class="spell" id="stoneskin">Stoneskin</li>
						<li class="spell" id="wallOfFire">Wall of Fire</li>
					</ul>
			</div>
			<div class="spell-list level5-list">
				<h3>Level 5</h3>
					<ul>
						<li class="spell" id="animateObjects">Animate Objects</li>
						<li class="spell" id="bigbysHand">Bigby's Hand</li>
						<li class="spell" id="cloudkill">Cloudkill</li>
						<li class="spell" id="coneOfCold">Cone of Cold</li>
						<li class="spell" id="conjureElemental">Conjure Elemental</li>
						<li class="spell" id="contactOtherPlane">Contact Other Plane</li>
						<li class="spell" id="creation">Creation</li>
						<li class="spell" id="dominatePerson">Dominate Person</li>
						<li class="spell" id="dream">Dream</li>
						<li class="spell" id="geas">Geas</li>
						<li class="spell" id="holdMonster">Hold Monster</li>
						<li class="spell" id="legendLore">Legend Lore</li>
						<li class="spell" id="mislead">Mislead</li>
						<li class="spell" id="modifyMemory">Modify Memory</li>
						<li class="spell" id="passwall">Passwall</li>
						<li class="spell" id="planarBinding">Planar Binding</li>
						<li class="spell" id="rarysTelepathicBond">Rary's Telepathic Bond</li>
						<li class="spell" id="scrying">Scrying</li>
						<li class="spell" id="seeming">Seeming</li>
						<li class="spell" id="telekinesis">Telekinesis</li>
						<li class="spell" id="teleportationCircle">Teleportation Cricle</li>
						<li class="spell" id="wallOfForce">Wall of Force</li>
						<li class="spell" id="wallOfStone">Wall of Stone</li>
					</ul>
			</div>
			<div class="spell-list level6-list">
				<h3>Level 6</h3>
					<ul>
						<li class="spell" id="arcaneGate">Arcane Gate</li>
						<li class="spell" id="chainLightning">Chain Lightning</li>
						<li class="spell" id="circleOfDeath">Circle of Death</li>
						<li class="spell" id="contingency">Contingency</li>
						<li class="spell" id="createUndead">Create Undead</li>
						<li class="spell" id="disintegrate">Disintegrate</li>
						<li class="spell" id="drawmijsInstantSummons">Drawmij's Instant Summons</li>
						<li class="spell" id="eyebite">Eyebite</li>
						<li class="spell" id="fleshToStone">Flesh to Stone</li>
						<li class="spell" id="globeOfInvulnerability">Globe of Invulnerability</li>
						<li class="spell" id="guardsAndWards">Guards and Wards</li>
						<li class="spell" id="magicJar">Magic Jar</li>
						<li class="spell" id="massSuggestion">Mass Suggestion</li>
						<li class="spell" id="moveEarth">Move Earth</li>
						<li class="spell" id="otilukesFreezingSphere">Otiluke's Freezing Sphere</li>
						<li class="spell" id="ottosIrresistibleDance">Otto's Irresistible Dance</li>
						<li class="spell" id="programmedIllusion">Programmed Illusion</li>
						<li class="spell" id="sunbeam">Sunbeam</li>
						<li class="spell" id="trueSeeing">True Seeing</li>
						<li class="spell" id="wallOfIce">Wall of Ice</li>
					</ul>
			</div>
			<div class="spell-list level7-list">
				<h3>Level 7</h3>
					<ul>
						<li class="spell" id="delayedBlastFireball">Delayed Blast Fireball</li>
						<li class="spell" id="etherealness">Etherealness</li>
						<li class="spell" id="fingerOfDeath">Finger of Death</li>
						<li class="spell" id="forcecage">Forcecage</li>
						<li class="spell" id="mirageArcane">Mirage Arcane</li>
						<li class="spell" id="mordenkainensMagnificentMansion">Mordenkainen's Magnificent Mansion</li>
						<li class="spell" id="mordenkainensSword">Mordenkainen's Sword</li>
						<li class="spell" id="planeShift">Plane Shift</li>
						<li class="spell" id="prismaticSpray">Prismatic Spray</li>
						<li class="spell" id="projectImage">Project Image</li>
						<li class="spell" id="reverseGravity">Reverse Gravity</li>
						<li class="spell" id="sequester">Sequester</li>
						<li class="spell" id="simulacrum">Simulacrum</li>
						<li class="spell" id="symbol">Symbol</li>
						<li class="spell" id="teleport">Teleport</li>
					</ul>
			</div>
			<div class="spell-list level8-list">
				<h3>Level 8</h3>
					<ul>
						<li class="spell" id="antimagicField">Antimagic Field</li>
						<li class="spell" id="antipathySympathy">Antipathy/Sympathy</li>
						<li class="spell" id="clone">Clone</li>
						<li class="spell" id="controlWeather">Control Weather</li>
						<li class="spell" id="demiplane">Demiplane</li>
						<li class="spell" id="dominateMonster">Dominate Monster</li>
						<li class="spell" id="feeblemind">Feeblemind</li>
						<li class="spell" id="incendiaryCloud">Incendiary Cloud</li>
						<li class="spell" id="maze">Maze</li>
						<li class="spell" id="mindBlank">Mind Blank</li>
						<li class="spell" id="powerWordStun">Power Word Stun</li>
						<li class="spell" id="sunburst">Sunburst</li>
						<li class="spell" id="telepathy">Telepathy</li>
					</ul>
			</div>
			<div class="spell-list level9-list">
				<h3>Level 9</h3>
					<ul>
						<li class="spell" id="astralProjection">Astral Projection</li>
						<li class="spell" id="foresight">Foresight</li>
						<li class="spell" id="gate">Gate</li>
						<li class="spell" id="imprisonment">Imprisonment</li>
						<li class="spell" id="meteorSwarm">Meteor Swarm</li>
						<li class="spell" id="powerWordKill">Power Word Kill</li>
						<li class="spell" id="prismaticWall">Prismatic Wall</li>
						<li class="spell" id="shapechange">Shapechange</li>
						<li class="spell" id="timeStop">Time Stop</li>
						<li class="spell" id="truePolymorph">True Polymorph</li>
						<li class="spell" id="weird">Weird</li>
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
