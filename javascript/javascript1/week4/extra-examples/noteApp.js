// 1. The first thing we will create is the functionality to save a note: Create a variable called notes and assign it to an empty array. 
const notes = [];
// 2. Create a function called saveNote. The saveNote has two parameters:
// - content parameter is a string.
// - id is a number.
// 3. The saveNote function should push an object to the notes array with the keys content and id. Here is an example

console.log('---- save note ----')
function saveNote(content, id) {
  notes.push({ [id]: content });
}

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);

console.log('All notes:', notes); // [{content: 'Pick up groceries', id: 1}, {content: 'Do laundry', id: 2}]

console.log('---- get note ----')
// 4. Now a user can save a note, but what if a user wants to see a specific note, but only remembers the id? Lets create that functionality for him: Create a function called getNote. 
// 5. The function has one parameter called id. When calling this function with an id it should return the relevant note object that corresponds to the id. 
// 6. If no id is specified or if the id is not a number, log out an error string. Hint: Use a for loop.
function getNote(id) {
  // 6. If the id is not valid, I want to "fail quickly" - I want to get out of the function as soon as possible because there's no reason to do the entire loop if we already know the ID is invalid
  if (!id || typeof id !== 'number') throw new Error('No valid id is provided - only numbers are valid is ids')

  // 5. (using the hint here, we are told to use a for loop)
  for (const note of notes) {
    if (note[id]) return note[id];
  }

  return;
}

const firstNote = getNote(1);
console.log('First note:', firstNote); // {content: 'Pick up groceries', id: 1}

console.log('---- formatted notes ----')
// 7. Now a user can both save and get a note. What if the user just wants to read all his notes? Lets also create that functionality: Create a function logOutNotesFormatted. 
// 8. When calling the function it should log this string out for every note: "The note with id: 1, has the following note text: "some example note"."
function logOutNotesFormatted() {
  // 8. Why do I use a for..of and not a for (let i; i < length.notes; i++) loop here?
  for (const note of notes) {
    const id = Object.getOwnPropertyNames(note)[0];
    console.log('The note with id:', id + ',', 'has the following note text:', note[id]);
  }
}

logOutNotesFormatted();

// Some unique feature here?