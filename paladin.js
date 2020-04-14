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

// first level Spells
const bane = new Spell(
	'Bane',
	1,
	'Enchantment',
	'1 Action',
	'30 feet',
	'V S M (A drop of blood)',
	'Concentration, Up to 1 minute',
	'Up to three creatures of your choice that you can see within range must make Charisma saving throws. Whenever a target that fails this saving throw makes an attack roll or a saving throw before the spell ends, the target must roll a d4 and subtract the number rolled from the attack roll or saving throw.<br><br><strong>At Higher Levels:</strong> When you cast this spell using a spell slot of 2nd level or higher, you can target one additional creature for each slot level above 1st.'
);

const bless = new Spell(
	'Bless',
	1,
	'Enchantment',
	'1 Action',
	'30 feet',
	'V S M (A sprinkling of holy water)',
	'Concentration, Up to 1 minute',
	'You bless up to three creatures of your choice within range. Whenever a target makes an attack roll or a saving throw before the spell ends, the target can roll a d4 and add the number rolled to the attack roll or saving throw.<br><br><strong>At Higher Levels:</strong> When you cast this spell using a spell slot of 2nd level or higher, you can target one additional creature for each slot level above 1st.'
);

const command = new Spell(
	'Command',
	1,
	'Enchantment',
	'1 Action',
	'60 feet',
	'V',
	'1 round',
	'You speak a one-word command to a creature you can see within range. The target must succeed on a Wisdom saving throw or follow the command on its next turn. The spell has no effect if the target is undead, if it doesn’t understand your language, or if your command is directly harmful to it. Some typical commands and their effects follow. You might issue a command other than one described here. If you do so, the GM determines how the target behaves. If the target can’t follow your command, the spell ends. Approach. The target moves toward you by the shortest and most direct route, ending its turn if it moves within 5 feet of you. Drop. The target drops whatever it is holding and then ends its turn. Flee. The target spends its turn moving away from you by the fastest available means. Grovel. The target falls prone and then ends its turn. Halt. The target doesn’t move and takes no actions. A flying creature stays aloft, provided that it is able to do so. If it must move to stay aloft, it flies the minimum distance needed to remain in the air.<br><br><strong>At Higher Levels:</strong> When you cast this spell using a spell slot of 2nd level or higher, you can affect one additional creature for each slot level above 1st. The creatures must be within 30 feet of each other when you target them.'
);

const compelledDuel = new Spell(
	'Compelled Duel',
	1,
	'Enchantment',
	'1 Bonus Action',
	'30 feet',
	'V',
	'Concentration, Up to 1 minute',
	'You attempt to compel a creature into a duel.<br>One creature that you can see within range must make a Wisdom saving throw. On a failed save, the creature is drawn to you, compelled by your divine demand. For the duration, it has disadvantage on attack rolls against creatures other than you, and must make a Wisdom saving throw each time it attempts to move to a space that is more than 30 feet away from you; if it succeeds on this saving throw, this spell doesn’t restrict the target’s movement for that turn.<br>The spell ends if you attack any other creature, if you cast a spell that targets a hostile creature other than the target, if a creature friendly to you damages the target or casts a harmful spell on it, or if you end your turn more than 30 feet away from the target.'
);

const cureWounds = new Spell(
	'Cure Wounds',
	1,
	'Evocation',
	'1 Action',
	'Touch',
	'V S',
	'Instantaneous',
	'A creature you touch regains a number of hit points equal to 1d8 + your spellcasting ability modifier. This spell has no effect on undead or constructs.<br><br><strong>At Higher Levels:</strong> When you cast this spell using a spell slot of 2nd level or higher, the Healing increases by 1d8 for each slot level above 1st.'
);

