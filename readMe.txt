How to update this document to match your spells
*******************

!Important!do not edit the Spell class. If you have an essential feature you'd like to add to each spell, add it to the individual spell object after it's instantiated. (i.e. firebal['Is cool?'] = 'Hell yeah!'). Then let let me know to add it to the HTML.

In all situations, refer to the cleric.js file as a reference. Only edit spells, and leave the Spell class, event listeners, and variable declaration with regard to the DOM alone.

*******************

Step 1: each spell has the same structure when the unique spell object is created:
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
Just use this formula for all your spells, and remember that the spell variable itself (const uniqueSpellName) needs to be one continuous word and camel case.

Step 2: format your spell description
as always in JS, if you find that your spell description has a ' mark used at any point within the string, you'll either need to go in and change the ' to \' or change the outer quotes to double marks "" so it reads correctly in the broswer. If your spell description has a line-return or line break in it, do not hit enter and create a new line. Instead, make sure there are no spaces between the period of the last sentance and the start of the new, and write <br>, which will force the line to break when rendered in HTML.

Step 3: At Higher levels
Whenever "At higher levels:" appears in your spell description, make sure it's formated as <br><br><strong>At Higher Levels:</strong>. This makes this easier to read and helps to distinguish it in the same fashion as the player's handbook.

Step 4: commenting
If you're writing cantrips, make sure there's a cantrip comment above those spells (the group, not each individual spell). Same goes for Level 1, Level 2, etc. THESE COMMENTS ARE ALREADY IN HERE, this is just a reminder for if they are deleted on accident
