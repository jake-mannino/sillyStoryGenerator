
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';
let insertx = ['Danny Devito','Eric Andre','21 Savage'];
let inserty = ['The surface of the sun','somewhere in florida','marianas trench'];
let insertz = ['folded himself 6 times','ate biscuits to death','ascended to the 8th dimension'];

randomize.addEventListener('click', result);

function result() {
let newStory = storyText;
  let xItem = randomValueFromArray(insertx);
  let yItem = randomValueFromArray(inserty);
  let zItem = randomValueFromArray(insertz);
  
if(document.getElementById("uk").checked) {
    const weight = Math.round(300 * 0.714) + ' stone';
    const temperature =  Math.round((94-32) * 5 / 9) + ' centigrade';
    newStory = newStory.replace('94 fahrenheit',temperature);
    newStory = newStory.replace('300 pounds',weight);
  }
    story.textContent = newStory;
  story.style.visibility = 'visible';
}
