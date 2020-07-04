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
	<title>Druid Spells</title>
	<link rel="icon" href="images/favicon.png" type="image/png">
	<link rel="stylesheet" href="https://use.typekit.net/nha3vfk.css">
	<link href="https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700&display=swap" rel="stylesheet">
	<link rel="stylesheet" href="style.css">
	<link rel="stylesheet" href="druid.css">
	<script src="http://code.jquery.com/jquery-1.10.1.min.js"></script>
</head>
<body>
	<?php include 'header.php';?>
	<header class="spell-page-header">
		<h1>Druid Spell List</h1>
	</header>
	<p class="domain-description">Many Druid Circle spells are inherently available to the druid class. The circle spells called out on this page are spells not available to the general Druid class. Refer to The Player's Handbook for a full description of the Druid Circles.</p>
	<div id="toggleDomainSpells"><h4>Toggle Circle Exclusive Spells</h4></div>
	<div class="body-container">
		<div class="spell-list-container">
			<div class="spell-list cantrip-list">
				<h3>Cantrips</h3>
					<ul>
						<li class="spell" id="druidcraft">Druidcraft</li>
						<li class="spell" id="guidance">Guidance</li>
						<li class="spell" id="mending">Mending</li>
						<li class="spell" id="poisonSpray">Poison Spray</li>
						<li class="spell" id="produceFlame">Produce Flame</li>
						<li class="spell" id="resistance">Resistance</li>
						<li class="spell" id="shillelagh">Shillelagh</li>
						<li class="spell" id="thornWhip">Thorn Whip</li>
					</ul>
			</div>
			<div class="spell-list level1-list">
				<h3>Level 1</h3>
					<ul>
						<li class="spell" id="animalFriendship">Animal Friendship</li>
						<li class="spell" id="charmPerson">Charm Person</li>
						<li class="spell" id="createOrDestroyWater">Create or Destroy Water</li>
						<li class="spell" id="cureWounds">Cure Wounds</li>
						<li class="spell" id="detectMagic">Detect Magic</li>
						<li class="spell" id="detectPoisonAndDisease">Detect Poison and Disease</li>
						<li class="spell" id="entangle">Entangle</li>
						<li class="spell" id="faerieFire">Faerie Fire</li>
						<li class="spell" id="fogCloud">Fog Cloud</li>
						<li class="spell" id="goodberry">Goodberry</li>
						<li class="spell" id="healingWord">Healing Word</li>
						<li class="spell" id="jump">Jump</li>
						<li class="spell" id="longstrider">Longstrider</li>
						<li class="spell" id="purifyFoodAndDrink">Purify Food and Drink</li>
						<li class="spell" id="speakWithAnimals">Speak With Animals</li>
						<li class="spell" id="thunderwave">Thunderwave</li>
					</ul>
			</div>
			<div class="spell-list level2-list">
				<h3>Level 2</h3>
					<ul>
						<li class="spell" id="animalMessenger">Animal Messenger</li>
						<li class="spell" id="barkskin">Barkskin</li>
						<li class="spell" id="beastSense">Beast Sense</li>
						<li class="spell domain-spell" id="blur">Blur (Desert)</li>
						<li class="spell domain-spell" id="darkness">Darkness (Swamp)</li>
						<li class="spell" id="darkvision">Darkvision</li>
						<li class="spell" id="enhanceAbility">Enhance Ability</li>
						<li class="spell" id="findTraps">Find Traps</li>
						<li class="spell" id="flamingSphere">Flaming Sphere</li>
						<li class="spell" id="gustOfWind">Gust of Wind</li>
						<li class="spell" id="heatMetal">Heat Metal</li>
						<li class="spell" id="holdPerson">Hold Person</li>
						<li class="spell domain-spell" id="invisibility">Invisibility (Grassland)</li>
						<li class="spell" id="lesserRestoration">Lesser Restoration</li>
						<li class="spell" id="locateAnimalsOrPlants">Locate Animals or Plants</li>
						<li class="spell" id="locateObject">Locate Object</li>
						<li class="spell domain-spell" id="melfsAcidArrow">Melf's Acid Throw (Swamp)</li>
						<li class="spell domain-spell" id="mirrorImage">Mirror Image (Coast)</li>
						<li class="spell domain-spell" id="mistyStep">Misty Step (Coast)</li>
						<li class="spell" id="moonbeam">Moonbeam</li>
						<li class="spell" id="passWithoutTrace">Pass Without Trace</li>
						<li class="spell" id="protectionFromPoison">Protection from Poison</li>
						<li class="spell domain-spell" id="silence">Silence (Coast)</li>
						<li class="spell domain-spell" id="spiderClimb">Spider Climb (Forest, Mountain, Underdark)</li>
						<li class="spell" id="spikeGrowth">Spike Growth</li>
						<li class="spell domain-spell" id="web">Web (Underdark)</li>
					</ul>
			</div>
			<div class="spell-list level3-list">
				<h3>Level 3</h3>
					<ul>
						<li class="spell" id="callLightning">Call Lightning</li>
						<li class="spell" id="conjureAnimals">Conjure Animals</li>
						<li class="spell domain-spell" id="createFoodAndWater">Create Food and Water (Desert)</li>
						<li class="spell" id="daylight">Daylight</li>
						<li class="spell" id="dispelMagic">Dispel Magic</li>
						<li class="spell" id="feignDeath">Feign Death</li>
						<li class="spell domain-spell" id="gaseousForm">Gaseous Form (Underdark)</li>
						<li class="spell domain-spell" id="haste">Haste (Grassland)</li>
						<li class="spell domain-spell" id="lightningBolt">Lightning Bolt (Mountain)</li>
						<li class="spell" id="meldIntoStone">Meld Into Stone</li>
						<li class="spell" id="plantGrowth">Plant Growth</li>
						<li class="spell" id="protectionFromEnergy">Protection from Energy</li>
						<li class="spell" id="sleetStorm">Sleet Storm</li>
						<li class="spell domain-spell" id="slow">Slow (Arctic)</li>
						<li class="spell" id="speakWithPlants">Speak with Plants</li>
						<li class="spell domain-spell" id="stinkingCloud">Stinking Cloud (Swamp, Underdark)</li>
						<li class="spell" id="waterBreathing">Water Breathing</li>
						<li class="spell" id="waterWalk">Water Walk</li>
						<li class="spell" id="waterWall">Water Wall</li>
					</ul>
			</div>
			<div class="spell-list level4-list">
				<h3>Level 4</h3>
					<ul>
						<li class="spell" id="blight">Blight</li>
						<li class="spell" id="confusion">Confusion</li>
						<li class="spell" id="conjureMinorElementals">Conjure Minor Elementals</li>
						<li class="spell" id="conjureWoodlandBeings">Conjure Woodland Beings</li>
						<li class="spell" id="controlWater">Control Water</li>
						<li class="spell domain-spell" id="divination">Divination (Grassland)</li>
						<li class="spell" id="dominateBeast">Dominate Beast</li>
						<li class="spell" id="freedomOfMovement">Freedom of Movement</li>
						<li class="spell" id="giantInsect">Giant Insect</li>
						<li class="spell" id="graspingVine">Grasping Vine</li>
						<li class="spell domain-spell" id="greaterInvisibility">Greater Invisibility (Underdark)</li>
						<li class="spell" id="hallucinatoryTerrain">Hallucinatory Terrain</li>
						<li class="spell" id="iceStorm">Ice Storm</li>
						<li class="spell" id="locateCreature">Locate Creature</li>
						<li class="spell" id="polymorph">Polymorph</li>
						<li class="spell" id="stoneShape">Stone Shape</li>
						<li class="spell" id="stoneskin">Stoneskin</li>
						<li class="spell" id="wallOfFire">Wall of Fire</li>
					</ul>
			</div>
			<div class="spell-list level5-list">
				<h3>Level 5</h3>
					<ul>
						<li class="spell" id="antilifeShell">Antilife Shell</li>
						<li class="spell" id="awaken">Awaken</li>
						<li class="spell domain-spell" id="cloudkill">Cloudkill (Underdark)</li>
						<li class="spell" id="communeWithNature">Commune with Nature</li>
						<li class="spell domain-spell" id="coneOfCold">Cone of Cold (Arctic)</li>
						<li class="spell" id="conjureElemental">Conjure Elemental</li>
						<li class="spell" id="contagion">Contagion</li>
						<li class="spell domain-spell" id="dream">Dream (Grassland)</li>
						<li class="spell" id="geas">Geas</li>
						<li class="spell" id="greaterRestoration">Greater Restoration</li>
						<li class="spell" id="insectPlague">Insect Plague</li>
						<li class="spell" id="massCureWounds">Mass Cure Wounds</li>
						<li class="spell domain-spell" id="passwall">Passwall (Mountain)</li>
						<li class="spell" id="planarBinding">Planar Binding</li>
						<li class="spell" id="reincarnate">Reincarnate</li>
						<li class="spell" id="scrying">Scrying</li>
						<li class="spell" id="treeStride">Tree Stride</li>
						<li class="spell" id="wallOfStone">Wall of Stone</li>
					</ul>
			</div>
			<div class="spell-list level6-list">
				<h3>Level 6</h3>
					<ul>
						<li class="spell" id="conjureFey">Conjure Fey</li>
						<li class="spell" id="findThePath">Find the Path</li>
						<li class="spell" id="heal">Heal</li>
						<li class="spell" id="heroesFeast">Heroes' Feast</li>
						<li class="spell" id="moveEarth">Move Earth</li>
						<li class="spell" id="sunbeam">Sunbeam</li>
						<li class="spell" id="trueSeeing">True Seeing</li>
						<li class="spell" id="wallOfIce">Wall of Ice</li>
					</ul>
			</div>
			<div class="spell-list level7-list">
				<h3>Level 7</h3>
					<ul>
						<li class="spell" id="fireStorm">Fire Storm</li>
						<li class="spell" id="mirageArcane">Mirage Arcane</li>
						<li class="spell" id="planeShift">Plane Shift</li>
						<li class="spell" id="regenerate">Regenerate</li>
						<li class="spell" id="reverseGravity">Reverse Gravity</li>
					</ul>
			</div>
			<div class="spell-list level8-list">
				<h3>Level 8</h3>
					<ul>
						<li class="spell" id="animalShapes">Animal Shapes</li>
						<li class="spell" id="antipathySympathy">Antipathy/Sympathy</li>
						<li class="spell" id="controlWeather">Control Weather</li>
						<li class="spell" id="earthquake">Earthquake</li>
						<li class="spell" id="feeblemind">Feeblemind</li>
						<li class="spell" id="sunburst">Sunburst</li>
						<li class="spell" id="tsunami">Tsunami</li>
					</ul>
			</div>
			<div class="spell-list level9-list">
				<h3>Level 9</h3>
					<ul>
						<li class="spell" id="foresight">Foresight</li>
						<li class="spell" id="shapechange">Shapechange</li>
						<li class="spell" id="stormOfVengeance">Storm of Vengeance</li>
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
				<p id="spell-description">You touch one willing creature. Once before the spellends, the target can roll a d4 and add the number rolled to one ability check of its choice. It can roll the die before or after making the ability check. The spellthen ends.</p>
			</div>
		</div>
	</div>
	<?php include 'footer.php'; ?>
	<script type="text/javascript" src="./spells.js"></script>
</body>
</html>