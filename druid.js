//If you haven't read the readMe.txt, why are you here?

class Spell{
	constructor(name, level, type, castingTime, range, components, duration, description){
		this._name = name;
		this._level = level;
		this._type = type;
		this._castingTime = castingTime;
		this._range = range;
		this._components = components;
		this._duration = duration;
		this._description = description;
	}

	get name() {
		return this._name;
	}

	get level(){
		return this._level;
	}

	get type() {
		return this._type;
	}

	get castingTime(){
		return this._castingTime;
	}

	get range() {
		return this._range;
	}

	get components() {
		return this._components;
	}

	get duration() {
		return this._duration;
	}

	get description(){
		return this._description;
	}
}

// cantrips
const uniqueSpellName = new Spell(
	'spell name',
	'spell level',
	'spell type',
	'casting time',
	'spell range',
	'spell components',
	'spell duration',
	'spell description'
);

// first level Spells
const uniqueSpellName = new Spell(
	'spell name',
	'spell level',
	'spell type',
	'casting time',
	'spell range',
	'spell components',
	'spell duration',
	'spell description'
);

// level 2 Spells
const uniqueSpellName = new Spell(
	'spell name',
	'spell level',
	'spell type',
	'casting time',
	'spell range',
	'spell components',
	'spell duration',
	'spell description'
);

//Level 3 spells
const uniqueSpellName = new Spell(
	'spell name',
	'spell level',
	'spell type',
	'casting time',
	'spell range',
	'spell components',
	'spell duration',
	'spell description'
);


// update the spell description box
const spellDescriptionBox = document.querySelector('#spell-description-box');
const closeSpellDesBoxTrig = document.querySelector('#close-trigger');
const spellName = document.querySelector('#spell-name');
const spellLevel = document.querySelector('#spell-level');
const spellType = document.querySelector('#spell-type');
const spellCastingTime = document.querySelector('#spell-casting-time');
const spellRange = document.querySelector('#spell-range');
const spellComponents = document.querySelector('#spell-components');
const spellDuration = document.querySelector('#spell-duration');
const spellDescription = document.querySelector('#spell-description');
const spellTriggers = document.getElementsByClassName('spell');


//update the spell description box
function spellDetails(spell) {
	spellName.innerHTML = spell.name;
	spellLevel.innerHTML = `Level: ${spell.level}`;
	spellType.innerHTML = `Type: ${spell.type}`;
	spellCastingTime.innerHTML = `Casting Time: ${spell.castingTime}`;
	spellRange.innerHTML = `Range: ${spell.range}`;
	spellComponents.innerHTML = `Components: ${spell.components}`;
	spellDuration.innerHTML = `Duration: ${spell.duration}`;
	spellDescription.innerHTML = spell.description;
}

//make all spell elements triggers forthe spellDetails function
for (let x = 0; x < spellTriggers.length; x++){
	spellTriggers[x].addEventListener('click', function() {
		triggerID = this.id;
		console.log(triggerID);
		spellDetails(eval(triggerID));
		spellDescriptionBox.style.display = 'block';
})};

//close spell description box from within
closeSpellDesBoxTrig.addEventListener('click', () => {
	spellDescriptionBox.style.display = 'none';
})

//toggl class specific spell visibility
toggleDomainSpells.addEventListener('click', () => {
	for (let x = 0; x < spellTriggers.length; x++){
		if (spellTriggers[x].classList.contains('domain-spell')){
			$(spellTriggers[x]).toggle();
		}
	}
})
