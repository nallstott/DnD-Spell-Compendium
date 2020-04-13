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
const acidSplash = new Spell(
	'Acid Splash',
	'Cantrip',
	'Conjuration',
	'1 Action',
	'60 Feet',
	'V S',
	'Instantaneous',
	'You hurl a bubble of acid. Choose one creature within range, or choose two creatures within range that are within 5 feet of each other. A target must succeed on a Dexterity saving throw or take 1d6 acid damage.'
);

const bladeWard = new Spell(
	'Blade Ward - this doesnt exist on roll20 for some reason',
	'spell level',
	'spell type',
	'casting time',
	'spell range',
	'spell components',
	'spell duration',
	'spell description'
);

const chillTouch = new Spell(
	'Chill Touch',
	'Cantrip',
	'Necromancy',
	'1 Action',
	'120 Feet',
	'V S',
	'1 Round',
	'You create a ghostly, skeletal hand in the space of a creature within range. Make a ranged spell attack against the creature to assail it with the chill of the grave. On a hit, the target takes 1d8 necrotic damage, and it can’t regain hit points until the start of your next turn. Until then, the hand clings to the target. If you hit an undead target, it also has disadvantage on attack rolls against you until the end of your next turn. This spell’s damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8).'
);

const dancingLights = new Spell(
	'Dancing Lights',
	'Cantrip',
	'Evocation',
	'1 Action',
	'120 Feet',
	'V S M (A bit of phosphorus or wychwood, or a glowworm)',
	'Up to 1 minute',
	'You create up to four torch-sized lights within range, making them appear as torches, lanterns, or glowing orbs that hover in the air for the duration. You can also combine the four lights into one glowing vaguely humanoid form of Medium size. Whichever form you choose, each light sheds dim light in a 10-foot radius. As a bonus action on your turn, you can move the lights up to 60 feet to a new spot within range. A light must be within 20 feet of another light created by this spell, and a light winks out if it exceeds the spell’s range.'
);

const fireBolt = new Spell(
	'Fire Bolt',
	'Cantrip',
	'Evocation',
	'1 Action',
	'120 Feet',
	'V S',
	'Instantaneous',
	'You hurl a mote of fire at a creature or object within range. Make a ranged spell attack against the target. On a hit, the target takes 1d10 fire damage. A flammable object hit by this spell ignites if it isn’t being worn or carried. This spell’s damage increases by 1d10 when you reach 5th level (2d10), 11th level (3d10), and 17th level (4d10).'
);

