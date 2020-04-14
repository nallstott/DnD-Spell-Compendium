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
const guidance = new Spell(
	'Guidance',
	'Cantrip',
	'Divination',
	'1 Action',
	'Touch',
	'V S',
	'Concentration, up to 1 minute',
	'You touch one willing creature. Once before the spell ends, the target can roll a d4 and add the number rolled to one ability check of its choice. It can roll the die before or after making the ability check. The spell then ends.'
);

const light = new Spell(
	'Light',
	'Cantrip',
	'Evocation',
	'1 Action',
	'Touch',
	'V M (A firefly or phosphorescent moss)',
	'1 hour',
	'You touch one object that is no larger than 10 feet in any dimension. Until the spell ends, the object sheds bright light in a 20-foot radius and dim light for an additional 20 feet. The light can be colored as you like. Completely covering the object with something opaque blocks the light. The spell ends if you cast it again or dismiss it as an action.<br>If you target an object held or worn by a hostile creature, that creature must succeed on a Dexterity saving throw to avoid the spell.'
);

const mending = new Spell(
	'Mending',
	'Cantrip',
	'Transmutation',
	'1 Minute',
	'Touch',
	'V S M (Two lodestones)',
	'Instantaneous',
	'This spell repairs a single break or tear in an object you touch, such as a broken chain link, two halves of a broken key, a torn cloak, or a leaking wineskin. As long as the break or tear is no larger than 1 foot in any dimension, you mend it, leaving no trace of the former damage.<br>This spell can physically repair a magic item or construct, but the spell can’t restore magic to such an object.'
);

const resistance = new Spell(
	'Resistance',
	'Cantrip',
	'Abjuration',
	'1 Action',
	'Touch',
	'V S M (A miniature cloak)',
	'Concentration, up to 1 minute',
	'You touch one willing creature. Once before the spell ends, the target can roll a d4 and add the number rolled to one saving throw of its choice. It can roll the die before or after making the saving throw. The spell then ends.'
);

const sacredFlame = new Spell(
	'Sacred Flame',
	'Cantrip',
	'Evocation',
	'1 Action',
	'60 Feet',
	'V, S',
	'Instantaneous',
	'Flame-like radiance descends on a creature that you can see within range. The target must succeed on a Dexterity saving throw or take 1d8 radiant damage. The target gains no benefit from cover for this saving throw.'
);

const spareTheDying = new Spell(
	'Spare the Dying',
	'Cantrip',
	'Necromancy',
	'1 Action',
	'Touch',
	'V, S',
	'Instantaneous',
	'You touch a living creature that has 0 hit points. The creature becomes stable. This spell has no effect on undead or constructs.'
);

const thaumaturgy = new Spell(
	'Thaumaturgy',
	'Cantrip',
	'Transmutation',
	'1 Action',
	'Touch',
	'V',
	'Up to 1 minute',
	'You manifest a minor wonder, a sign of supernatural power, within range. You create one of the following magical effects within range:<br>\tYour voice booms up to three times as loud as normal for 1 minute. You cause flames to flicker, brighten, dim, or change color for 1 minute.<br>\tYou cause harmless tremors in the ground for 1 minute.<br>\tYou create an instantaneous sound that originates from a point of your choice within range, such as a rumble of thunder, the cry of a raven, or ominous whispers.<br>\tYou instantaneously cause an unlocked door or window to fly open or slam shut.<br>\tYou alter the appearance of your eyes for 1 minute.<br>If you cast this spell multiple times, you can have up to three of its 1-minute effects active at a time, and you can dismiss such an effect as an action.'
);

// first level Spells
const animalFriendship = new Spell(
	'Animal Friendship',
	1,
	'Enchantment',
	'1 Action',
	'30 feet',
	'V S M (A morsel of food)',
	'24 hours',
	'This spell lets you convince a beast that you mean it no harm. Choose a beast that you can see within range. It must see and hear you. If the beast’s Intelligence is 4 or higher, the spell fails. Otherwise, the beast must succeed on a Wisdom saving throw or be charmed by you for the spell’s duration. If you or one of your companions harms the target, the spells ends.<br><br><strong>At Higher Levels:</strong> When you cast this spell using a spell slot of 2nd level or higher, you can affect one additional beast for each slot level above 1st.'
);

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

const burningHands = new Spell(
	'Burning Hands',
	1,
	'Evocation',
	'1 Action',
	'Self(15-foot cone)',
	'V S',
	'Instantaneous',
	"As you hold your hands with thumbs touching and fingers spread, a thin sheet of flames shoots forth from your outstretched fingertips. Each creature in a 15-foot cone must make a Dexterity saving throw. A creature takes 3d6 fire damage on a failed save, or half as much damage on a successful one. The fire ignites any flammable objects in the area that aren’t being worn or carried.<br><br><strong>At Higher Levels:</strong> When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d6 for each slot level above 1st."
);