const detectEvilAndGood = new Spell(
	'Detect Evil and Good',
	1,
	'Divination',
	'1 Action',
	'Self',
	'V S',
	'Concentration, Up to 10 minutes',
	'For the duration, you know if there is an aberration, celestial, elemental, fey, fiend, or undead within 30 feet of you, as well as where the creature is located. Similarly, you know if there is a place or object within 30 feet of you that has been magically consecrated or desecrated.<br>The spell can penetrate most barriers, but it is blocked by 1 foot of stone, 1 inch of common metal, a thin sheet of lead, or 3 feet of wood or dirt.'
);

const detectMagic = new Spell(
	'Detect Magic',
	1,
	'Divination (ritual)',
	'1 Action',
	'self',
	'V S',
	'Concentration, Up to 10 minutes',
	'For the duration, you sense the presence of magic within 30 feet of you. If you sense magic in this way, you can use your action to see a faint aura around any visible creature or object in the area that bears magic, and you learn its school of magic, if any.<br>The spell can penetrate most barriers, but it is blocked by 1 foot of stone, 1 inch of common metal, a thin sheet of lead, or 3 feet of wood or dirt.'
);

const detectPoisonAndDisease = new Spell(
	'Detect Poison and Disease',
	1,
	'Divination (ritual)',
	'1 Action',
	'Self',
	'V S M (A yew leaf)',
	'Instantaneous',
	'For the duration, you can sense the presence and location of poisons, poisonous creatures, and diseases within 30 feet of you. You also identify the kind of poison, poisonous creature, or disease in each case.<br>The spell can penetrate most barriers, but it is blocked by 1 foot of stone, 1 inch of common metal, a thin sheet of lead, or 3 feet of wood or dirt.'
);

const divineFavor = new Spell(
	'Divine Favor',
	1,
	'Evocation',
	'1 Bonus Action',
	'Self',
	'V S',
	'Concentration, Up to 1 minute',
	'Your prayer empowers you with divine radiance. Until the spell ends, your weapon attacks deal an extra 1d4 radiant damage on a hit.'
);

const ensnaringStrike = new Spell(
	'Ensnaring Strike',
	1,
	'Conjuration',
	'1 Bonus Action',
	'Self',
	'V',
	'Concentration, Up to 1 minute',
	"The next time you hit a creature with a weapon attack before this spell ends, a writhing mass of thorny vines appears at the point of impact, and the target must succeed on a Strength saving throw or be restrained by the magical vines until the spell ends. A Large or larger creature has advantage on this saving throw. If the target succeeds on the save, the vines shrivel away.<br>While restrained by this spell, the target takes 1d6 piercing damage at the start of each of its turns. A creature restrained by the vines or one that can touch the creature can use its action to make a Strength check against your spell save DC. On a success, the target is freed.<br><br><strong>At Higher Levels:</strong>If you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d6 for each slot level above 1st."
);

const heroism = new Spell(
	'Heroism',
	1,
	'Enchantment',
	'1 Action',
	'Touch',
	'V S',
	'Concentration, Up to 1 minute',
	'A willing creature you touch is imbued with bravery. Until the spell ends, the creature is immune to being frightened and gains temporary hit points equal to your spellcasting ability modifier at the start of each of its turns. When the spell ends, the target loses any remaining temporary hit points from this spell.<br><br><strong>At Higher Levels:</strong> When you cast this spell using a spell slot of 2nd level or higher, you can target one additional creature for each slot level above 1st.'
);

const huntersMark = new Spell(
	"Hunter's Mark",
	1,
	'Divination',
	'1 Bonus Action',
	'90 feet',
	'V',
	'Concentration, Up to 1 hour',
	"You choose a creature you can see within range and mystically mark it as your quarry. Until the spell ends, you deal an extra 1d6 damage to the target whenever you hit it with a weapon attack, and you have advantage on any Wisdom (Perception) or Wisdom (Survival) check you make to find it. If the target drops to 0 hit points before this spell ends, you can use a bonus action on a subsequent turn of yours to mark a new creature.<br><br><strong>At Higher Levels:</strong> When you cast this spell using a spell slot of 3rd or 4th level, you can maintain your Concentration on the spell for up to 8 hours. When you use a spell slot of 5th level or higher, you can maintain your concentr⁠ation on the spell for up to 24 hours."
);

