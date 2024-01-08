const customName = document.getElementById("customname");
const randomize = document.querySelector(".randomize");
const story = document.querySelector(".story");

function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

let characterName = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
let storyLocation = ["the soup kitchen", "Disneyland", "the White House"];
let storyPlot = [
  "spontaneously combusted",
  "melted into a puddle on the sidewalk",
  "turned into a slug and crawled away",
];

let sillyStory =
  "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";

randomize.addEventListener("click", result);

function result() {
  let newStory = sillyStory;

  let nameItem = randomValueFromArray(characterName);
  let locationItem = randomValueFromArray(storyLocation);
  let plotItem = randomValueFromArray(storyPlot);

  newStory = newStory.replaceAll(":insertx:", nameItem);
  newStory = newStory.replaceAll(":inserty:", locationItem);
  newStory = newStory.replaceAll(":insertz:", plotItem);

  if (customName.value !== "") {
    const name = customName.value;
    newStory = newStory.replaceAll("Bob", name);
  }

  if (document.getElementById("uk").checked) {
    const weight = `${Math.round(300 * 0.0714286)} stones`;
    const temperature = `${Math.round((94 - 32) * (5 / 9))} centigrade`;
    newStory = newStory.replaceAll("94 fahrenheit", temperature);
    newStory = newStory.replaceAll("300 pounds", weight);
  }

  story.textContent = newStory;
  story.style.visibility = "visible";
}