const charmPerson = new Spell(
	'Charm Person',
	1,
	'Enchantment',
	'1 Action',
	'30 feet',
	'V S',
	'1 hour',
	"You attempt to charm a humanoid you can see within range. It must make a Wisdom saving throw, and does so with advantage if you or your companions are fighting it. If it fails the saving throw, it is charmed by you until the spell ends or until you or your companions do anything harmful to it. The charmed creature regards you as a friendly acquaintance. When the spell ends, the creature knows it was charmed by you.<br><br><strong>At Higher Levels:</strong> When you cast this spell using a spell slot of 2nd level or higher, you can target one additional creature for each slot level above 1st. The creatures must be within 30 feet of each other when you target them."
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

const createOrDestroyWater = new Spell(
	'Create or Destroy Water',
	1,
	'Transmutation',
	'1 Action',
	'30 feet',
	'V S M (A drop of water if creating water or a few grains of sand if destroying it)',
	'Instantaneous',
	'You either create or destroy water. Create Water. You create up to 10 gallons of clean water within range in an open container. Alternatively, the water falls as rain in a 30-foot cube within range, extinguishing exposed flames in the area. Destroy Water. You destroy up to 10 gallons of water in an open container within range. Alternatively, you destroy fog in a 30-foot cube within range.<br><br><strong>At Higher Levels:</strong> When you cast this spell using a spell slot of 2nd level or higher, you create or destroy 10 additional gallons of water, or the size of the cube increases by 5 feet, for each slot level above 1st.'
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

const disguiseSelf = new Spell(
	'Disguise Self',
	1,
	'Illusion',
	'1 Action',
	'Self',
	'V S',
	'1 hour',
	"You make yourself—including your clothing, armor, weapons, and other belongings on your person—look different until the spell ends or until you use your action to dismiss it. You can seem 1 foot shorter or taller and can appear thin, fat, or in between. You can’t change your body type, so you must adopt a form that has the same basic arrangement of limbs. Otherwise, the extent of the illusion is up to you.<br>The changes wrought by this spell fail to hold up to physical inspection. For example, if you use this spell to add a hat to your outfit, objects pass through the hat, and anyone who touches it would feel nothing or would feel your head and hair. If you use this spell to appear thinner than you are, the hand of someone who reaches out to touch you would bump into you while it was seemingly still in midair.<br>To discern that you are disguised, a creature can use its action to inspect your appearance and must succeed on an Intelligence (Investigation) check against your spell save DC."
);

const divineFavor = new Spell(
	'Divine Favor',
	1,
	'Evocation',
	'1 Bonus Action',
	'Self',
	'V S',
	'Concentration, Up to 1 minute',
	"Your prayer empowers you with divine radiance. Until the spell ends, your weapon attacks deal an extra 1d4 radiant damage on a hit."
);

const faerieFire = new Spell(
	'Faerie Fire',
	1,
	'Evocation',
	'1 Action',
	'60 feet',
	'V',
	'Concentration, Up to 1 minute',
	"Each object in a 20-foot cube within range is outlined in blue, green, or violet light (your choice). Any creature in the area when the spell is cast is also outlined in light if it fails a Dexterity saving throw. For the duration, objects and affected creatures shed dim light in a 10-foot radius.<br>Any attack roll against an affected creature or object has advantage if the attacker can see it, and the affected creature or object can’t benefit from being invisible."
);

const fogCloud = new Spell(
	'Fog Cloud',
	1,
	'Conjuration',
	'1 Action',
	'120 feet',
	'V S',
	'Concentration, Up to 1 hour',
	"You create a 20-foot-radius sphere of fog centered on a point within range. The sphere spreads around corners, and its area is heavily obscured. It lasts for the duration or until a wind of moderate or greater speed (at least 10 miles per hour) disperses it.<br><br><strong>At Higher Levels:</strong> When you cast this spell using a spell slot of 2nd level or higher, the radius of the fog increases by 20 feet for each slot level above 1st."
);

const guidingBolt = new Spell(
	'Guiding Bolt',
	1,
	'Evocation',
	'1 Action',
	'120 feet',
	'V S',
	'1 Round',
	'A flash of light streaks toward a creature of your choice within range. Make a ranged spell attack against the target. On a hit, the target takes 4d6 radiant damage, and the next attack roll made against this target before the end of your next turn has advantage, thanks to the mystical dim light glittering on the target until then.<br><br><strong>At Higher Levels:</strong> When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d6 for each slot level above 1st.'
);

const healingWord = new Spell(
	'Healing Word',
	1,
	'Evocation',
	'1 Bonus Action',
	'60 feet',
	'V',
	'Instantaneous',
	'A creature of your choice that you can see within range regains hit points equal to 1d4 + your spellcasting ability modifier. This spell has no effect on undead or constructs.<br><br><strong>At Higher Levels:</strong> When you cast this spell using a spell slot of 2nd level or higher, the Healing increases by 1d4 for each slot level above 1st.'
);

const identify = new Spell(
	'Identify',
	1,
	'Divination (ritual)',
	'1 Minute',
	'Touch',
	'V S M (A pearl worth at least 100 gp and an owl feather)',
	'Instantaneous',
	"You choose one object that you must touch throughout the casting of the spell. If it is a magic item or some other magic-imbued object, you learn its properties and how to use them, whether it requires attunement to use, and how many charges it has, if any. You learn whether any spells are affecting the item and what they are. If the item was created by a spell, you learn which spell created it.<br>If you instead touch a creature throughout the casting, you learn what spells, if any, are currently affecting it."
);

const inflictWounds = new Spell(
	'Inflict Wounds',
	1,
	'Necromancy',
	'1 Action',
	'Touch',
	'V S',
	'Instantaneous',
	'Make a melee spell attack against a creature you can reach. On a hit, the target takes 3d10 necrotic damage.<br><br><strong>At Higher Levels:</strong> When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d10 for each slot level above 1st.'
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

const thunderwave = new Spell(
	'Thunderwave',
	1,
	'Evocation',
	'1 Action',
	'Self (15 foot cube)',
	'V S',
	'Instantaneous',
	'A wave of thunderous force sweeps out from you. Each creature in a 15-foot cube originating from you must make a Constitution saving throw. On a failed save, a creature takes 2d8 thunder damage and is pushed 10 feet away from you. On a successful save, the creature takes half as much damage and isn’t pushed. In addition, unsecured objects that are completely within the area of effect are automatically pushed 10 feet away from you by the spell’s effect, and the spell emits a thunderous boom audible out to 300 feet.<br><br><strong>At Higher Levels:</strong> When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d8 for each slot level above 1st.'
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

const augury = new Spell(
	'Augury',
	2,
	'Divination (ritual)',
	'1 Minute',
	'Self',
	'V, S, M (specially marked sticks, bones, or similar tokens w orth at least 25 gp)',
	'Instantaneous',
	'By casting gem-inlaid sticks, rolling dragon bones,laying out ornate cards, or employing some other divining tool, you receive an omen from an otherworldly entity about the results of a specific course of action that you plan to take within the next 30 minutes. The DM chooses from the following possible omens:<br>\t• Weal, for good results<br>\t• Woe, for bad results<br>\t• Weal and woe, for both good and bad results<br>\t• Nothing, for results that aren’t especially good or bad<br>The spell doesn’t take into account any possible circumstances that might change the outcome, such as the casting of additional spells or the loss or gain of a companion./nIf you cast the spell two or more times before completing your next long rest, there is a cumulative 25 percent chance for each casting after the first that you get a random reading. The DM makes this roll in secret.'
);

const barkskin = new Spell(
	'Barkskin',
	2,
	'Transmutation',
	'1 Action',
	'Touch',
	' V S M (A handful of oak bark)',
	'Concentration, Up to 1 hour',
	'You touch a willing creature. Until the spell ends, the target’s skin has a rough, bark-like appearance, and the target’s AC can’t be less than 16, regardless of what kind of armor it is wearing.'
);


const blindnessDeafness = new Spell(
	'Blindess / Deafness',
	2,
	'Necromancy',
	'1 Action',
	'30 Feet',
	'V',
	'1 Minute',
	'You can blind or deafen a foe. Choose one creature that you can see within range to make a Constitution saving throw. If it fails, the target is either blinded or deafened (your choice) for the duration. At the end of each of its turns, the target can make a Constitution saving throw. On a success, the spell ends.<br><br>At Higher Levels. When you cast this spell using a spell slot o f 3rd level or higher, you can target one additional creature for each slot level above 2nd.'
);

const calmEmotions = new Spell(
	'Calm Emotions',
	2,
	'Enchantment',
	'1 Action',
	'60 Feet',
	'V S',
	'Concentration, Up to 1 minute',
	'You attempt to suppress strong emotions in a group of people. Each humanoid in a 20-foot-radius sphere centered on a point you choose within range must make a Charisma saving throw; a creature can choose to fail this saving throw if it wishes. If a creature fails its saving throw, choose one of the following two effects.<br>You can suppress any effect causing a target to be charmed or frightened. When this spell ends, any suppressed effect resumes, provided that its duration has not expired in the meantime. Alternatively, you can make a target indifferent about creatures of your choice that it is hostile toward. This indifference ends if the target is attacked or harmed by a spell or if it witnesses any of its friends being harmed. When the spell ends, the creature becomes hostile again, unless the GM rules otherwise.'
);

const continualFlame = new Spell(
	'Continual Flame',
	2,
	'Evocation',
	'1 Action',
	'Touch',
	'V S M (Ruby dust worth 50 gp, which the spell consumes)',
	'Until Dispelled',
	'A flame, equivalent in brightness to a torch, springs forth from an object that you touch. The effect looks like a regular flame, but it creates no heat and doesn’t use oxygen. A continual flame can be covered or hidden but not smothered or quenched.'
);

const enhanceAbility = new Spell(
	'Enhance Ability',
	2,
	'Transmutation',
	'1 Action',
	'Touch',
	'V S M (Fur or a feather from a beast)',
	'Concentration, Up to 1 hour',
	'You touch a creature and bestow upon it a magical enhancement. Choose one of the following effects; the target gains that effect until the spell ends. Bear’s Endurance. The target has advantage on Constitution checks. It also gains 2d6 temporary hit points, which are lost when the spell ends. Bull’s Strength. The target has advantage on Strength checks, and his or her carrying capacity doubles. Cat’s Grace. The target has advantage on Dexterity checks. It also doesn’t take damage from falling 20 feet or less if it isn’t incapacitated. Eagle’s Splendor. The target has advantage on Charisma checks. Fox’s Cunning. The target has advantage on Intelligence checks. Owl’s Wisdom. The target has advantage on Wisdom checks.<br><br><strong>At Higher Levels:</strong> When you cast this spell using a spell slot of 3rd level or higher, you can target one additional creature for each slot level above 2nd.'
);

const findTraps = new Spell(
	'Find Traps',
	2,
	'Divination',
	'1 Action',
	'120 Feet',
	'V S',
	'Instantaneous',
	'You sense the presence of any trap within range that is within line of sight. A trap, for the purpose of this spell, includes anything that would inflict a sudden or unexpected effect you consider harmful or undesirable, which was specifically intended as such by its creator. Thus, the spell would sense an area affected by the alarm spell, a glyph of warding, or a mechanical pit trap, but it would not reveal a natural weakness in the floor, an unstable ceiling, or a hidden sinkhole.<br>This spell merely reveals that a trap is present. You don’t learn the location of each trap, but you do learn the general nature of the danger posed by a trap you sense.'
);

const flamingSphere = new Spell(
	'Flaming Sphere',
	2,
	'Conjuration',
	'1 Action',
	'60 Feet',
	'V S M (A bit of tallow, a pinch of brimstone, and a dusting of powdered iron)',
	'Concentration, Up to 1 minute',
	"A 5-foot-diameter sphere of fire appears in an unoccupied space of your choice within range and lasts for the duration. Any creature that ends its turn within 5 feet of the sphere must make a Dexterity saving throw. The creature takes 2d6 fire damage on a failed save, or half as much damage on a successful one. As a bonus action, you can move the sphere up to 30 feet. If you ram the sphere into a creature, that creature must make the saving throw against the sphere’s damage, and the sphere stops moving this turn. When you move the sphere, you can direct it over barriers up to 5 feet tall and jump it across pits up to 10 feet wide. The sphere ignites flammable objects not being worn or carried, and it sheds bright light in a 20-foot radius and dim light for an additional 20 feet.<br><br><strong>At Higher Levels:</strong> When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d6 for each slot level above 2nd."
);

const gentleRepose = new Spell(
	'Gentle Repose',
	2,
	'Necromancy (ritual)',
	'1 Action',
	'Touch',
	'V S M (A pinch of salt and one copper piece placed on each of the corpse’s eyes, which must remain there for the duration)',
	'10 Days',
	'You touch a corpse or other remains. For the duration, the target is protected from decay and can’t become undead.<br>The spell also effectively extends the time limit on raising the target from the dead, since days spent under the influence of this spell don’t count against the time limit of spells such as raise dead.'
);

const gustOfWind = new Spell(
	'Gust of Wind',
	2,
	'Evocation',
	'1 Action',
	'Self (60-foot line)',
	'V S M (A legume seed)',
	'Concentration, Up to 1 minute',
	'A line of strong wind 60 feet long and 10 feet wide blasts from you in a direction you choose for the spell’s duration. Each creature that starts its turn in the line must succeed on a Strength saving throw or be pushed 15 feet away from you in a direction following the line.<br>Any creature in the line must spend 2 feet of movement for every 1 foot it moves when moving closer to you.<br>The gust disperses gas or vapor, and it extinguishes candles, torches, and similar unprotected flames in the area. It causes protected flames, such as those of lanterns, to dance wildly and has a 50 percent chance to extinguish them.<br>As a bonus action on each of your turns before the spell ends, you can change the direction in which the line blasts from you.'
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

const mirrorImage = new Spell(
	'Mirror Image',
	2,
	'Illusion',
	'1 Action',
	'Self',
	'V S',
	'1 Minute',
	"Three illusory duplicates of yourself appear in your space. Until the spell ends, the duplicates move with you and mimic your actions, shifting position so it’s impossible to track which image is real. You can use your action to dismiss the illusory duplicates.<br>Each time a creature targets you with an attack during the spell’s duration, roll a d20 to determine whether the attack instead targets one of your duplicates.<br>If you have three duplicates, you must roll a 6 or higher to change the attack’s target to a duplicate. With two duplicates, you must roll an 8 or higher. With one duplicate, you must roll an 11 or higher.<br>A duplicate’s AC equals 10 + your Dexterity modifier. If an attack hits a duplicate, the duplicate is destroyed. A duplicate can be destroyed only by an attack that hits it. It ignores all other damage and effects. The spell ends when all three duplicates are destroyed.<br>A creature is unaffected by this spell if it can’t see, if it relies on senses other than sight, such as blindsight, or if it can perceive illusions as false, as with truesight."
);

const passWithoutTrace = new Spell(
	'Pass Without Trace',
	2,
	'Abjuration',
	'1 Action',
	'Self',
	'V S M (Ashes from a burned leaf of mistletoe and a sprig of spruce)',
	'Concentration, Up to 1 hour',
	"A veil of shadows and silence radiates from you, masking you and your companions from detection. For the duration, each creature you choose within 30 feet of you (including you) has a +10 bonus to Dexterity (Stealth) checks and can’t be tracked except by magical means. A creature that receives this bonus leaves behind no tracks or other traces of its passage."
);

const prayerOfHealing = new Spell(
	'Prayer of Healing',
	2,
	'Evocation',
	'10 minutes',
	'30 Feet',
	'V',
	'Instantaneous',
	'Up to six creatures of your choice that you can see within range each regain hit points equal to 2d8 + your spellcasting ability modifier. This spell has no effect on undead or constructs.<br><br><strong>At Higher Levels:</strong> When you cast this spell using a spell slot of 3rd level or higher, the Healing increases by 1d8 for each slot level above 2nd.'
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

const scorchingRay = new Spell(
	'Scorching Ray',
	2,
	'Evocation',
	'1 Action',
	'120 Feet',
	'V S',
	'Instantaneous',
	"You create three rays of fire and hurl them at targets within range. You can hurl them at one target or several. Make a ranged spell attack for each ray. On a hit, the target takes 2d6 fire damage.<br><br><strong>At Higher Levels:</strong> When you cast this spell using a spell slot of 3rd level or higher, you create one additional ray for each slot level above 2nd."
);

const shatter = new Spell(
	'Shatter',
	2,
	'Evocation',
	'1 Action',
	'60 feet',
	'V S M (A chip of mica)',
	'Instantaneous',
	'A sudden loud ringing noise, painfully intense, erupts from a point of your choice within range. Each creature in a 10-foot-radius sphere centered on that point must make a Constitution saving throw. A creature takes 3d8 thunder damage on a failed save, or half as much damage on a successful one. A creature made of inorganic material such as stone, crystal, or metal has disadvantage on this saving throw. A nonmagical object that isn’t being worn or carried also takes the damage if it’s in the spell’s area.<br><br><strong>At Higher Levels:</strong> When you cast this spell using a spell slot of or higher, the damage increases by 1d8 for each slot level above 2nd.'
);

const silence = new Spell(
	'Silence',
	2,
	'Illusion (ritual)',
	'1 Action',
	'120 Feet',
	'V S',
	'Concentration, Up to 10 minutes',
	'For the duration, no sound can be created within or pass through a 20-foot-radius sphere centered on a point you choose within range. Any creature or object entirely inside the sphere is immune to thunder damage, and creatures are deafened while entirely inside it. Casting a spell that includes a verbal component is impossible there.'
);

const spikeGrowth = new Spell(
	'Spike Growth',
	2,
	'Transmutation',
	'1 Action',
	'150 Feet',
	'V S M (Seven sharp thorns or seven small twigs, each sharpened to a point)',
	'Concentration, Up to 10 minutes',
	'The ground in a 20-foot radius centered on a point within range twists and sprouts hard spikes and thorns. The area becomes difficult terrain for the duration. When a creature moves into or within the area, it takes 2d4 piercing damage for every 5 feet it travels.<br>The transformation of the ground is camouflaged to look natural. Any creature that can’t see the area at the time the spell is cast must make a Wisdom (Perception) check against your spell save DC to recognize the terrain as hazardous before entering it.'
);

const spiritualWeapon = new Spell(
	'Spiritual Weapon',
	2,
	'Evocation',
	'1 Bonus Action',
	'60 Feet',
	'V S',
	'1 Minute',
	'You create a floating, spectral weapon within range that lasts for the duration or until you cast this spell again. When you cast the spell, you can make a melee spell attack against a creature within 5 feet of the weapon. On a hit, the target takes force damage equal to 1d8 + your spellcasting ability modifier. As a bonus action on your turn, you can move the weapon up to 20 feet and repeat the attack against a creature within 5 feet of it. The weapon can take whatever form you choose. Clerics of deities who are associated with a particular weapon (as St. Cuthbert is known for his mace and Thor for his hammer) make this spell’s effect resemble that weapon.<br><br><strong>At Higher Levels:</strong> When you cast this spell using a spell slot 3rd level of or higher, the damage increases by 1d8 for every two slot levels above the 2nd.'
);

const suggestion = new Spell(
	'Suggestion',
	2,
	'Enchantment',
	'1 Action',
	'30 Feet',
	"V M (A snake's tongue and either a bit of honeycomb or a drop of sweet oil)",
	'Concentration, Up to 8 hours',
	"You suggest a course of activity (limited to a sentence or two) and magically influence a creature you can see within range that can hear and understand you. Creatures that can’t be charmed are immune to this effect. The suggestion must be worded in such a manner as to make the course of action sound reasonable. Asking the creature to stab itself, throw itself onto a spear, immolate itself, or do some other obviously harmful act ends the spell.<br>The target must make a Wisdom saving throw. On a failed save, it pursues the course of action you described to the best of its ability. The suggested course of action can continue for the entire duration. If the suggested activity can be completed in a shorter time, the spell ends when the subject finishes what it was asked to do.<br>You can also specify conditions that will trigger a special activity during the duration. For example, you might suggest that a knight give her warhorse to the first beggar she meets. If the condition isn’t met before the spell expires, the activity isn’t performed.<br>If you or any of your companions damage the target, the spell ends."
);

const wardingBond = new Spell(
	'Warding Bond',
	2,
	'Abjuration',
	'1 Action',
	'Touch',
	'V S M (A pair of platinum rings worth at least 50 gp each, which you and the target must wear for the duration)',
	'1 Hour',
	'This spell wards a willing creature you touch and creates a mystic connection between you and the target until the spell ends. While the target is within 60 feet of you, it gains a +1 bonus to AC and saving throws, and it has resistance to all damage. Also, each time it takes damage, you take the same amount of damage.<br>The spell ends if you drop to 0 hit points or if you and the target become separated by more than 60 feet. It also ends if the spell is cast again on either of the connected creatures. You can also dismiss the spell as an action.'
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

const animateDead = new Spell(
	'Animate Dead',
	3,
	'Necromancy',
	'1 minute',
	'10 feet',
	'V S M (A drop of blood, a piece of flesh, and a pinch of bone dust)',
	'Instantaneous',
	'This spell creates an undead servant. Choose a pile of bones or a corpse of a Medium or Small humanoid within range. Your spell imbues the target with a foul mimicry of life, raising it as an undead creature. The target becomes a skeleton if you chose bones or a zombie if you chose a corpse (the GM has the creature’s game statistics). On each of your turns, you can use a bonus action to mentally command any creature you made with this spell if the creature is within 60 feet of you (if you control multiple creatures, you can command any or all of them at the same time, issuing the same command to each one). You decide what action the creature will take and where it will move during its next turn, or you can issue a general command, such as to guard a particular chamber or corridor. If you issue no commands, the creature only defends itself against hostile creatures. Once given an order, the creature continues to follow it until its task is complete. The creature is under your control for 24 hours, after which it stops obeying any command you’ve given it. To maintain control of the creature for another 24 hours, you must cast this spell on the creature again before the current 24-hour period ends. This use of the spell reasserts your control over up to four creatures you have animated with this spell, rather than animating a new one.<br><br><strong>At Higher Levels:</strong> When you cast this spell using a spell slot of 4th level or higher, you animate or reassert control over two additional Undead creatures for each slot above 3rd. Each of the creatures must come from a different corpse or pile of bones.'
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

const bestowCurse = new Spell(
	'Bestow Curse',
	3,
	'Necromancy',
	'1 Action',
	'Touch',
	'V S',
	'Concentration, Up to 1 minute',
	"You touch a creature, and that creature must succeed on a Wisdom saving throw or become cursed for the duration of the spell. When you cast this spell, choose the nature of the curse from the following options: Choose one ability score. While cursed, the target has disadvantage on ability checks and saving throws made with that ability score. While cursed, the target has disadvantage on attack rolls against you. While cursed, the target must make a Wisdom saving throw at the start of each of its turns. If it fails, it wastes its action that turn doing nothing. While the target is cursed, your attacks and spells deal an extra 1d8 necrotic damage to the target. A remove curse spell ends this effect. At the GM’s option, you may choose an alternative curse effect, but it should be no more powerful than those described above. The GM has final say on such a curse’s effect.<br><br><strong>At Higher Levels:</strong> If you cast this spell using a spell slot of 4th level or higher, the Duration is Concentration, up to 10 minutes. If you use a spell slot of 5th level or higher, the Duration is 8 hours. If you use a spell slot of 7th level or higher, the Duration is 24 hours. If you use a 9th level spell slot, the spell lasts until it is dispelled. Using a spell slot of 5th level or higher grants a Duration that doesn't require Concentration."
);

const blink = new Spell(
	'Blink',
	3,
	'Transmutation',
	'1 Action',
	'Self',
	'V S',
	'1 Minute',
	"Roll a d20 at the end of each of your turns for the duration of the spell. On a roll of 11 or higher, you vanish from your current plane of existence and appear in the Ethereal Plane (the spell fails and the casting is wasted if you were already on that plane). At the start of your next turn, and when the spell ends if you are on the Ethereal Plane, you return to an unoccupied space of your choice that you can see within 10 feet of the space you vanished from. If no unoccupied space is available within that range, you appear in the nearest unoccupied space (chosen at random if more than one space is equally near). You can dismiss this spell as an action.<br>While on the Ethereal Plane, you can see and hear the plane you originated from, which is cast in shades of gray, and you can’t see anything there more than 60 feet away. You can only affect and be affected by other creatures on the Ethereal Plane. Creatures that aren’t there can’t perceive you or interact with you, unless they have the ability to do so."
);

const callLightning = new Spell(
	'Call Lightning',
	3,
	'Conjuration',
	'1 Action',
	'120 feet',
	'V S',
	'Concentration, Up to 10 minute',
	"A storm cloud appears in the shape of a cylinder that is 10 feet tall with a 60-foot radius, centered on a point you can see 100 feet directly above you. The spell fails if you can’t see a point in the air where the storm cloud could appear (for example, if you are in a room that can’t accommodate the cloud). When you cast the spell, choose a point you can see within range. A bolt of lightning flashes down from the cloud to that point. Each creature within 5 feet of that point must make a Dexterity saving throw. A creature takes 3d10 lightning damage on a failed save, or half as much damage on a successful one. On each of your turns until the spell ends, you can use your action to call down lightning in this way again, targeting the same point or a different one. If you are outdoors in stormy conditions when you cast this spell, the spell gives you control over the existing storm instead of creating a new one. Under such conditions, the spell’s damage increases by 1d10.<br><br><strong>At Higher Levels:</strong> When you cast this spell using a spell slot of 4th level or higher level, the damage increases by 1d10 for each slot level above 3rd."
);

const clairvoyance = new Spell(
	'Clairvoyance',
	3,
	'Divination',
	'10 Minutes',
	'1 mile',
	'V S M (A focus worth at least 100 gp, either a jeweled horn for hearing or a glass eye for seeing)',
	'Concentration, Up to 10 minutes',
	'You create an invisible sensor within range in a location familiar to you (a place you have visited or seen before) or in an obvious location that is unfamiliar to you (such as behind a door, around a corner, or in a grove of trees). The sensor remains in place for the duration, and it can’t be attacked or otherwise interacted with.<br>When you cast the spell, you choose seeing or hearing. You can use the chosen sense through the sensor as if you were in its space. As your action, you can switch between seeing and hearing.<br>A creature that can see the sensor (such as a creature benefiting from see invisibility or truesight) sees a luminous, intangible orb about the size of your fist.'
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

const feignDeath = new Spell(
	'Feign Death',
	3,
	'Necromancy (ritual)',
	'1 Action',
	'Touch',
	'V S M (a pinch of graveyard dirt)',
	'1 Hour',
	"You touch a willing creature and put it into a cataleptic state that is indistinguishable from death.<br><br>For the spell’s duration, or until you use an action to touch the target and dismiss the spell, the target appears dead to all outward inspection and to spells used to determine the target’s status. The target is blinded and incapacitated, and its speed drops to 0.<br>The target has resistance to all damage except psychic damage. If the target is diseased or poisoned when you cast the spell, or becomes diseased or poisoned while under the spell’s effect, the disease and poison have no effect until the spell ends."
);

const fireball = new Spell(
	'Fireball',
	3,
	'Evocation',
	'1 Action',
	'150 feet',
	'V S M (A tiny ball of bat guano and sulfur)',
	'Instantaneous',
	"A bright streak flashes from your pointing finger to a point you choose within range and then blossoms with a low roar into an explosion of flame. Each creature in a 20-foot-radius sphere centered on that point must make a Dexterity saving throw. A target takes 8d6 fire damage on a failed save, or half as much damage on a successful one. The fire spreads around corners. It ignites flammable objects in the area that aren’t being worn or carried.<br><br><strong>At Higher Levels:</strong> When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d6 for each slot level above 3rd."
);

const glyphOfWarding = new Spell(
	'Glyph of Warding',
	3,
	'Abjuration',
	'1 hour',
	'Touch',
	'V S M (Incense and powdered diamond worth at least 200 gp, which the spell consumes)',
	'Until dispelled or triggered',
	"When you cast this spell, you inscribe a glyph that harms other creatures, either upon a surface (such as a table or a section of floor or wall) or within an object that can be closed (such as a book, a scroll, or a treasure chest) to conceal the glyph. If you choose a surface, the glyph can cover an area of the surface no larger than 10 feet in diameter. If you choose an object, that object must remain in its place; if the object is moved more than 10 feet from where you cast this spell, the glyph is broken, and the spell ends without being triggered. The glyph is nearly invisible and requires a successful Intelligence (Investigation) check against your spell save DC to be found. You decide what triggers the glyph when you cast the spell. For glyphs inscribed on a surface, the most typical triggers include touching or standing on the glyph, removing another object covering the glyph, approaching within a certain distance of the glyph, or manipulating the object on which the glyph is inscribed. For glyphs inscribed within an object, the most common triggers include opening that object, approaching within a certain distance of the object, or seeing or reading the glyph. Once a glyph is triggered, this spell ends. You can further refine the trigger so the spell activates only under certain circumstances or according to physical characteristics (such as height or weight), creature kind (for example, the ward could be set to affect aberrations or drow), or alignment. You can also set conditions for creatures that don’t trigger the glyph, such as those who say a certain password. When you inscribe the glyph, choose explosive runes or a spell glyph. Explosive Runes. When triggered, the glyph erupts with magical energy in a 20-foot-radius sphere centered on the glyph. The sphere spreads around corners. Each creature in the area must make a Dexterity saving throw. A creature takes 5d8 acid, cold, fire, lightning, or thunder damage on a failed saving throw (your choice when you create the glyph), or half as much damage on a successful one. Spell Glyph. You can store a prepared spell of 3rd level or lower in the glyph by casting it as part of creating the glyph. The spell must target a single creature or an area. The spell being stored has no immediate effect when cast in this way. When the glyph is triggered, the stored spell is cast. If the spell has a target, it targets the creature that triggered the glyph. If the spell affects an area, the area is centered on that creature. If the spell summons hostile creatures or creates harmful objects or traps, they appear as close as possible to the intruder and attack it. If the spell requires concentration, it lasts until the end of its full duration.<br><br><strong>At Higher Levels:</strong> When you cast this spell using a spell slot of 4th level or higher, the damage of an explosive runes glyph increases by 1d8 for each slot level above 3rd. If you create a spell glyph, you can store any spell of up to the same level as the slot you use for the glyph of warding."
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

const massHealingWord = new Spell(
	'Mass Healing Word',
	3,
	'Abjuration',
	'1 Bonus Action',
	'60 Feet',
	'V',
	'Instantaneous',
	"As you call out words of restoration, up to six creatures of your choice that you can see within range regain hit points equal to 1d4 + your spellcasting ability modifier. This spell has no effect on undead or constructs.<br><br><strong>At Higher Levels:</strong> When you cast this spell using a spell slot of 4th level or higher, the Healing increases by 1d4 for each slot level above 3rd."
);

const meldIntoStone = new Spell(
	'Meld Into Stone',
	3,
	'Transmutation (ritual)',
	'1 Action',
	'Touch',
	'V S',
	'8 hours',
	"You step into a stone object or surface large enough to fully contain your body, melding yourself and all the equipment you carry with the stone for the duration. Using your movement, you step into the stone at a point you can touch. Nothing of your presence remains visible or otherwise detectable by nonmagical senses.<br>While merged with the stone, you can’t see what occurs outside it, and any Wisdom (Perception) checks you make to hear sounds outside it are made with disadvantage. You remain aware of the passage of time and can cast spells on yourself while merged in the stone. You can use your movement to leave the stone where you entered it, which ends the spell. You otherwise can’t move.<br>Minor physical damage to the stone doesn’t harm you, but its partial destruction or a change in its shape (to the extent that you no longer fit within it) expels you and deals 6d6 bludgeoning damage to you. The stone’s complete destruction (or transmutation into a different substance) expels you and deals 50 bludgeoning damage to you. If expelled, you fall prone in an unoccupied space closest to where you first entered."
);

const nondetection = new Spell(
	'Nondetection',
	3,
	'Abjuration',
	'1 Action',
	'Touch',
	'V S M (A pinch of diamond dust worth 25 gp sprinkled over the target, which the spell consumes)',
	'8 Hours',
	"For the duration, you hide a target that you touch from divination magic. The target can be a willing creature or a place or an object no larger than 10 feet in any dimension. The target can’t be targeted by any divination magic or perceived through magical scrying sensors."
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

const sending = new Spell(
	'Sending',
	3,
	'Evocation',
	'1 Action',
	'Unlimited',
	'V S M (A short piece of fine copper wire)',
	'1 Round',
	"You send a short message of twenty-five words or less to a creature with which you are familiar. The creature hears the message in its mind, recognizes you as the sender if it knows you, and can answer in a like manner immediately. The spell enables creatures with Intelligence scores of at least 1 to understand the meaning of your message.<br>You can send the message across any distance and even to other planes of existence, but if the target is on a different plane than you, there is a 5 percent chance that the message doesn’t arrive."
);

const sleetStorm = new Spell(
	'Sleet Storm',
	3,
	'Conjuration',
	'1 Action',
	'150 feet',
	'V S M (A pinch of dust and a few drops of water)',
	'Concentration, Up to 1 minute',
	"Until the spell ends, freezing rain and sleet fall in a 20-foot-tall cylinder with a 40-foot radius centered on a point you choose within range. The area is heavily obscured, and exposed flames in the area are doused.<br>The ground in the area is covered with slick ice, making it difficult terrain. When a creature enters the spell’s area for the first time on a turn or starts its turn there, it must make a Dexterity saving throw. On a failed save, it falls prone.<br>If a creature is concentrating in the spell’s area, the creature must make a successful Constitution saving throw against your spell save DC or lose concentration."
);

const speakWithDead = new Spell(
	'Speak With Dead',
	3,
	'Necromancy',
	'1 Action',
	'10 Feet',
	'V S M (Burning incense)',
	'10 minutes',
	"You grant the semblance of life and intelligence to a corpse of your choice within range, allowing it to answer the questions you pose. The corpse must still have a mouth and can’t be undead. The spell fails if the corpse was the target of this spell within the last 10 days.<br>Until the spell ends, you can ask the corpse up to five questions. The corpse knows only what it knew in life, including the languages it knew. Answers are usually brief, cryptic, or repetitive, and the corpse is under no compulsion to offer a truthful answer if you are hostile to it or it recognizes you as an enemy. This spell doesn’t return the creature’s soul to its body, only its animating spirit. Thus, the corpse can’t learn new information, doesn’t comprehend anything that has happened since it died, and can’t speculate about future events."
);

const spiritGuardians = new Spell(
	'Spirit Guardians',
	3,
	'Conjuration',
	'1 Action',
	'Self (15-foot radius)',
	'V S M (A holy symbol)',
	'Concentration, Up to 10 minutes',
	"You call forth spirits to protect you. They flit around you to a distance of 15 feet for the duration. If you are good or neutral, their spectral form appears angelic or fey (your choice). If you are evil, they appear fiendish. When you cast this spell, you can designate any number of creatures you can see to be unaffected by it. An affected creature’s speed is halved in the area, and when the creature enters the area for the first time on a turn or starts its turn there, it must make a Wisdom saving throw. On a failed save, the creature takes 3d8 radiant damage (if you are good or neutral) or 3d8 necrotic damage (if you are evil). On a successful save, the creature takes half as much damage.<br><br><strong>At Higher Levels:</strong> When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d8 for each slot level above 3rd."
);

const windWall = new Spell(
	'Wind Wall',
	3,
	'Evocation',
	'1 Action',
	'120 Feet',
	'V S M (A tiny fan and a feather of exotic origin)',
	'Concentration, Up to 1 minute',
	"A wall of strong wind rises from the ground at a point you choose within range. You can make the wall up to 50 feet long, 15 feet high, and 1 foot thick. You can shape the wall in any way you choose so long as it makes one continuous path along the ground. The wall lasts for the duration.<br>When the wall appears, each creature within its area must make a Strength saving throw. A creature takes 3d8 bludgeoning damage on a failed save, or half as much damage on a successful one.<br>The strong wind keeps fog, smoke, and other gases at bay. Small or smaller flying creatures or objects can’t pass through the wall. Loose, lightweight materials brought into the wall fly upward. Arrows, bolts, and other ordinary projectiles launched at targets behind the wall are deflected upward and automatically miss. (Boulders hurled by giants or siege engines, and similar projectiles, are unaffected.) Creatures in gaseous form can’t pass through it."
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
		spellDetails(eval(triggerID));
		spellDescriptionBox.style.display = 'block';
})};

//close spell description box from within
closeSpellDesBoxTrig.addEventListener('click', () => {
	spellDescriptionBox.style.display = 'none';
})

//toggle cleric domain spell invisibility
toggleDomainSpells.addEventListener('click', () => {
	for (let x = 0; x < spellTriggers.length; x++){
		if (spellTriggers[x].classList.contains('domain-spell')){
			$(spellTriggers[x]).toggle();
		}
	}
})