const protectionFromEvilAndGood = new Spell(
	'Protection from Evil and Good',
	1,
	'Abjuration',
	'1 Action',
	'Touch',
	'V S M (Holy water or powdered silver and iron, which the spell consumes)',
	'Concentration, Up to 10 minutes',
	'Until the spell ends, one willing creature you touch is protected against certain types of creatures: aberrations, celestials, elementals, fey, fiends, and undead.<br>The protection grants several benefits. Creatures of those types have disadvantage on attack rolls against the target. The target also can’t be charmed, frightened, or possessed by them. If the target is already charmed, frightened, or possessed by such a creature, the target has advantage on any new saving throw against the relevant effect.'
);

const purifyFoodAndDrink = new Spell(
	'Purify Food and Drink',
	1,
	'Transmutation (ritual)',
	'1 Action',
	'10 Feet',
	'V S',
	'Instantaneous',
	'All nonmagical food and drink within a 5-foot-radius sphere centered on a point of your choice within range is purified and rendered free of poison and disease.'
);

const sanctuary = new Spell(
	'Sanctuary',
	1,
	'Abjuration',
	'1 Bonus Action',
	'30 Feet',
	'V S M (A small silver mirror)',
	'1 minute',
	'You ward a creature within range against attack. Until the spell ends, any creature who targets the warded creature with an attack or a harmful spell must first make a Wisdom saving throw. On a failed save, the creature must choose a new target or lose the attack or spell. This spell doesn’t protect the warded creature from area effects, such as the explosion of a fireball.<br>If the warded creature makes an attack or casts a spell that affects an enemy creature, this spell ends.'
);

const searingSmite = new Spell(
	'Searing Smite',
	1,
	'Evocation',
	'1 Bonus Action',
	'Self',
	'V',
	'Concentration, Up to 1 minute',
	"The next time you hit a creature with a melee weapon attack during the spell’s duration, your weapon flares with white-hot intensitity, and the attack deals an extra 1d6 fire damage to the target and causes the target to ignite in flames.<br>At the start of each of its turns until the spell ends, the target must make a Constitution saving throw. On a failed save, it takes 1d6 fire damage. On a successful save, the spells ends. If the target or a creature within 5 feet of it uses an action to put out the flames, or if some other effect douses the flames (such as the target being submerged in water), the spell ends.<br><br><strong>At Higher Levels:</strong> When you cast this spell using a spell slot of 2nd level or higher, the initial extra damage dealt by the attack increases by 1d6 for each slot."
);

const shieldOfFaith = new Spell(
	'Shield of Faith',
	1,
	'Abjuration',
	'1 Bonus Action',
	'60 Feet',
	'V S M (A small parchment with a bit of holy text written on it)',
	'Concentration, Up to 10 minutes',
	'A shimmering field appears and surrounds a creature of your choice within range, granting it a +2 bonus to AC for the duration.'
);

const speakWithAnimals = new Spell(
	'Speak With Animals',
	1,
	'Divination (ritual)',
	'1 Action',
	'Self',
	'V S',
	'10 minutes',
	'You gain the ability to comprehend and verbally communicate with beasts for the duration. The knowledge and awareness of many beasts is limited by their intelligence, but at minimum, beasts can give you information about nearby locations and monsters, including whatever they can perceive or have perceived within the past day. You might be able to persuade a beast to perform a small favor for you, at the GM’s discretion.'
);

const thunderousSmite = new Spell(
	'Thunderous Smite',
	1,
	'Evocation',
	'1 Bonus Action',
	'Self',
	'V',
	'Concentration, Up to 1 minute',
	"The first time you hit with a melee weapon attack during this spell’s duration, your weapon rings with thunder that is audible within 300 feet of you, and the attack deals an extra 2d6 thunder damage to the target. Additionally, if the target is a creature, it must succeed on a Strength saving throw or be pushed 10 feet away from you and knocked prone."
);

