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
	<title>Cleric Spells</title>
	<link rel="icon" href="images/favicon.png" type="image/png">
	<link rel="stylesheet" href="https://use.typekit.net/cxo2npv.css">
	<link href="https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700&display=swap" rel="stylesheet">
	<link rel="stylesheet" href="style.css">
	<link rel="stylesheet" href="cleric.css">
	<script src="http://code.jquery.com/jquery-1.10.1.min.js"></script>
</head>
<body>
    <?php include 'header.php';?>
	<header class="spell-page-header">
		<h1>Cleric Spell List</h1>
	</header>
	<div id="toggleDomainSpells"><h4>Toggle Domain Spells</h4></div>
	<div class="body-container">
		<div class="spell-list-container">
			<div class="spell-list cantrip-list">
				<h3>Cantrips</h3>
					<ul>
						<li class="spell" id="guidance">Guidance</li>
						<li class="spell" id="light">Light</li>
						<li class="spell" id="mending">Mending</li>
						<li class="spell" id="resistance">Resistance</li>
						<li class="spell" id="sacredFlame">Sacred Flame</li>
						<li class="spell" id="spareTheDying">Spare The Dying</li>
						<li class="spell" id="thaumaturgy">Thaumaturgy</li>
					</ul>
			</div>
			<div class="spell-list level1-list">
				<h3>Level 1</h3>
					<ul>
						<li class="spell domain-spell" id="animalFriendship">Animal Friendship (Nature)</li>
						<li class="spell" id="bane">Bane</li>
						<li class="spell" id="bless">Bless</li>
						<li class="spell domain-spell" id="burningHands">Burning Hands (Light)</li>
						<li class="spell domain-spell" id="charmPerson">Charm Person (Trickery)</li>
						<li class="spell" id="command">Command</li>
						<li class="spell" id="createOrDestroyWater">Create or Destroy Water</li>
						<li class="spell" id="cureWounds">Cure Wounds</li>
						<li class="spell" id="detectEvilAndGood">Detect Evil and Good</li>
						<li class="spell" id="detectMagic">Detect Magic</li>
						<li class="spell" id="detectPoisonAndDisease">Detect Poison and Disease</li>
						<li class="spell domain-spell" id="disguiseSelf">Disguise Self (Trickery)</li>
						<li class="spell domain-spell" id="divineFavor">Divine Favor (War)</li>
						<li class="spell domain-spell" id="faerieFire">Faerie Fire (Light)</li>
						<li class="spell domain-spell" id="fogCloud">Fog Cloud (Tempest)</li>
						<li class="spell" id="guidingBolt">Guiding Bolt</li>
						<li class="spell" id="healingWord">Healing Word</li>
						<li class="spell domain-spell" id="identify">Identify (Knowledge)</li>
						<li class="spell" id="inflictWounds">Inflict Wounds</li>
						<li class="spell" id="protectionFromEvilAndGood">Protection From Evil and Good</li>
						<li class="spell" id="purifyFoodAndDrink">Purify Food and Drink</li>
						<li class="spell" id="sanctuary">Sanctuary</li>
						<li class="spell" id="shieldOfFaith">Shield of Faith</li>
						<li class="spell domain-spell" id="speakWithAnimals">Speak With Animals (Nature)</li>
						<li class="spell domain-spell" id="thunderwave">Thunderwave (Tempest)</li>
					</ul>
			</div>
			<div class="spell-list level2-list">
				<h3>Level 2</h3>
					<ul>
						<li class="spell" id="aid">Aid</li>
						<li class="spell" id="augury">Augury</li>
						<li class="spell domain-spell" id="barkskin">Barkskin (Nature)</li>
						<li class="spell" id="blindnessDeafness">Blindess / Deafness</li>
						<li class="spell" id="calmEmotions">Calm Emotions</li>
						<li class="spell" id="continualFlame">Continual Flame</li>
						<li class="spell" id="enhanceAbility">Enhance Ability</li>
						<li class="spell" id="findTraps">Find Traps</li>
						<li class="spell domain-spell" id="flamingSphere">Flaming Sphere (Light)</li>
						<li class="spell" id="gentleRepose">Gentle Repose</li>
						<li class="spell domain-spell" id="gustOfWind">Gust of Wind (Tempest)</li>
						<li class="spell" id="holdPerson">Hold Person</li>
						<li class="spell" id="lesserRestoration">Lesser Restoration</li>
						<li class="spell" id="locateObject">Locate Object</li>
						<li class="spell domain-spell" id="magicWeapon">Magic Weapon (War)</li>
						<li class="spell domain-spell" id="mirrorImage">Mirror Image (Trickery)</li>
						<li class="spell domain-spell" id="passWithoutTrace">Pass Without Trace (Trickery)</li>
						<li class="spell" id="prayerOfHealing">Prayer of Healing</li>
						<li class="spell" id="protectionFromPoison">Protection from Poison</li>
						<li class="spell domain-spell" id="scorchingRay">Scorching Ray (Light)</li>
						<li class="spell domain-spell" id="shatter">Shatter (Tempest)</li>
						<li class="spell" id="silence">Silence</li>
						<li class="spell domain-spell" id="spikeGrowth">Spike Growth (Nature)</li>
						<li class="spell" id="spiritualWeapon">Spiritual Weapon</li>
						<li class="spell domain-spell" id="suggestion">Suggestion (Knowledge)</li>
						<li class="spell" id="wardingBond">Warding Bond</li>
						<li class="spell" id="zoneOfTruth">Zone of Truth</li>
					</ul>
			</div>
			<div class="spell-list level3-list">
				<h3>Level 3</h3>
					<ul>
						<li class="spell" id="animateDead">Animate Dead</li>
						<li class="spell" id="beaconOfHope">Beacon of Hope</li>
						<li class="spell" id="bestowCurse">Bestow Curse</li>
						<li class="spell domain-spell" id="blink">Blink (Trickery)</li>
						<li class="spell domain-spell" id="callLightning">Call Lightning (Tempest)</li>
						<li class="spell" id="clairvoyance">Clairvoyance</li>
						<li class="spell" id="createFoodAndWater">Create Food and Water</li>
						<li class="spell domain-spell" id="crusadersMantle">Crusader's Mantle (War)</li>
						<li class="spell" id="daylight">Daylight</li>
						<li class="spell" id="dispelMagic">Dispel Magic</li>
						<li class="spell" id="feignDeath">Feign Death</li>
						<li class="spell domain-spell" id="fireball">Fireball (Light)</li>
						<li class="spell" id="glyphOfWarding">Glyph of Warding</li>
						<li class="spell" id="magicCircle">Magic Circle</li>
						<li class="spell" id="massHealingWord">Mass Healing Word</li>
						<li class="spell" id="meldIntoStone">Meld Into Stone</li>
						<li class="spell domain-spell" id="nondetection">Nondetection (Knowledge)</li>
						<li class="spell domain-spell" id="plantGrowth">Plant Growth (Nature)</li>
						<li class="spell" id="protectionFromEnergy">Protection from Energy</li>
						<li class="spell" id="removeCurse">Remove Curse</li>
						<li class="spell" id="revivify">Revivify</li>
						<li class="spell" id="sending">Sending</li>
						<li class="spell domain-spell" id="sleetStorm">Sleet Storm (Tempest)</li>
						<li class="spell" id="speakWithDead">Speak with Dead</li>
						<li class="spell" id="spiritGuardians">Spirit Guardians</li>
						<li class="spell" id="tongues">Tongues</li>
						<li class="spell" id="waterWalk">Water Walk</li>
						<li class="spell domain-spell" id="windWall">Wind Wall (Nature)</li>
					</ul>
			</div>
			<div class="spell-list level4-list">
				<h3>Level 4</h3>
					<ul>
						<li class="spell domain-spell" id="arcaneEye">Arcane Eye (Knowledge)</li>
						<li class="spell" id="banishment">Banishment</li>
						<li class="spell domain-spell" id="confusion">Confusion (Knowledge)</li>
						<li class="spell" id="controlWater">Control Water</li>
						<li class="spell" id="deathWard">Death Ward</li>
						<li class="spell domain-spell" id="dimensionDoor">Dimension Door (Trickery)</li>
						<li class="spell" id="divination">Divination</li>
						<li class="spell domain-spell" id="dominateBeast">Dominate Beast (Nature)</li>
						<li class="spell" id="freedomOfMovement">Freedom of Movement</li>
						<li class="spell" id="guardianOfFaith">Guardian of Faith</li>
						<li class="spell domain-spell" id="graspingVine">Grasping Vine (Nature)</li>
						<li class="spell domain-spell" id="iceStorm">Ice Storm (Tempest)</li>
						<li class="spell" id="locateCreature">Locate Creature</li>
						<li class="spell domain-spell" id="polymorph">Polymoph (Trickery)</li>
						<li class="spell" id="stoneShape">Stone Shape</li>
						<li class="spell domain-spell" id="stoneskin">Stoneskin (War)</li>
						<li class="spell domain-spell" id="wallOfFire">Wall of Fire (Light)</li>
					</ul>
			</div>
			<div class="spell-list level5-list">
				<h3>Level 5</h3>
					<ul>
						<li class="spell" id="commune">Commune</li>
						<li class="spell" id="contagion">Contagion</li>
						<li class="spell domain-spell" id="destructiveWave">Destructive Wave (Tempest)</li>
						<li class="spell" id="dispelEvilAndGood">Dispel Evil and Good</li>
						<li class="spell domain-spell" id="dominatePerson">Dominate Person (Trickery)</li>
						<li class="spell" id="flameStrike">Flame Strike</li>
						<li class="spell" id="geas">Geas</li>
						<li class="spell" id="greaterRestoration">Greater Restoration</li>
						<li class="spell" id="hallow">Hallow</li>
						<li class="spell domain-spell" id="holdMonster">Hold Monster (War)</li>
						<li class="spell" id="insectPlague">Insect Plague</li>
						<li class="spell" id="legendLore">Legend Lore</li>
						<li class="spell" id="massCureWounds">Mass Cure Wounds</li>
						<li class="spell domain-spell" id="modifyMemory">Modify Memory (Trickery)</li>
						<li class="spell" id="planarBinding">Planar Binding</li>
						<li class="spell" id="raiseDead">Raise Dead</li>
						<li class="spell" id="scrying">Scrying</li>
						<li class="spell domain-spell" id="treeStride">Tree Stride (Nature)</li>
					</ul>
			</div>
			<div class="spell-list level6-list">
				<h3>Level 6</h3>
					<ul>
						<li class="spell" id="bladeBarrier">Blade Barrier</li>
						<li class="spell" id="createUndead">Create Undead</li>
						<li class="spell" id="findThePath">Find the Path</li>
						<li class="spell" id="forbiddance">Forbiddance</li>
						<li class="spell" id="harm">Harm</li>
						<li class="spell" id="heal">Heal</li>
						<li class="spell" id="heroesFeast">Heroes' Feast</li>
						<li class="spell" id="planarAlly">Planar Ally</li>
						<li class="spell" id="trueSeeing">True Seeing</li>
						<li class="spell" id="wordOfRecall">Word of Recall</li>
					</ul>
			</div>
			<div class="spell-list level7-list">
				<h3>Level 7</h3>
					<ul>
						<li class="spell" id="conjureCelestial">Conjure Celestial</li>
						<li class="spell" id="divineWord">Divine Word</li>
						<li class="spell" id="etherealness">Etherealness</li>
						<li class="spell" id="fireStorm">Fire Storm</li>
						<li class="spell" id="planeShift">Plane Shift</li>
						<li class="spell" id="regenerate">Regenerate</li>
						<li class="spell" id="resurrection">Resurrection</li>
						<li class="spell" id="symbol">Symbol</li>
					</ul>
			</div>
			<div class="spell-list level8-list">
				<h3>Level 8</h3>
					<ul>
						<li class="spell" id="antimagicField">Antimagic Field</li>
						<li class="spell" id="controlWeather">Control Weather</li>
						<li class="spell" id="earthquake">Earthquake</li>
						<li class="spell" id="holyAura">Holy Aura</li>
					</ul>
			</div>
			<div class="spell-list level9-list">
				<h3>Level 9</h3>
					<ul>
						<li class="spell" id="astralProjection">Astral Projection</li>
						<li class="spell" id="gate">Gate</li>
						<li class="spell" id="massHeal">Mass Heal</li>
						<li class="spell" id="trueResurrection">True Resurrection</li>
					</ul>
			</div>
		</div>
		<div id="spell-description-box">
			<div class="description-box-content">
				<div id="close-trigger">close</div>
				<h1 id="spell-name">Guidance</h1>
				<h5 id="spell-level">Level: Cantrip</h5>
				<h5 id="spell-type">Type: Divination</h5>
				<h5 id="spell-casting-time">Casting Time: 1 Action</h5>
				<h5 id="spell-range">Range: Touch</h5>
				<h5 id="spell-components">Components: V S</h5>
				<h5 id="spell-duration">Duration: Concentration, up to 1 minute</h5>
				<p id="spell-description">You touch one willing creature. Once before the spell ends, the target can roll a d4 and add the number rolled to one ability check of its choice. It can roll the die before or after making the ability check. The spell then ends.</p>
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
