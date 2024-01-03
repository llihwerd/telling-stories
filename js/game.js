import { storyData } from './story.js'

let player = {
  name: "",
  party: []
}

let currentStoryState


// Function to start the game
function startGame() {
  player.party = []
  player.name = document.getElementById('name').value
  currentStoryState = getStartingState()
  updateUI()
}

// Function to update the UI based on the current story state
function updateUI() {
  const storyContainer = document.getElementById('story-container')
  const choicesContainer = document.getElementById('choices-container')
  const playAgainButton = document.getElementById('play-again-button')

  if (currentStoryState) {

    storyContainer.innerHTML = currentStoryState.text
    choicesContainer.innerHTML = ''

    currentStoryState.choices.forEach(choice => {
        const choiceButton = document.createElement('button')
        choiceButton.textContent = choice.text
        choiceButton.addEventListener('click', () => makeChoice(choice))
        choicesContainer.appendChild(choiceButton)
      })

      if (currentStoryState.isEnd) { 
        playAgainButton.style.display = 'block'
        playAgainButton.addEventListener('click', startGame)
      } else {
          playAgainButton.style.display = 'none'
      }
  } else {
      console.error("currentStoryState is undefined")
      currentStoryState = getStartingState()
      updateUI()
  }
}


// Function to handle player choices
function makeChoice(choice) {
  switch (choice.nextState) {
    case "bulbasaurRoute":
      player.party.push("Bulbasaur")
      break
    case "charmanderRoute":
      player.party.push("Charmander")
      break
    case "squirtleRoute":
      player.party.push("Squirtle")
      break
    case "routeOneCaterpie":
      player.party.push("Caterpie")
      break
    case "routeOneTreasure":
      player.party.push("SUPER rare candy")
      break
    default:
      break
  }


  currentStoryState = storyData[choice.nextState];
  updateUI()
}


// Function to retrieve the starting story state
function getStartingState() {
  // Ensure that storyData is defined and has a valid starting state
  if (typeof storyData !== 'undefined' && storyData.startState) {
      return storyData.startState
  } else {
      console.error("storyData or startState is undefined")
      // Handle the error or return a default state
      return {
          text: "Error: Unable to load the story. Please try again.",
          choices: []
      }
  }
}


document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('start-button').addEventListener('click', startGame)
  document.getElementById('play-again-button').addEventListener('click', startGame)
})