const wrathfulSmite = new Spell(
	'Wrathful Smite',
	1,
	'Evocation',
	'1 Bonus Action',
	'Self',
	'V',
	'Concentration, Up to 1 minute',
	"The next time you hit with a melee weapon attack during this spell’s duration, your attack deals an extra 1d6 psychic damage.<br>Additionally, if the target is a creature, it must make a Wisdom saving throw or be frightened of you until the spell ends. As an action, the creature can make a Wisdom check against your spell save DC to steel its resolve and end this spell."
);

// level 2 Spells
const aid = new Spell(
	'Aid',
	2,
	'Abjuration',
	'1 Action',
	'30 Feet',
	'V S M (A tiny strip of white cloth)',
	'8 Hours',
	'Your spell bolsters your allies with toughness and resolve. Choose up to three creatures within range. Each target’s hit point maximum and current hit points increase by 5 for the duration.<br><br><strong>At Higher Levels:</strong> When you cast this spell using a spell slot of 3rd level or higher, a target’s hit points increase by an additional 5 for each slot level above 2nd.'
);

const brandingSmite = new Spell(
	'Branding Smite',
	2,
	'Evocation',
	'1 Bonus Action',
	'Self',
	'V',
	'Concentration, Up to 1 minute',
	"The next time you hit a creature with a weapon attack before this spell ends, the weapon gleams with astral radiance as you strike. The attack deals an extra 2d6 radiant damage to the target, which becomes visible if it's invisible, and the target sheds dim light in a 5-foot radius and can't become invisible until the spell ends.<br><br><strong>At Higher Levels:</strong> When you cast this spell using a spell slot of 3rd level or higher, the extra damage increases by 1d6 for each slot level above 2nd."
);

const findSteed = new Spell(
	'Find Steed',
	2,
	'Conjuration',
	'1 minutes',
	'30 feet',
	'V S',
	'Instantaneous',
	"TYou summon a spirit that assumes the form of an unusually intelligent, strong, and loyal steed, creating a long-lasting bond with it. Appearing in an unoccupied space within range, the steed takes on a form that you choose: a warhorse, a pony, a camel, an elk, or a mastiff. (Your GM might allow other animals to be summoned as steeds.) The steed has the statistics of the chosen form, though it is a celestial, fey, or fiend (your choice) instead of its normal type. Additionally, if your steed has an Intelligence of 5 or less, its Intelligence becomes 6, and it gains the ability to understand one language of your choice that you speak.<br>Your steed serves you as a mount, both in combat and out, and you have an instinctive bond with it that allows you to fight as a seamless unit. While mounted on your steed, you can make any spell you cast that targets only you also target your steed.<br>When the steed drops to 0 hit points, it disappears, leaving behind no physical form. You can also dismiss your steed at any time as an action, causing it to disappear. In either case, casting this spell again summons the same steed, restored to its hit point maximum.<br>While your steed is within 1 mile of you, you can communicate with it telepathically.<br>You can’t have more than one steed bonded by this spell at a time. As an action, you can release the steed from its bond at any time, causing it to disappear."
);

const holdPerson = new Spell(
	'Hold Person',
	2,
	'Enchantment',
	'1 Action',
	'60 Feet',
	'V S M (A small, straight piece of iron)',
	'Concentration, Up to 1 minute',
	'Choose a humanoid that you can see within range. The target must succeed on a Wisdom saving throw or be paralyzed for the duration. At the end of each of its turns, the target can make another Wisdom saving throw. On a success, the spell ends on the target.<br><br><strong>At Higher Levels:</strong> When you cast this spell using a spell slot of 3rd level or higher, you can target on additional humanoid for each slot level above 2nd. The humanoids must be within 30 feet of each other when you target them.'
);

const lesserRestoration = new Spell(
	'Lesser Restoration',
	2,
	'Abjuration',
	'1 Action',
	'Touch',
	'V S',
	'Instantaneous',
	'You touch a creature and can end either one disease or one condition afflicting it. The condition can be blinded, deafened, paralyzed, or poisoned.'
);

