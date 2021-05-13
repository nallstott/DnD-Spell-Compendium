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
	<title>Warlock Spells</title>
	<link rel="icon" href="images/favicon.png" type="image/png">
	<link rel="stylesheet" href="https://use.typekit.net/cxo2npv.css">
	<link href="https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700&display=swap" rel="stylesheet">
	<link rel="stylesheet" href="style.css">
	<link rel="stylesheet" href="warlock.css">
	<script src="http://code.jquery.com/jquery-1.10.1.min.js"></script>
</head>
<body>
    <?php include 'header.php';?>
	<header class="spell-page-header">
		<h1>Warlock Spell List</h1>
	</header>
	<div id="toggleDomainSpells"><h4>Toggle Pact Spells</h4></div>
	<div class="body-container">
		<div class="spell-list-container">
			<div class="spell-list cantrip-list">
				<h3>Cantrips</h3>
					<ul>
						<li class="spell" id="bladeWard">Blade Ward</li>
						<li class="spell" id="chillTouch">Chill Touch</li>
						<li class="spell" id="eldritchBlast">Eldritch Blast</li>
						<li class="spell" id="mageHand">Mage Hand</li>
						<li class="spell" id="minorIllusion">Minor Illusion</li>
						<li class="spell" id="poisonSpray">Poison Spray</li>
						<li class="spell" id="prestidigitation">Prestidigitation</li>
						<li class="spell" id="trueStrike">True Strike</li>
					</ul>
			</div>
			<div class="spell-list level1-list">
				<h3>Level 1</h3>
					<ul>
						<li class="spell" id="armorOfAgathys">Armor of Agathys</li>
						<li class="spell" id="armsOfHadar">Arms of Hadar</li>
						<li class="spell domain-spell" id="burningHands">Burning Hands (Fiend)</li>
						<li class="spell" id="charmPerson">Charm Person</li>
						<li class="spell domain-spell" id="command">Command (Fiend)</li>
						<li class="spell" id="comprehendLanguages">Comprehend Languages</li>
						<li class="spell domain-spell" id="dissonantWhispers">Dissonant Whispers (Great Old One)</li>
						<li class="spell" id="expeditiousRetreat">Expeditious Retreat</li>
						<li class="spell domain-spell" id="faerieFire">Faerie Fire (Archfey)</li>
						<li class="spell" id="hellishRebuke">Hellish Rebuke</li>
						<li class="spell" id="hex">Hex</li>
						<li class="spell" id="illusoryScript">Illusory Script</li>
						<li class="spell" id="protectionFromEvilAndGood">Protection from Evil and Good</li>
						<li class="spell domain-spell" id="sleep">Sleep (Archfey)</li>
						<li class="spell domain-spell" id="tashasHideousLaughter">Tasha's Hideous Laughter (Great Old One)</li>
						<li class="spell" id="unseenServant">Unseen Servant</li>
						<li class="spell" id="witchBolt">Witch Bolt</li>
					</ul>
			</div>
			<div class="spell-list level2-list">
				<h3>Level 2</h3>
					<ul>
						<li class="spell domain-spell" id="blindnessDeafness">Blindness/Deafness (Fiend)</li>
						<li class="spell" id="calmEmotions">Calm Emotions</li>
						<li class="spell" id="cloudOfDaggers">Cloud of Daggers</li>
						<li class="spell" id="crownOfMadness">Crown of Madness</li>
						<li class="spell" id="darkness">Darkness</li>
						<li class="spell domain-spell" id="detectThoughts">Detect Thoughts (Great Old One)</li>
						<li class="spell" id="enthrall">Enthrall</li>
						<li class="spell" id="holdPerson">Hold Person</li>
						<li class="spell" id="invisibility">Invisibility</li>
						<li class="spell" id="mirrorImage">Mirror Image</li>
						<li class="spell" id="mistyStep">Misty Step</li>
						<li class="spell domain-spell" id="phantasmalForce">Phantasmal Force (Archfey, Great Old One)</li>
						<li class="spell" id="rayOfEnfeeblement">Ray of Enfeeblement</li>
						<li class="spell domain-spell" id="scorchingRay">Scorching Ray (Fiend)</li>
						<li class="spell" id="shatter">Shatter</li>
						<li class="spell" id="spiderClimb">Spider Climb</li>
						<li class="spell" id="suggestion">Suggestion</li>
					</ul>
			</div>
			<div class="spell-list level3-list">
				<h3>Level 3</h3>
					<ul>
						<li class="spell domain-spell" id="blink">Blink (Archfey)</li>
						<li class="spell domain-spell" id="clairvoyance">Clairvoyance (Great Old One)</li>
						<li class="spell" id="counterspell">Counterspell</li>
						<li class="spell" id="dispelMagic">Dispel Magic</li>
						<li class="spell" id="fear">Fear</li>
						<li class="spell domain-spell" id="fireball">Fireball (Fiend)</li>
						<li class="spell" id="fly">Fly</li>
						<li class="spell" id="gaseousForm">Gaseous Form</li>
						<li class="spell" id="hungerOfHadar">Hunger of Hadar</li>
						<li class="spell" id="hypnoticPattern">Hypnotic Pattern</li>
						<li class="spell" id="magicCircle">Magic Circle</li>
						<li class="spell" id="majorImage">Major Image</li>
						<li class="spell domain-spell" id="plantGrowth">Plant Growth (Archfey)</li>
						<li class="spell" id="removeCurse">Remove Curse</li>
						<li class="spell domain-spell" id="sending">Sending (Great Old One)</li>
						<li class="spell domain-spell" id="stinkingCloud">Stinking Cloud (Fiend)</li>
						<li class="spell" id="tongues">Tongues</li>
						<li class="spell" id="vampiricTouch">Vampiric Touch</li>
					</ul>
			</div>
			<div class="spell-list level4-list">
				<h3>Level 4</h3>
					<ul>
						<li class="spell" id="banishment">Banishment</li>
						<li class="spell" id="blight">Blight</li>
						<li class="spell" id="dimensionDoor">Dimension Door</li>
						<li class="spell domain-spell" id="dominateBeast">Dominate Beast (Archfey, Great Old One)</li>
						<li class="spell domain-spell" id="evardsBlackTentacles">Evard's Black Tentacles (Great Old One)</li>
						<li class="spell domain-spell" id="fireShield">Fire Shield (Fiend)</li>
						<li class="spell domain-spell" id="greaterInvisibility">Greater Invisibility (Archfey)</li>
						<li class="spell" id="hallucinatoryTerrain">Hallucinatory Terrain</li>
						<li class="spell domain-spell" id="wallOfFire">Wall of Fire (Fiend)</li>
					</ul>
			</div>
			<div class="spell-list level5-list">
				<h3>Level 5</h3>
					<ul>
						<li class="spell" id="contactOtherPlane">Contact Other Plane</li>
						<li class="spell domain-spell" id="dominatePerson">Dominate Person (Archfey, Great Old One)</li>
						<li class="spell" id="dream">Dream</li>
						<li class="spell domain-spell" id="flameStrike">Flame Strike (Fiend)</li>
						<li class="spell domain-spell" id="hallow">Hallow (Fiend)</li>
						<li class="spell" id="holdMonster">Hold Monster</li>
						<li class="spell" id="scrying">Scrying</li>
						<li class="spell domain-spell" id="seeming">Seeming (Archfey)</li>
						<li class="spell domain-spell" id="telekinesis">Telekinesis (Great Old One)</li>
					</ul>
			</div>
			<div class="spell-list level6-list">
				<h3>Level 6</h3>
					<ul>
						<li class="spell" id="arcaneGate">Arcane Gate</li>
						<li class="spell" id="circleOfDeath">Circle of Death</li>
						<li class="spell" id="conjureFey">Conjure Fey</li>
						<li class="spell" id="createUndead">Create Undead</li>
						<li class="spell" id="eyebite">Eyebite</li>
						<li class="spell" id="fleshToStone">Flesh to Stone</li>
						<li class="spell" id="massSuggestion">Mass Suggestion</li>
						<li class="spell" id="trueSeeing">True Seeing</li>
					</ul>
			</div>
			<div class="spell-list level7-list">
				<h3>Level 7</h3>
					<ul>
						<li class="spell" id="etherealness">Etherealness</li>
						<li class="spell" id="fingerOfDeath">Finger of Death</li>
						<li class="spell" id="forcecage">Forcecage</li>
						<li class="spell" id="planeShift">Plane Shift</li>
					</ul>
			</div>
			<div class="spell-list level8-list">
				<h3>Level 8</h3>
					<ul>
						<li class="spell" id="demiplane">Demiplane</li>
						<li class="spell" id="dominateMonster">Dominate Monster</li>
						<li class="spell" id="feeblemind">Feeblemind</li>
						<li class="spell" id="glibness">Glibness</li>
						<li class="spell" id="powerWordStun">Power Word Stun</li>
					</ul>
			</div>
			<div class="spell-list level9-list">
				<h3>Level 9</h3>
					<ul>
						<li class="spell" id="astralProjection">Astral Projection</li>
						<li class="spell" id="foresight">Foresight</li>
						<li class="spell" id="imprisonment">Imprisonment</li>
						<li class="spell" id="powerWordKill">Power Word Kill</li>
						<li class="spell" id="truePolymorph">True Polymorph</li>
					</ul>
			</div>
		</div>
		<div id="spell-description-box">
			<div class="description-box-content">
				<div id="close-trigger">close</div>
				<h1 id="spell-name">Chill Touch</h1>
				<h5 id="spell-level">Level: Cantrip</h5>
				<h5 id="spell-type">Type: Necromancy</h5>
				<h5 id="spell-casting-time">Casting Time: 1 Action</h5>
				<h5 id="spell-range">Range: 120 feet</h5>
				<h5 id="spell-components">Components: V S</h5>
				<h5 id="spell-duration">Duration: 1 Round</h5>
				<p id="spell-description">You create a ghostly, skeletal hand in the space of a creature within range. Make a ranged spell attack against the creature to assail it with the chill of the grave. On a hit, the target takes 1d8 necrotic damage, and it can’t regain hit points until the start of your next turn. Until then, the hand clings to the target. If you hit an undead target, it also has disadvantage on attack rolls against you until the end of your next turn. This spell’s damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8).</p>
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
