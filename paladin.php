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
	<title>Paladin Spells</title>
	<link rel="icon" href="images/favicon.png" type="image/png">
	<link rel="stylesheet" href="https://use.typekit.net/cxo2npv.css">
	<link href="https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700&display=swap" rel="stylesheet">
	<link rel="stylesheet" href="style.css">
	<link rel="stylesheet" href="paladin.css">
	<script src="http://code.jquery.com/jquery-1.10.1.min.js"></script>
</head>
<body>
    <?php include 'header.php';?>
	<header class="spell-page-header">
		<h1>Paladin Spell List</h1>
	</header>
	<div id="toggleDomainSpells"><h4>Toggle Oath Spells</h4></div>
	<div class="body-container">
		<div class="spell-list-container">
			<div class="spell-list level1-list">
				<h3>Level 1</h3>
					<ul>
						<li class="spell domain-spell" id="bane">Bane (Vengeance)</li>
						<li class="spell" id="bless">Bless</li>
						<li class="spell" id="command">Command</li>
						<li class="spell" id="compelledDuel">Compelled Duel</li>
						<li class="spell" id="cureWounds">Cure Wounds</li>
						<li class="spell" id="detectEvilAndGood">Detect Evil and Good</li>
						<li class="spell" id="detectMagic">Detect Magic</li>
						<li class="spell" id="detectPoisonAndDisease">Detect Poison and Disease</li>
						<li class="spell" id="divineFavor">Divine Favor</li>
						<li class="spell domain-spell" id="ensnaringStrike">Ensnaring Strike (Ancients)</li>
						<li class="spell" id="heroism">Heroism</li>
						<li class="spell domain-spell" id="huntersMark">Hunter's Mark (Vengeance)</li>
						<li class="spell" id="protectionFromEvilAndGood">Protection From Evil and Good</li>
						<li class="spell" id="purifyFoodAndDrink">Purify Food and Drink</li>
						<li class="spell domain-spell" id="sanctuary">Sanctuary (Devotion)</li>
						<li class="spell" id="searingSmite">Searing Smite</li>
						<li class="spell" id="shieldOfFaith">Shield of Faith</li>
						<li class="spell domain-spell" id="speakWithAnimals">Speak with Animals (Ancients)</li>
						<li class="spell" id="thunderousSmite">Thunderous Smite</li>
						<li class="spell" id="wrathfulSmite">Wrathful Smite</li>
					</ul>
			</div>
			<div class="spell-list level2-list">
				<h3>Level 2</h3>
					<ul>
						<li class="spell" id="aid">Aid</li>
						<li class="spell" id="brandingSmite">Branding Smite</li>
						<li class="spell" id="findSteed">Find Steed</li>
						<li class="spell" id="lesserRestoration">Lesser Restoration</li>
						<li class="spell" id="locateObject">Locate Object</li>
						<li class="spell domain-spell" id="holdPerson">Hold Person (Vengeance)</li>
						<li class="spell" id="magicWeapon">Magic Weapon</li>
						<li class="spell domain-spell" id="mistyStep">Misty Step (Ancients, Vengeance)</li>
						<li class="spell domain-spell" id="moonbeam">Moonbeam (Ancients)</li>
						<li class="spell" id="protectionFromPoison">Protection from Poison</li>
						<li class="spell" id="zoneOfTruth">Zone of Truth</li>
					</ul>
			</div>
			<div class="spell-list level3-list">
				<h3>Level 3</h3>
					<ul>
						<li class="spell" id="auraOfVitality">Aura of Vitality</li>
						<li class="spell domain-spell" id="beaconOfHope">Beacon of Hope (Devotion)</li>
						<li class="spell" id="blindingSmite">Blinding Smite</li>
						<li class="spell" id="createFoodAndWater">Create Food and Water</li>
						<li class="spell" id="crusadersMantle">Crusader's Mantle</li>
						<li class="spell" id="daylight">Daylight</li>
						<li class="spell" id="dispelMagic">Dispel Magic</li>
						<li class="spell" id="elementalWeapon">Elemental Weapon</li>
						<li class="spell domain-spell" id="haste">Haste (Vengeance)</li>
						<li class="spell" id="magicCircle">Magic Circle</li>
						<li class="spell domain-spell" id="plantGrowth">Plant Growth (Ancients)</li>
						<li class="spell domain-spell" id="protectionFromEnergy">Protection from Energy (Ancients, Vengeance)</li>
						<li class="spell" id="removeCurse">Remove Curse</li>
						<li class="spell" id="revivify">Revivify</li>
					</ul>
			</div>
			<div class="spell-list level4-list">
				<h3>Level 4</h3>
					<ul>
						<li class="spell" id="auraOfLife">Aura of Life</li>
						<li class="spell" id="auraOfPurity">Aura of Purity</li>
						<li class="spell" id="banishment">Banishment</li>
						<li class="spell" id="deathWard">Death Ward</li>
						<li class="spell domain-spell" id="dimensionDoor">Dimension Door (Vengeance)</li>
						<li class="spell domain-spell" id="freedomOfMovement">Freedom Of Movement (Devotion)</li>
						<li class="spell domain-spell" id="guardianOfFaith">Guardian of Faith (Devotion)</li>
						<li class="spell domain-spell" id="iceStorm">Ice Storm (Ancients)</li>
						<li class="spell" id="locateCreature">Locate Creature</li>
						<li class="spell" id="staggeringSmite">Staggering Smite</li>
						<li class="spell domain-spell" id="stoneskin">Stoneskin (Ancients)</li>
					</ul>
			</div>
			<div class="spell-list level5-list">
				<h3>Level 5</h3>
					<ul>
						<li class="spell" id="banishingSmite">Banishing Smite</li>
						<li class="spell" id="circleOfPower">Circle of Power</li>
						<li class="spell domain-spell" id="commune">Commune (Devotion)</li>
						<li class="spell domain-spell" id="communeWithNature">Commune with Nature (Ancients)</li>
						<li class="spell" id="destructiveWave">Destructive Wave</li>
						<li class="spell" id="dispelEvilAndGood">Dispel Evil and Good</li>
						<li class="spell domain-spell" id="flameStrike">Flame Strike (Devotion)</li>
						<li class="spell" id="geas">Geas</li>
						<li class="spell domain-spell" id="holdMonster">Hold Monster (Vengeance)</li>
						<li class="spell" id="raiseDead">Raise Dead</li>
						<li class="spell domain-spell" id="scrying">Scrying (Vengeance)</li>
						<li class="spell domain-spell" id="treeStride">Tree Stride (Ancients)</li>
					</ul>
			</div>
		</div>
		<div id="spell-description-box">
			<div class="description-box-content">
				<div id="close-trigger">close</div>
				<h1 id="spell-name">Bless</h1>
				<h5 id="spell-level">Level: 1</h5>
				<h5 id="spell-type">Type: Enchantment</h5>
				<h5 id="spell-casting-time">Casting Time: 1 Action</h5>
				<h5 id="spell-range">Range: 30 feet</h5>
				<h5 id="spell-components">Components: V S M (A sprinkling of holy water)</h5>
				<h5 id="spell-duration">Duration: Concentration, Up to 1 minute</h5>
				<p id="spell-description">You bless up to three creatures of your choice within range. Whenever a target makes an attack roll or a saving throw before the spell ends, the target can roll a d4 and add the number rolled to the attack roll or saving throw.<br><br><strong>At Higher Levels:</strong> When you cast this spell using a spell slot of 2nd level or higher, you can target one additional creature for each slot level above 1st.</p>
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