const locateObject = new Spell(
	'Locate Object',
	2,
	'Divination',
	'1 Action',
	'Self',
	'V S M (A forked twig)',
	'Concentration, Up to 10 minutes',
	'Describe or name an object that is familiar to you. You sense the direction to the object’s location, as long as that object is within 1,000 feet of you. If the object is in motion, you know the direction of its movement.<br>The spell can locate a specific object known to you, as long as you have seen it up close—within 30 feet—at least once. Alternatively, the spell can locate the nearest object of a particular kind, such as a certain kind of apparel, jewelry, furniture, tool, or weapon.<br>This spell can’t locate an object if any thickness of lead, even a thin sheet, blocks a direct path between you and the object.'
);

const magicWeapon = new Spell(
	'Magic Weapon',
	2,
	'Transmutation',
	'1 Bonus Action',
	'Touch',
	'V S',
	'Concentration, Up to 1 hour',
	"You touch a nonmagical weapon. Until the spell ends, that weapon becomes a magic weapon with a +1 bonus to attack rolls and damage rolls.<br><br><strong>At Higher Levels:</strong> When you cast this spell using a spell slot of 4th level or higher, the bonus increases to +2. When you use a spell slot of 6th level or higher, the bonus increases to +3."
);

const mistyStep = new Spell(
	'Misty Step',
	2,
	'Conjuration',
	'1 Bonus Action',
	'Self',
	'V',
	'Instantaneous',
	'Briefly surrounded by silvery mist, you teleport up to 30 feet to an unoccupied space that you can see.'
);

const moonbeam = new Spell(
	'Moonbeam',
	2,
	'Evocation',
	'1 Action',
	'120 feet',
	'V S M (Several seeds of any moonseed plant and a piece of opalescent feldspar)',
	'Concentration, Up to 1 minute',
	"A silvery beam of pale light shines down in a 5-foot-radius, 40-foot-high cylinder centered on a point within range. Until the spell ends, dim light fills the cylinder.<br>When a creature enters the spell’s area for the first time on a turn or starts its turn there, it is engulfed in ghostly flames that cause searing pain, and it must make a Constitution saving throw. It takes 2d10 radiant damage on a failed save, or half as much damage on a successful one.<br>A shapechanger makes its saving throw with disadvantage. If it fails, it also instantly reverts to its original form and can’t assume a different form until it leaves the spell’s light.<br>On each of your turns after you cast this spell, you can use an action to move the beam 60 feet in any direction.<br>At Higher Levels. When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d10 for each slot level above 2nd."
);

const protectionFromPoison = new Spell(
	'Protection From Poison',
	2,
	'Abjuration',
	'1 Action',
	'Touch',
	'V S',
	'1 hour',
	'You touch a creature. If it is poisoned, you neutralize the poison. If more than one poison afflicts the target, you neutralize one poison that you know is present, or you neutralize one at random.<br>For the duration, the target has advantage on saving throws against being poisoned, and it has resistance to poison damage.'
);

const zoneOfTruth = new Spell(
	'Zone of Truth',
	2,
	'Enchantment',
	'1 Action',
	'60 Feet',
	'V S',
	'10 Minutes',
	'You create a magical zone that guards against deception in a 15-foot-radius sphere centered on a point of your choice within range. Until the spell ends, a creature that enters the spell’s area for the first time on a turn or starts its turn there must make a Charisma saving throw. On a failed save, a creature can’t speak a deliberate lie while in the radius. You know whether each creature succeeds or fails on its saving throw.<br>An affected creature is aware of the spell and can thus avoid answering questions to which it would normally respond with a lie. Such a creature can be evasive in its answers as long as it remains within the boundaries of the truth.'
);

//Level 3 spells

const auraOfVitality = new Spell(
	'Aura of Vitality',
	3,
	'Evocation',
	'1 Action',
	'Self (30-foot radius)',
	'V',
	'Concentration, Up to 1 minute',
	"Healing energy radiates from you in an aura with a 30-foot radius.<br>Until the spell ends, the aura moves with you, centered on you. You can use a bonus action to cause one creature in the aura (including you) to regain 2d6 hit points."
);