const friends = new Spell(
	'Friends - this doesnt exist on roll20 for some reason',
	'Cantrip',
	'spell type',
	'casting time',
	'spell range',
	'spell components',
	'spell duration',
	'spell description'
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

const mageHand = new Spell(
	'Mage Hand',
	'Cantrip',
	'Conjuration',
	'1 Action',
	'30 Feet',
	'V S',
	'1 minute',
	'A spectral, floating hand appears at a point you choose within range. The hand lasts for the duration or until you dismiss it as an action. The hand vanishes if it is ever more than 30 feet away from you or if you cast this spell again.<br>You can use your action to control the hand. You can use the hand to manipulate an object, open an unlocked door or container, stow or retrieve an item from an open container, or pour the contents out of a vial. You can move the hand up to 30 feet each time you use it.<br>The hand can’t attack, activate magic items, or carry more than 10 pounds.'
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

const message = new Spell(
	'Message',
	'Cantrip',
	'Transmutation',
	'1 Action',
	'120 Feet',
	'V S M (A short piece of copper wire)',
	'1 round',
	'You point your finger toward a creature within range and whisper a message. The target (and only the target) hears the message and can reply in a whisper that only you can hear.<br>You can cast this spell through solid objects if you are familiar with the target and know it is beyond the barrier. Magical silence, 1 foot of stone, 1 inch of common metal, a thin sheet of lead, or 3 feet of wood blocks the spell. The spell doesn’t have to follow a straight line and can travel freely around corners or through openings.'
); 

const minorIllusion = new Spell(
	'Minor Illusion',
	'Cantrip',
	'Illusion',
	'1 Action',
	'30 Feet',
	'S M (A bit of fleece)',
	'1 minute',
	"You create a sound or an image of an object within range that lasts for the duration. The illusion also ends if you dismiss it as an action or cast this spell again.<br>If you create a sound, its volume can range from a whisper to a scream. It can be your voice, someone else’s voice, a lion’s roar, a beating of drums, or any other sound you choose. The sound continues unabated throughout the duration, or you can make discrete sounds at different times before the spell ends.<br>If you create an image of an object—such as a chair, muddy footprints, or a small chest—it must be no larger than a 5-foot cube. The image can’t create sound, light, smell, or any other sensory effect. Physical interaction with the image reveals it to be an illusion, because things can pass through it. If a creature uses its action to examine the sound or image, the creature can determine that it is an illusion with a successful Intelligence (Investigation) check against your spell save DC. If a creature discerns the illusion for what it is, the illusion becomes faint to the creature."
);

const poisonSpray = new Spell(
	'Poison Spray',
	'Cantrip',
	'Conjuration',
	'1 Action',
	'10 Feet',
	'V S',
	'Instantaneous',
	'You extend your hand toward a creature you can see within range and project a puff of noxious gas from your palm. The creature must succeed on a Constitution saving throw or take 1d12 poison damage.'
);

const prestidigitation = new Spell(
	'Prestidigitation',
	'Cantrip',
	'Transmutation',
	'1 Action',
	'10 Feet',
	'V S',
	'Up to 1 hour',
	'This spell is a minor magical trick that novice spellcasters use for practice. You create one of the following magical effects within range:<br>You create an instantaneous, harmless sensory effect, such as a shower of sparks, a puff of wind, faint musical notes, or an odd odor.<br>You instantaneously light or snuff out a candle, a torch, or a small campfire.<br>You instantaneously clean or soil an object no larger than 1 cubic foot.<br>You chill, warm, or flavor up to 1 cubic foot of nonliving material for 1 hour.<br>You make a color, a small mark, or a symbol appear on an object or a surface for 1 hour.<br>You create a nonmagical trinket or an illusory image that can fit in your hand and that lasts until the end of your next turn.<br>If you cast this spell multiple times, you can have up to three of its non-instantaneous effects active at a time, and you can dismiss such an effect as an action.'
);

const rayOfFrost = new Spell(
	'Ray of Frost',
	'Cantrip',
	'Evocation',
	'1 Action',
	'60 Feet',
	'V S',
	'Instantaneous',
	'A frigid beam of blue-white light streaks toward a creature within range. Make a ranged spell attack against the target. On a hit, it takes 1d8 cold damage, and its speed is reduced by 10 feet until the start of your next turn.'
);

const shockingGrasp = new Spell(
	'Shocking Grasp',
	'Cantrip',
	'Evocation',
	'1 Action',
	'Touch',
	'V S',
	'Instantaneous',
	'Lightning springs from your hand to deliver a shock to a creature you try to touch. Make a melee spell attack against the target. You have advantage on the attack roll if the target is wearing armor made of metal. On a hit, the target takes 1d8 lightning damage, and it can’t take reactions until the start of its next turn.'
);

const trueStrike = new Spell(
	'True Strike',
	'Cantrip',
	'Divination',
	'1 Action',
	'30 Feet',
	'S',
	'Concentration, up to 1 round',
	"You extend your hand and point a finger at a target in range. Your magic grants you a brief insight into the target’s defenses. On your next turn, you gain advantage on your first attack roll against the target, provided that this spell hasn’t ended."
);

// first level Spells
const alarm = new Spell(
	'Alarm',
	1,
	'Abjuration (ritual)',
	'1 Minute',
	'30 Feet',
	'V S M (a tiny bell and a piece of fine silver wire)',
	'8 hours',
	"You set an alarm against unwanted intrusion. Choose a door, a window, or an area within range that is no larger than a 20-foot cube. Until the spell ends, an alarm alerts you whenever a Tiny or larger creature touches or enters the warded area. When you cast the spell, you can designate creatures that won't set off the alarm. You also choose whether the alarm is mental or audible.<br>A mental alarm alerts you with a ping in your mind if you are within 1 mile of the warded area. This ping awakens you if you are sleeping.<br>An audible alarm produces the sound of a hand bell for 10 seconds within 60 feet."
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
	'30 Feet',
	'V S',
	'1 hour',
	'You attempt to charm a humanoid you can see within range. It must make a Wisdom saving throw, and does so with advantage if you or your companions are fighting it. If it fails the saving throw, it is charmed by you until the spell ends or until you or your companions do anything harmful to it. The charmed creature regards you as a friendly acquaintance. When the spell ends, the creature knows it was charmed by you.<br><br><strong>At Higher Levels:</strong> When you cast this spell using a spell slot of 2nd level or higher, you can target one additional creature for each slot level above 1st. The creatures must be within 30 feet of each other when you target them.'
);

const chromaticOrb = new Spell(
	'Chromatic Orb - this doesnt exist on roll20 for some reason',
	1,
	'spell type',
	'casting time',
	'spell range',
	'spell components',
	'spell duration',
	'spell description'
);

const colorSpray = new Spell(
	'Color Spray',
	1,
	'Illusion',
	'1 Action',
	'Self (15-foot cone)',
	' S M (A pinch of powder or sand that is colored red, yellow, and blue)',
	'1 round',
	"A dazzling array of flashing, colored light springs from your hand. Roll 6d10; the total is how many hit points of creatures this spell can effect. Creatures in a 15-foot cone originating from you are affected in ascending order of their current hit points (ignoring unconscious creatures and creatures that can’t see). Starting with the creature that has the lowest current hit points, each creature affected by this spell is blinded until the spell ends. Subtract each creature’s hit points from the total before moving on to the creature with the next lowest hit points. A creature’s hit points must be equal to or less than the remaining total for that creature to be affected.<br><br><strong>At Higher Levels:</strong> When you cast this spell using a spell slot of 2nd level or higher, roll an additional 2d10 for each slot level above 1st."
);

const comprehendLanguages = new Spell(
	'Comprehend Languages',
	1,
	'Divination (ritual)',
	'1 Action',
	'Self',
	'V S M (A pinch of soot and salt)',
	'1 hour',
	"For the duration, you understand the literal meaning of any spoken language that you hear. You also understand any written language that you see, but you must be touching the surface on which the words are written. It takes about 1 minute to read one page of text. This spell doesn’t decode secret messages in a text or a glyph, such as an arcane sigil, that isn’t part of a written language." 
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

const disguiseSelf = new Spell(
	'Disguise Self',
	1,
	'Illusion',
	'1 Action',
	'Self',
	'V S',
	'1 hour',
	'You make yourself—including your clothing, armor, weapons, and other belongings on your person—look different until the spell ends or until you use your action to dismiss it. You can seem 1 foot shorter or taller and can appear thin, fat, or in between. You can’t change your body type, so you must adopt a form that has the same basic arrangement of limbs. Otherwise, the extent of the illusion is up to you.<br>The changes wrought by this spell fail to hold up to physical inspection. For example, if you use this spell to add a hat to your outfit, objects pass through the hat, and anyone who touches it would feel nothing or would feel your head and hair. If you use this spell to appear thinner than you are, the hand of someone who reaches out to touch you would bump into you while it was seemingly still in midair.<br>To discern that you are disguised, a creature can use its action to inspect your appearance and must succeed on an Intelligence (Investigation) check against your spell save DC.'
);

const expeditiousRetreat = new Spell(
	'Expeditious Retreat',
	1,
	'Transmutation',
	'1 Bonus Action',
	'Self',
	'V S',
	'Concentration, up to 10 minutes',
	'This spell allows you to move at an incredible pace. When you cast this spell, and then as a bonus action on each of your turns until the spell ends, you can take the Dash action.'
);

const falseLife = new Spell(
	'False Life',
	1,
	'Necromancy',
	'1 Action',
	'Self',
	'V S M (A small amount of alcohol or distilled spirits)',
	'1 hour',
	'Bolstering yourself with a necromantic facsimile of life, you gain 1d4 + 4 temporary hit points for the duration.<br><br><strong>At Higher Levels:</strong> When you cast this spell using a spell slot of 2nd level or higher, you gain 5 additional Temporary Hit Points for each slot level above 1st.'
);

const featherFall = new Spell(
	'Feather Fall',
	1,
	'Transmutation',
	'1 reaction, which you take when you or a creature within 60 feet of you falls',
	'60 Feet',
	'V M (A small feather or piece of down)',
	'1 minute',
	'Choose up to five falling creatures within range. A falling creature’s rate of descent slows to 60 feet per round until the spell ends. If the creature lands before the spell ends, it takes no falling damage and can land on its feet, and the spell ends for that creature.'
);

const findFamiliar = new Spell(
	'Find Familiar',
	1,
	'Conjuration (ritual)',
	'1 Hour',
	'10 Feet',
	'V S M (10 gp worth of charcoal, incense, and herbs that must be consumed by fire in a brass brazier)',
	'Instantaneous',
	"You gain the service of a familiar, a spirit that takes an animal form you choose: bat, cat, crab, frog (toad), hawk, lizard, octopus, owl, poisonous snake, fish (quipper), rat, raven, sea horse, spider, or weasel. Appearing in an unoccupied space within range, the familiar has the statistics of the chosen form, though it is a celestial, fey, or fiend (your choice) instead of a beast.<br>Your familiar acts independently of you, but it always obeys your commands. In combat, it rolls its own initiative and acts on its own turn. A familiar can’t attack, but it can take other actions as normal.<br>When the familiar drops to 0 hit points, it disappears, leaving behind no physical form. It reappears after you cast this spell again.<br>While your familiar is within 100 feet of you, you can communicate with it telepathically. Additionally, as an action, you can see through your familiar’s eyes and hear what it hears until the start of your next turn, gaining the benefits of any special senses that the familiar has. During this time, you are deaf and blind with regard to your own senses.<br>As an action, you can temporarily dismiss your familiar. It disappears into a pocket dimension where it awaits your summons. Alternatively, you can dismiss it forever. As an action while it is temporarily dismissed, you can cause it to reappear in any unoccupied space within 30 feet of you.<br>You can’t have more than one familiar at a time. If you cast this spell while you already have a familiar, you instead cause it to adopt a new form. Choose one of the forms from the above list. Your familiar transforms into the chosen creature.<br>Finally, when you cast a spell with a range of touch, your familiar can deliver the spell as if it had cast the spell. Your familiar must be within 100 feet of you, and it must use its reaction to deliver the spell when you cast it. If the spell requires an attack roll, you use your attack modifier for the roll."
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

const grease = new Spell(
	'Grease',
	1,
	'Conjuration',
	'1 Action',
	'60 Feet',
	'V S M (A bit of pork rind or butter)',
	'1 minute',
	'Slick grease covers the ground in a 10-foot square centered on a point within range and turns it into difficult terrain for the duration.<br>When the grease appears, each creature standing in its area must succeed on a Dexterity saving throw or fall prone. A creature that enters the area or ends its turn there must also succeed on a Dexterity saving throw or fall prone.'
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

const illusoryScript = new Spell(
	'Illusory Script',
	1,
	'Illusion (ritual)',
	'1 Minute',
	'Touch',
	'S M (A lead-based ink worth at least 10 gp, which the spell consumes)',
	'10 days',
	'You write on parchment, paper, or some other suitable writing material and imbue it with a potent illusion that lasts for the duration.<br>To you and any creatures you designate when you cast the spell, the writing appears normal, written in your hand, and conveys whatever meaning you intended when you wrote the text. To all others, the writing appears as if it were written in an unknown or magical script that is unintelligible. Alternatively, you can cause the writing to appear to be an entirely different message, written in a different hand and language, though the language must be one you know.<br>Should the spell be dispelled, the original script and the illusion both disappear.<br>A creature with truesight can read the hidden message.'
);

const jump = new Spell(
	'Jump',
	1,
	'Transmutation',
	'1 Action',
	'Touch',
	"V S M (A grasshopper's hind leg)",
	'1 minute',
	"You touch a creature. The creature’s jump distance is tripled until the spell ends."
);

const longstrider = new Spell(
	'Longstrider',
	1,
	'Transmutation',
	'1 Action',
	'Touch',
	'V S M (A pinch of dirt)',
	'1 hour',
	"You touch a creature. The target’s speed increases by 10 feet until the spell ends.<br><br><strong>At Higher Levels:</strong> When you cast this spell using a spell slot of 2nd level or higher, you can target one additional creature for each slot level above 1st."
);

const mageArmor = new Spell(
	'Mage Armor',
	1,
	'Abjuration',
	'1 Action',
	'Touch',
	'V S M (A piece of cured leather)',
	'8 hours',
	"You touch a willing creature who isn’t wearing armor, and a protective magical force surrounds it until the spell ends. The target’s base AC becomes 13 + its Dexterity modifier. The spell ends if the target dons armor or if you dismiss the spell as an action."
);

const magicMissile = new Spell(
	'Magic Missile',
	1,
	'Evocation',
	'1 Action',
	'120 Feet',
	'V S',
	'Instantaneous',
	'You create three glowing darts of magical force. Each dart hits a creature of your choice that you can see within range. A dart deals 1d4 + 1 force damage to its target. The darts all strike simultaneously, and you can direct them to hit one creature or several.<br><br><strong>At Higher Levels:</strong> When you cast this spell using a spell slot of 2nd level or higher, the spell creates one more dart for each slot above 1st.'
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

const rayOfSickness = new Spell(
	'Ray of Sickness - this doesnt exist on roll20 for some reason',
	1,
	'spell type',
	'casting time',
	'spell range',
	'spell components',
	'spell duration',
	'spell description'
);

const shield = new Spell(
	'Shield',
	1,
	'Abjuration',
	'1 reaction, which you take when you are hit by an attack or targeted by the magic missile spell',
	'Self',
	'V S',
	'1 round',
	'An invisible barrier of magical force appears and protects you. Until the start of your next turn, you have a +5 bonus to AC, including against the triggering attack, and you take no damage from magic missile.'
);

const silentImage = new Spell(
	'Silent Image',
	1,
	'Illusion',
	'1 Action',
	'60 Feet',
	'V S M (A bit of fleece)',
	'Concentration, up to 10 minutes',
	'You create the image of an object, a creature, or some other visible phenomenon that is no larger than a 15-foot cube. The image appears at a spot within range and lasts for the duration. The image is purely visual; it isn’t accompanied by sound, smell, or other sensory effects.<br>You can use your action to cause the image to move to any spot within range. As the image changes location, you can alter its appearance so that its movements appear natural for the image. For example, if you create an image of a creature and move it, you can alter the image so that it appears to be walking.<br>Physical interaction with the image reveals it to be an illusion, because things can pass through it. A creature that uses its action to examine the image can determine that it is an illusion with a successful Intelligence (Investigation) check against your spell save DC. If a creature discerns the illusion for what it is, the creature can see through the image.'
);

const sleep = new Spell(
	'Sleep',
	1,
	'Enchantment',
	'1 Action',
	'90 Feet',
	'V S M (A pinch of fine sand, rose petals, or a cricket)',
	'1 minute',
	"This spell sends creatures into a magical slumber. Roll 5d8; the total is how many hit points of creatures this spell can affect. Creatures within 20 feet of a point you choose within range are affected in ascending order of their current hit points (ignoring unconscious creatures). Starting with the creature that has the lowest current hit points, each creature affected by this spell falls unconscious until the spell ends, the sleeper takes damage, or someone uses an action to shake or slap the sleeper awake. Subtract each creature’s hit points from the total before moving on to the creature with the next lowest hit points. A creature’s hit points must be equal to or less than the remaining total for that creature to be affected. Undead and creatures immune to being charmed aren’t affected by this spell.<br><br><strong>At Higher Levels:</strong>When you cast this spell using a spell slot of 2nd level or higher, roll an additional 2d8 for each slot level above 1st."
);

const tashasHideousLaughter = new Spell(
	"Tasha's Hideous Laughter",
	1,
	'Enchantment',
	'1 Action',
	'30 Feet',
	'V S M (Tiny tarts and a feather that is waved in the air)',
	'Concentration, up to 1 minute',
	"A creature of your choice that you can see within range perceives everything as hilariously funny and falls into fits of laughter if this spell affects it. The target must succeed on a Wisdom saving throw or fall prone, becoming incapacitated and unable to stand up for the duration. A creature with an Intelligence score of 4 or less isn’t affected.<br>At the end of each of its turns, and each time it takes damage, the target can make another Wisdom saving throw. The target has advantage on the saving throw if it’s triggered by damage. On a success, the spell ends."
);

const tensersFloatingDisk = new Spell(
	"Tenser's Floating Disk",
	1,
	'Conjuration (ritual)',
	'1 Action',
	'30 Feet',
	'V S M (A drop of mercury)',
	'1 hour',
	"This spell creates a circular, horizontal plane of force, 3 feet in diameter and 1 inch thick, that floats 3 feet above the ground in an unoccupied space of your choice that you can see within range. The disk remains for the duration, and can hold up to 500 pounds. If more weight is placed on it, the spell ends, and everything on the disk falls to the ground.<br>The disk is immobile while you are within 20 feet of it. If you move more than 20 feet away from it, the disk follows you so that it remains within 20 feet of you. It can move across uneven terrain, up or down stairs, slopes and the like, but it can’t cross an elevation change of 10 feet or more. For example, the disk can’t move across a 10-foot-deep pit, nor could it leave such a pit if it was created at the bottom.<br>If you move more than 100 feet from the disk (typically because it can’t move around an obstacle to follow you), the spell ends."
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

const unseenServant = new Spell(
	'Unseen Servant',
	1,
	'Conjuration (ritual)',
	'1 Action',
	'60 Feet',
	'V S M (A piece of string and a bit of wood)',
	'1 hour',
	"This spell creates an invisible, mindless, shapeless force that performs simple tasks at your command until the spell ends. The servant springs into existence in an unoccupied space on the ground within range. It has AC 10, 1 hit point, and a Strength of 2, and it can’t attack. If it drops to 0 hit points, the spell ends.<br>Once on each of your turns as a bonus action, you can mentally command the servant to move up to 15 feet and interact with an object. The servant can perform simple tasks that a human servant could do, such as fetching things, cleaning, mending, folding clothes, lighting fires, serving food, and pouring wine. Once you give the command, the servant performs the task to the best of its ability until it completes the task, then waits for your next command.<br>If you command the servant to perform a task that would move it more than 60 feet away from you, the spell ends."
);

const witchBolt = new Spell(
	'Witch Bolt - this doesnt exist on roll20 for some reason',
	1,
	'spell type',
	'casting time',
	'spell range',
	'spell components',
	'spell duration',
	'spell description'
);

// level 2 Spells
const alterSelf = new Spell(
	'Alter Self',
	2,
	'Transmutation',
	'1 Action',
	'Self',
	'V S',
	'Concentration, up to 1 hour',
	"You assume a different form. When you cast the spell, choose one of the following options, the effects of which last for the duration of the spell. While the spell lasts, you can end one option as an action to gain the benefits of a different one.<br>Aquatic Adaptation. You adapt your body to an aquatic environment, sprouting gills and growing webbing between your fingers. You can breathe underwater and gain a swimming speed equal to your walking speed.<br>Change Appearance. You transform your appearance. You decide what you look like, including your height, weight, facial features, sound of your voice, hair length, coloration, and distinguishing characteristics, if any. You can make yourself appear as a member of another race, though none of your statistics change. You also can’t appear as a creature of a different size than you, and your basic shape stays the same; if you’re bipedal, you can’t use this spell to become quadrupedal, for instance. At any time for the duration of the spell, you can use your action to change your appearance in this way again.<br>Natural Weapons. You grow claws, fangs, spines, horns, or a different natural weapon of your choice. Your unarmed strikes deal 1d6 bludgeoning, piercing, or slashing damage, as appropriate to the natural weapon you chose, and you are proficient with your unarmed strikes. Finally, the natural weapon is magic and you have a +1 bonus to the attack and damage rolls you make using it."
);

const arcaneLock = new Spell(
	'Arcane Lock',
	2,
	'Abjuration',
	'1 Action',
	'Touch',
	'V S M (Gold dust worth at least 25 gp, which the spell consumes)',
	'Until dispelled',
	'You touch a closed door, window, gate, chest, or other entryway, and it becomes locked for the duration. You and the creatures you designate when you cast this spell can open the object normally. You can also set a password that, when spoken within 5 feet of the object, suppresses this spell for 1 minute. Otherwise, it is impassable until it is broken or the spell is dispelled or suppressed. Casting knock on the object suppresses arcane lock for 10 minutes.<br>While affected by this spell, the object is more difficult to break or force open; the DC to break it or pick any locks on it increases by 10.'
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

const blur = new Spell(
	'Blur',
	2,
	'Illusion',
	'1 Action',
	'Self',
	'V',
	'Concentration, up to 1 minute',
	"Your body becomes blurred, shifting and wavering to all who can see you. For the duration, any creature has disadvantage on attack rolls against you. An attacker is immune to this effect if it doesn’t rely on sight, as with blindsight, or can see through illusions, as with truesight."
);

const cloudOfDaggers = new Spell(
	'Cloud of Daggers - this doesnt exist on roll20 for some reason',
	2,
	'spell type',
	'casting time',
	'spell range',
	'spell components',
	'spell duration',
	'spell description'
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

const crownOfMadness = new Spell(
	'Crown of Madness - this doesnt exist on roll20 for some reason',
	2,
	'spell type',
	'casting time',
	'spell range',
	'spell components',
	'spell duration',
	'spell description'
);

const darkness = new Spell(
	'Darkness',
	2,
	'Evocation',
	'1 Action',
	'60 Feet',
	'V M (Bat fur and a drop of pitch or piece of coal)',
	'Concentration, up to 10 minutes',
	"Magical darkness spreads from a point you choose within range to fill a 15-foot-radius sphere for the duration. The darkness spreads around corners. A creature with darkvision can’t see through this darkness, and nonmagical light can’t illuminate it.<br>If the point you choose is on an object you are holding or one that isn’t being worn or carried, the darkness emanates from the object and moves with it. Completely covering the source of the darkness with an opaque object, such as a bowl or a helm, blocks the darkness.<br>If any of this spell’s area overlaps with an area of light created by a spell of 2nd level or lower, the spell that created the light is dispelled."
);

const darkvision = new Spell(
	'Darkvision',
	2,
	'Transmutation',
	'1 Action',
	'Touch',
	'V S M (Either a pinch of dried carrot or an agate)',
	'8 hours',
	'You touch a willing creature to grant it the ability to see in the dark. For the duration, that creature has darkvision out to a range of 60 feet.'
);

const detectThoughts = new Spell(
	'Detect Thoughts',
	2,
	'Divination',
	'1 Action',
	'Self',
	'V S M (A copper piece)',
	'Concentration, up to 1 minute',
	"For the duration, you can read the thoughts of certain creatures. When you cast the spell and as your action on each turn until the spell ends, you can focus your mind on any one creature that you can see within 30 feet of you. If the creature you choose has an Intelligence of 3 or lower or doesn’t speak any language, the creature is unaffected.<br>You initially learn the surface thoughts of the creature—what is most on its mind in that moment. As an action, you can either shift your attention to another creature’s thoughts or attempt to probe deeper into the same creature’s mind. If you probe deeper, the target must make a Wisdom saving throw. If it fails, you gain insight into its reasoning (if any), its emotional state, and something that looms large in its mind (such as something it worries over, loves, or hates). If it succeeds, the spell ends. Either way, the target knows that you are probing into its mind, and unless you shift your attention to another creature’s thoughts, the creature can use its action on its turn to make an Intelligence check contested by your Intelligence check; if it succeeds, the spell ends.<br>Questions verbally directed at the target creature naturally shape the course of its thoughts, so this spell is particularly effective as part of an interrogation.<br>You can also use this spell to detect the presence of thinking creatures you can’t see. When you cast the spell or as your action during the duration, you can search for thoughts within 30 feet of you. The spell can penetrate barriers, but 2 feet of rock, 2 inches of any metal other than lead, or a thin sheet of lead blocks you. You can’t detect a creature with an Intelligence of 3 or lower or one that doesn’t speak any language.<br>Once you detect the presence of a creature in this way, you can read its thoughts for the rest of the duration as described above, even if you can’t see it, but it must still be within range."
);

const enlargeReduce = new Spell(
	'Enlarge/Reduce - so this does exist on roll20 but gets a page not found issue',
	2,
	'spell type',
	'casting time',
	'spell range',
	'spell components',
	'spell duration',
	'spell description'
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

const invisibility = new Spell(
	'Invisibility',
	2,
	'Illusion',
	'1 Action',
	'Touch',
	'V S M (An eyelash encased in gum arabic)',
	'Concentration, up to 1 hour',
	"A creature you touch becomes invisible until the spell ends. Anything the target is wearing or carrying is invisible as long as it is on the target’s person. The spell ends for a target that attacks or casts a spell.<br><br><strong>At Higher Levels:</strong> When you cast this spell using a spell slot of 3rd level or higher, you can target one additional creature for each slot level above 2nd."
);

const knock = new Spell(
	'Knock',
	2,
	'Transmutation',
	'1 Action',
	'60 Feet',
	'V',
	'Instantaneous',
	'Choose an object that you can see within range. The object can be a door, a box, a chest, a set of manacles, a padlock, or another object that contains a mundane or magical means that prevents access.<br>A target that is held shut by a mundane lock or that is stuck or barred becomes unlocked, unstuck, or unbarred. If the object has multiple locks, only one of them is unlocked.<br>If you choose a target that is held shut with arcane lock, that spell is suppressed for 10 minutes, during which time the target can be opened and shut normally.<br>When you cast the spell, a loud knock, audible from as far away as 300 feet, emanates from the target object.'
);

const levitate = new Spell(
	'Levitate',
	2,
	'Transmutation',
	'1 Action',
	'60 Feet',
	'V S M (Either a small leather loop or a piece of golden wire bent into a cup shape with a long shank on one end)',
	'Concentration, up to 10 minutes',
	"One creature or object of your choice that you can see within range rises vertically, up to 20 feet, and remains suspended there for the duration. The spell can levitate a target that weighs up to 500 pounds. An unwilling creature that succeeds on a Constitution saving throw is unaffected.<br>The target can move only by pushing or pulling against a fixed object or surface within reach (such as a wall or a ceiling), which allows it to move as if it were climbing. You can change the target’s altitude by up to 20 feet in either direction on your turn. If you are the target, you can move up or down as part of your move. Otherwise, you can use your action to move the target, which must remain within the spell’s range.<br>When the spell ends, the target floats gently to the ground if it is still aloft."
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

const magicMouth = new Spell(
	'Magic Mouth',
	2,
	'Illusion (ritual)',
	'1 Minute',
	'30 Feet',
	'V S M (A small bit of honeycomb and jade dust worth at least 10 gp, which the spell consumes)',
	'Until dispelled',
	"You implant a message within an object in range, a message that is uttered when a trigger condition is met. Choose an object that you can see and that isn’t being worn or carried by another creature. Then speak the message, which must be 25 words or less, though it can be delivered over as long as 10 minutes. Finally, determine the circumstance that will trigger the spell to deliver your message.<br>When that circumstance occurs, a magical mouth appears on the object and recites the message in your voice and at the same volume you spoke. If the object you chose has a mouth or something that looks like a mouth (for example, the mouth of a statue), the magical mouth appears there so that the words appear to come from the object’s mouth. When you cast this spell, you can have the spell end after it delivers its message, or it can remain and repeat its message whenever the trigger occurs.<br>The triggering circumstance can be as general or as detailed as you like, though it must be based on visual or audible conditions that occur within 30 feet of the object. For example, you could instruct the mouth to speak when any creature moves within 30 feet of the object or when a silver bell rings within 30 feet of it."
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

const melfsAcidArrow = new Spell(
	"Melf's Acid Arrow",
	2,
	'Evocation',
	'1 Action',
	'90 Feet',
	"V S M (Powdered rhubarb leaf and an adder's stomach)",
	'Instantaneous',
	'A shimmering green arrow streaks toward a target within range and bursts in a spray of acid. Make a ranged spell attack against the target. On a hit, the target takes 4d4 acid damage immediately and 2d4 acid damage at the end of its next turn. On a miss, the arrow splashes the target with acid for half as much of the initial damage and no damage at the end of its next turn.<br><br><strong>At Higher Levels:</strong> When you cast this spell using a spell slot of 3rd level or higher, the damage (both initial and later) increases by 1d4 for each slot level above 2nd.'
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

const nystulsMagicAura = new Spell(
	"Nystul's Magic Aura - roll20 only has arcanist's magic aura, and I'm not sure if that's the same thing or not, so for now I'm leaving this blank.",
	2,
	'spell type',
	'casting time',
	'spell range',
	'spell components',
	'spell duration',
	'spell description'
);

const phantasmalForce = new Spell(
	"Phantasmal Force - roll20 only has phantasmal killer, and I'm not sure if that's the same thing or not, so for now I'm leaving this blank.",
	2,
	'spell type',
	'casting time',
	'spell range',
	'spell components',
	'spell duration',
	'spell description'
);

const rayOfEnfeeblement = new Spell(
	'Ray of Enfeeblement',
	2,
	'Necromancy',
	'1 Action',
	'60 Feet',
	'V S',
	'Concentration, up to 1 minute',
	"A black beam of enervating energy springs from your finger toward a creature within range. Make a ranged spell attack against the target. On a hit, the target deals only half damage with weapon attacks that use Strength until the spell ends.<br>At the end of each of the target’s turns, it can make a Constitution saving throw against the spell. On a success, the spell ends."
);

const ropeTrick = new Spell(
	'Rope Trick',
	2,
	'Transmutation',
	'1 Action',
	'Touch',
	'V S M (Powdered corn extract and a twisted loop of parchment)',
	'1 hour',
	"You touch a length of rope that is up to 60 feet long. One end of the rope then rises into the air until the whole rope hangs perpendicular to the ground. At the upper end of the rope, an invisible entrance opens to an extradimensional space that lasts until the spell ends.<br>The extradimensional space can be reached by climbing to the top of the rope. The space can hold as many as eight Medium or smaller creatures. The rope can be pulled into the space, making the rope disappear from view outside the space.<br>Attacks and spells can’t cross through the entrance into or out of the extradimensional space, but those inside can see out of it as if through a 3-foot-by-5-foot window centered on the rope.<br>Anything inside the extradimensional space drops out when the spell ends."
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

const seeInvisibility = new Spell(
	'See Invisibility',
	2,
	'Divination',
	'1 Action',
	'Self',
	'V S M (A pinch of talc and a small sprinkling of powdered silver)',
	'1 hour',
	'For the duration, you see invisible creatures and objects as if they were visible, and you can see into the Ethereal Plane. Ethereal creatures and objects appear ghostly and translucent.'
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

const spiderClimb = new Spell(
	'Spider Climb',
	2,
	'Transmutation',
	'1 Action',
	'Touch',
	'V S M (A drop of bitumen and a spider)',
	'Concentration, up to 1 hour',
	'Until the spell ends, one willing creature you touch gains the ability to move up, down, and across vertical surfaces and upside down along ceilings, while leaving its hands free. The target also gains a climbing speed equal to its walking speed.'
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

const web = new Spell(
	'Web',
	2,
	'Conjuration',
	'1 Action',
	'60 Feet',
	'V S M (A bit of spiderweb)',
	'Concentration, up to 1 hour',
	"You conjure a mass of thick, sticky webbing at a point of your choice within range. The webs fill a 20-foot cube from that point for the duration. The webs are difficult terrain and lightly obscure their area.<br>If the webs aren’t anchored between two solid masses (such as walls or trees) or layered across a floor, wall, or ceiling, the conjured web collapses on itself, and the spell ends at the start of your next turn. Webs layered over a flat surface have a depth of 5 feet.<br>Each creature that starts its turn in the webs or that enters them during its turn must make a Dexterity saving throw. On a failed save, the creature is restrained as long as it remains in the webs or until it breaks free.<br>A creature restrained by the webs can use its action to make a Strength check against your spell save DC. If it succeeds, it is no longer restrained.<br>The webs are flammable. Any 5-foot cube of webs exposed to fire burns away in 1 round, dealing 2d4 fire damage to any creature that starts its turn in the fire."
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

const counterspell = new Spell(
	'Counterspell',
	3,
	'Abjuration',
	'1 reaction, which you take when you see a creature within 60 feet of you casting a spell',
	'60 Feet',
	'S',
	'Instantaneous',
	"You attempt to interrupt a creature in the process of casting a spell. If the creature is casting a spell of 3rd level or lower, its spell fails and has no effect. If it is casting a spell of 4th level or higher, make an ability check using your spellcasting ability. The DC equals 10 + the spell’s level. On a success, the creature’s spell fails and has no effect.<br><br><strong>At Higher Levels:</strong> When you cast this spell using a spell slot of 4th level or higher, the interrupted spell has no effect if its level is less than or equal to the level of the spell slot you used."
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

const fear = new Spell(
	'Fear',
	3,
	'Illusion',
	'1 Action',
	'Self (30-foot radius)',
	'V S M (A white feather or the heart of a hen)',
	'Concentration, up to 1 minute',
	"You project a phantasmal image of a creature’s worst fears. Each creature in a 30-foot cone must succeed on a Wisdom saving throw or drop whatever it is holding and become frightened for the duration.<br>While frightened by this spell, a creature must take the Dash action and move away from you by the safest available route on each of its turns, unless there is nowhere to move. If the creature ends its turn in a location where it doesn’t have line of sight to you, the creature can make a Wisdom saving throw. On a successful save, the spell ends for that creature."
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

const fly = new Spell(
	'Fly',
	3,
	'Transmutation',
	'1 Action',
	'Touch',
	'V S M (A wing feather from any bird)',
	'Concentration, up to 10 minutes',
	'You touch a willing creature. The target gains a flying speed of 60 feet for the duration. When the spell ends, the target falls if it is still aloft, unless it can stop the fall.<br><br><strong>At Higher Levels:</strong> When you cast this spell using a spell slot of 4th level or higher, you can target one additional creature for each slot level above 3rd.'
);

const gaseousForm = new Spell(
	'Gaseous Form',
	3,
	'Transmutation',
	'1 Action',
	'Touch',
	'V S M (A bit of gauze and a wisp of smoke)',
	'Concentration, up to 1 hour',
	"You transform a willing creature you touch, along with everything it’s wearing and carrying, into a misty cloud for the duration. The spell ends if the creature drops to 0 hit points. An incorporeal creature isn’t affected.<br>While in this form, the target’s only method of movement is a flying speed of 10 feet. The target can enter and occupy the space of another creature. The target has resistance to nonmagical damage, and it has advantage on Strength, Dexterity, and Constitution saving throws. The target can pass through small holes, narrow openings, and even mere cracks, though it treats liquids as though they were solid surfaces. The target can’t fall and remains hovering in the air even when stunned or otherwise incapacitated.<br>While in the form of a misty cloud, the target can’t talk or manipulate objects, and any objects it was carrying or holding can’t be dropped, used, or otherwise interacted with. The target can’t attack or cast spells."
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

const hypnoticPattern = new Spell(
	'Hypnotic Pattern',
	3,
	'Illusion',
	'1 Action',
	'120 Feet',
	'S M (A glowing stick of incense or a crystal vial filled with phosphorescent material)',
	'Concentration, up to 1 minute',
	'You create a twisting pattern of colors that weaves through the air inside a 30-foot cube within range. The pattern appears for a moment and vanishes. Each creature in the area who sees the pattern must make a Wisdom saving throw. On a failed save, the creature becomes charmed for the duration. While charmed by this spell, the creature is incapacitated and has a speed of 0.<br>The spell ends for an affected creature if it takes any damage or if someone else uses an action to shake the creature out of its stupor.'
);

const leomundsTinyHut = new Spell(
	"Leomund's Tiny Hut",
	3,
	'Evocation (ritual)',
	'1 Minute',
	'Self (10-foot-radius hemisphere)',
	'V S M (A small crystal bead)',
	'8 hours',
	"A 10-foot-radius immobile dome of force springs into existence around and above you and remains stationary for the duration. The spell ends if you leave its area.<br>Nine creatures of Medium size or smaller can fit inside the dome with you. The spell fails if its area includes a larger creature or more than nine creatures. Creatures and objects within the dome when you cast this spell can move through it freely. All other creatures and objects are barred from passing through it. Spells and other magical effects can’t extend through the dome or be cast through it. The atmosphere inside the space is comfortable and dry, regardless of the weather outside.<br>Until the spell ends, you can command the interior to become dimly lit or dark. The dome is opaque from the outside, of any color you choose, but it is transparent from the inside."
);

const lightningBolt = new Spell(
	'Lightning Bolt',
	3,
	'Evocation',
	'1 Action',
	'Self (100-foot line)',
	'V S M (A bit of fur and a rod of amber, crystal, or glass)',
	'Instantaneous',
	'A stroke of lightning forming a line 100 feet long and 5 feet wide blasts out from you in a direction you choose. Each creature in the line must make a Dexterity saving throw. A creature takes 8d6 lightning damage on a failed save, or half as much damage on a successful one. The lightning ignites flammable objects in the area that aren’t being worn or carried.<br><br><strong>At Higher Levels:</strong> When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d6 for each slot above 3rd.'
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

const majorImage = new Spell(
	'Major Image',
	3,
	'Illusion',
	'1 Action',
	'120 Feet',
	'V S M (A bit of fleece)',
	'Concentration, up to 10 minutes',
	"You create the image of an object, a creature, or some other visible phenomenon that is no larger than a 20-foot cube. The image appears at a spot that you can see within range and lasts for the duration. It seems completely real, including sounds, smells, and temperature appropriate to the thing depicted. You can’t create sufficient heat or cold to cause damage, a sound loud enough to deal thunder damage or deafen a creature, or a smell that might sicken a creature (like a troglodyte’s stench). As long as you are within range of the illusion, you can use your action to cause the image to move to any other spot within range. As the image changes location, you can alter its appearance so that its movements appear natural for the image. For example, if you create an image of a creature and move it, you can alter the image so that it appears to be walking. Similarly, you can cause the illusion to make different sounds at different times, even making it carry on a conversation, for example. Physical interaction with the image reveals it to be an illusion, because things can pass through it. A creature that uses its action to examine the image can determine that it is an illusion with a successful Intelligence (Investigation) check against your spell save DC. If a creature discerns the illusion for what it is, the creature can see through the image, and its other sensory qualities become faint to the creature.<br><br><strong>At Higher Levels:</strong> When you cast this spell using a spell slot of 6th level or higher, the spell lasts until dispelled, without requiring your Concentration."
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

const phantomSteed = new Spell(
	'Phantom Steed',
	3,
	'Illusion (ritual)',
	'1 Minute',
	'30 Feet',
	'V S',
	'1 hour',
	"A Large quasi-real, horselike creature appears on the ground in an unoccupied space of your choice within range. You decide the creature’s appearance, but it is equipped with a saddle, bit, and bridle. Any of the equipment created by the spell vanishes in a puff of smoke if it is carried more than 10 feet away from the steed.<br>For the duration, you or a creature you choose can ride the steed. The creature uses the statistics for a riding horse, except it has a speed of 100 feet and can travel 10 miles in an hour, or 13 miles at a fast pace. When the spell ends, the steed gradually fades, giving the rider 1 minute to dismount. The spell ends if you use an action to dismiss it or if the steed takes any damage."
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

const slow = new Spell(
	'Slow',
	3,
	'Transmutation',
	'1 Action',
	'120 Feet',
	'V S M (A drop of molasses)',
	'Concentration, up to 1 minute',
	"You alter time around up to six creatures of your choice in a 40-foot cube within range. Each target must succeed on a Wisdom saving throw or be affected by this spell for the duration.<br>An affected target’s speed is halved, it takes a −2 penalty to AC and Dexterity saving throws, and it can’t use reactions. On its turn, it can use either an action or a bonus action, not both. Regardless of the creature’s abilities or magic items, it can’t make more than one melee or ranged attack during its turn.<br>If the creature attempts to cast a spell with a casting time of 1 action, roll a d20. On an 11 or higher, the spell doesn’t take effect until the creature’s next turn, and the creature must use its action on that turn to complete the spell. If it can’t, the spell is wasted.<br>A creature affected by this spell makes another Wisdom saving throw at the end of its turn. On a successful save, the effect ends for it."
);

const stinkingCloud = new Spell(
	'Stinking Cloud',
	3,
	'Conjuration',
	'1 Action',
	'90 Feet',
	'V S M (A rotten egg or several skunk cabbage leaves)',
	'Concentration, up to 1 minute',
	"You create a 20-foot-radius sphere of yellow, nauseating gas centered on a point within range. The cloud spreads around corners, and its area is heavily obscured. The cloud lingers in the air for the duration.<br>Each creature that is completely within the cloud at the start of its turn must make a Constitution saving throw against poison. On a failed save, the creature spends its action that turn retching and reeling. Creatures that don’t need to breathe or are immune to poison automatically succeed on this saving throw.<br>A moderate wind (at least 10 miles per hour) disperses the cloud after 4 rounds. A strong wind (at least 20 miles per hour) disperses it after 1 round."
);

const tounges = new Spell(
	'Tounges - this doesnt exist on roll20 for some reason',
	3,
	'spell type',
	'casting time',
	'spell range',
	'spell components',
	'spell duration',
	'spell description'
);

const vampiricTouch = new Spell(
	'Vampiric Touch',
	3,
	'Necromancy',
	'1 Action',
	'Self',
	'V S',
	'Concentration, up to 1 minute',
	'The touch of your shadow-wreathed hand can siphon life force from others to heal your wounds. Make a melee spell attack against a creature within your reach. On a hit, the target takes 3d6 necrotic damage, and you regain hit points equal to half the amount of necrotic damage dealt. Until the spell ends, you can make the attack again on each of your turns as an action.<br><br><strong>At Higher Levels:</strong> When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d6 for each slot level above 3rd.'
);

const waterBreathing = new Spell(
	'Water Breathing',
	3,
	'Transmutation (ritual)',
	'1 Action',
	'30 Feet',
	'V S M (A short reed or piece of straw)',
	'24 hours',
	'This spell grants up to ten willing creatures you can see within range the ability to breathe underwater until the spell ends. Affected creatures also retain their normal mode of respiration.'
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