const beaconOfHope = new Spell(
	'Beacon of Hope',
	3,
	'Abjuration',
	'1 Action',
	'30 feet',
	'V S',
	'Concentration, Up to 1 minute',
	'This spell bestows hope and vitality. Choose any number of creatures within range. For the duration, each target has advantage on Wisdom saving throws and death saving throws, and regains the maximum number of hit points possible from any healing.'
);

const blindingSmite = new Spell(
	'Blinding Smite',
	3,
	'Evocation',
	'1 Bonus Action',
	'Self',
	'V',
	'Concentration, Up to 1 minute',
	"The next time you hit a creature with a melee weapon attack during this spell’s duration, you weapon flares with a bright light, and the attack deals an extra 3d8 radiant damage to the target. Additionally, the target must succeed on a Constitution saving throw or be blinded until the spell ends.<br>A creature blinded by this spell makes another Constitution saving throw at the end of each of its turns. On a successful save, it is no longer blinded."
);

const createFoodAndWater = new Spell(
	'Create Food and Water',
	3,
	'Conjuration',
	'1 Action',
	'30 feet',
	'V S',
	'Instantaneous',
	'You create 45 pounds of food and 30 gallons of water on the ground or in containers within range, enough to sustain up to fifteen humanoids or five steeds for 24 hours. The food is bland but nourishing, and spoils if uneaten after 24 hours. The water is clean and doesn’t go bad.'
);

const crusadersMantle = new Spell(
	"Crusader's Mantle",
	3,
	'Evocation',
	'1 Action',
	'self',
	'V',
	'Concentration, Up to 1 minute',
	"Holy power radiates from you in an aura with a 30-foot radius, awakening boldness in friendly creatures. Until the spell ends, the aura moves with you, centered on you. While in the aura, each nonhostile creature in the aura (including you) deals an extra 1d4 radiant damage when it hits with a weapon attack."
);

const daylight = new Spell(
	'Daylight',
	3,
	'Evocation',
	'1 Action',
	'60 feet',
	'V S',
	'1 hour',
	'A 60-foot-radius sphere of light spreads out from a point you choose within range. The sphere is bright light and sheds dim light for an additional 60 feet. If you chose a point on an object you are holding or one that isn’t being worn or carried, the light shines from the object and moves with it. Completely covering the affected object with an opaque object, such as a bowl or a helm, blocks the light. If any of this spell’s area overlaps with an area of darkness created by a spell of 3rd level or lower, the spell that created the darkness is dispelled.'
);

const dispelMagic = new Spell(
	'Dispel Magic',
	3,
	'Abjuration',
	'1 action',
	'120 feet',
	'V S',
	'Instantaneous',
	"Choose one creature, object, or magical effect within range. Any spell of 3rd level or lower on the target ends. For each spell of 4th level or higher on the target, make an ability check using your spellcasting ability. The DC equals 10 + the spell’s level. On a successful check, the spell ends.<br><br><strong>At Higher Levels:</strong> When you cast this spell using a spell slot of 4th level or higher, you automatically end the effects of a spell on the target if the spell's level is equal to or less than the level of the spell slot you used."
);

const elementalWeapon = new Spell(
	'Elemental Weapon',
	3,
	'Transmutation',
	'1 action',
	'Touch',
	'V S',
	'Concentration, Up to 1 hour',
	"A nonmagical weapon you touch becomes a magic weapon.<br>Choose one of the following damage types: acid, cold, fire, lightning, or thunder. For the duration, the weapon has a +1 bonus to attack rolls and deals an extra 1d4 damage of the chosen type when it hits.<br><br><strong>At Higher Levels:</strong>When you cast this spell using a spell slot of 5th or 6th level, the bonus to attack rolls increases to +2 and the extra damage increases to 2d4.<br>When you use a spell slot of 7th level or higher, the bonus increases to +3 and the extra damage increases to 3d4."
);

const haste = new Spell(
	'Haste',
	3,
	'Transmutation',
	'1 Action',
	'30 Feet',
	'V S M (A shaving of licorice root)',
	'Concentration, up to 1 minute',
	"Choose a willing creature that you can see within range. Until the spell ends, the target’s speed is doubled, it gains a +2 bonus to AC, it has advantage on Dexterity saving throws, and it gains an additional action on each of its turns. That action can be used only to take the Attack (one weapon attack only), Dash, Disengage, Hide, or Use an Object action.<br>When the spell ends, the target can’t move or take actions until after its next turn, as a wave of lethargy sweeps over it."
);

const magicCircle = new Spell(
	'Magic Circle',
	3,
	'Abjuration',
	'1 minute',
	'10 Feet',
	'V S M (Holy water or powdered silver and iron worth at least 100 gp, which the spell consumes)',
	'1 Hour',
	'You create a 10-foot-radius, 20-foot-tall cylinder of magical energy centered on a point on the ground that you can see within range. Glowing runes appear wherever the cylinder intersects with the floor or other surface. Choose one or more of the following types of creatures: celestials, elementals, fey, fiends, or undead. The circle affects a creature of the chosen type in the following ways: The creature can’t willingly enter the cylinder by nonmagical means. If the creature tries to use teleportation or interplanar travel to do so, it must first succeed on a Charisma saving throw. The creature has disadvantage on attack rolls against targets within the cylinder. Targets within the cylinder can’t be charmed, frightened, or possessed by the creature. When you cast this spell, you can elect to cause its magic to operate in the reverse direction, preventing a creature of the specified type from leaving the cylinder and protecting targets outside it.<br><br><strong>At Higher Levels:</strong> When you cast this spell using a spell slot of 4th level or higher, the Duration increases by 1 hour for each slot level above 3rd.'
);

const plantGrowth = new Spell(
	'Plant Growth',
	3,
	'transmutation',
	'1 Action or 8 hours',
	'150 feet',
	'V S',
	'instantaneous',
	'This spell channels vitality into plants within a specific area. There are two possible uses for the spell, granting either immediate or long-term benefits.<br>If you cast this spell using 1 action, choose a point within range. All normal plants in a 100-foot radius centered on that point become thick and overgrown. A creature moving through the area must spend 4 feet of movement for every 1 foot it moves.<br>You can exclude one or more areas of any size within the spell’s area from being affected.<br>If you cast this spell over 8 hours, you enrich the land. All plants in a half-mile radius centered on a point within range become enriched for 1 year. The plants yield twice the normal amount of food when harvested.'
);

const protectionFromEnergy = new Spell(
	'Protection From Energy',
	3,
	'Abjuration',
	'1 Action',
	'Touch',
	'V S',
	'Concentration, Up to 1 hour',
	'For the duration, the willing creature you touch has resistance to one damage type of your choice: acid, cold, fire, lightning, or thunder.'
);

const removeCurse = new Spell(
	'Remove Curse',
	3,
	'Abjuration',
	'1 Action',
	'Touch',
	'V S',
	'Instantaneous',
	"At your touch, all curses affecting one creature or object end. If the object is a cursed magic item, its curse remains, but the spell breaks its owner’s attunement to the object so it can be removed or discarded."
);

const revivify = new Spell(
	'Revivify',
	3,
	'Necromancy',
	'1 Action',
	'Touch',
	'V S M (Diamonds worth 300 gp, which the spell consumes)',
	'Instantaneous',
	'You touch a creature that has died within the last minute. That creature returns to life with 1 hit point. This spell can’t return to life a creature that has died of old age, nor can it restore any missing body parts.'
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
});

toggleDomainSpells.addEventListener('click', () => {
	for (let x = 0; x < spellTriggers.length; x++){
		if (spellTriggers[x].classList.contains('domain-spell')){
			$(spellTriggers[x]).toggle();
		}
	}
})
