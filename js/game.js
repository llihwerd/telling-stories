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

    // Hide the name input and start button
    document.getElementById('label').style.display = 'none'
    document.getElementById('name').style.display = 'none'
    document.getElementById('start-button').style.display = 'none'

    document.getElementById('story-container').style.display = 'block'
    document.getElementById('choices-container').style.display = 'block'

  updateUI()
}

// Function to update the UI based on the current story state
function updateUI() {
  const storyContainer = document.getElementById('story-container')
  const choicesContainer = document.getElementById('choices-container')
  const playAgainButton = document.getElementById('play-again-button')

  if (currentStoryState && currentStoryState.isEnd) {
    // Display the "Play Again" button and hide the choices if it's the end of the game
    playAgainButton.style.display = 'block'
    choicesContainer.innerHTML = '' // Clear previous choices
    storyContainer.innerHTML = currentStoryState.text // Show ending text
  } else if (currentStoryState) {
    // Hide the "Play Again" button and show the choices if it's not the end of the game
    playAgainButton.style.display = 'none'
    storyContainer.innerHTML = currentStoryState.text
    choicesContainer.innerHTML = '' // Clear previous choices
    currentStoryState.choices.forEach(choice => {
      const choiceButton = document.createElement('button')
      choiceButton.textContent = choice.text
      choiceButton.addEventListener('click', () => makeChoice(choice))
      choicesContainer.appendChild(choiceButton)
    })
  } else {
    // Hide both the "Play Again" button and the story/choices containers if there's no current story
    playAgainButton.style.display = 'none'
    storyContainer.style.display = 'none'
    choicesContainer.style.display = 'none'
  }
}


// Function to handle player choices
function makeChoice(choice) {
  if (choice.nextState) {
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
    currentStoryState = storyData[choice.nextState]
    updateUI()
  } else {
    console.log("end state")
  }
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


// Function to reset the game
function resetGame() {
  player.party = []
  player.name = ''
  currentStoryState = null
  
  // Reset to initial screen
  document.getElementById('label').style.display = 'block'
  document.getElementById('name').style.display = 'block'
  document.getElementById('start-button').style.display = 'block'
  document.getElementById('play-again-button').style.display = 'none'
  document.getElementById('story-container').innerHTML = ''
  document.getElementById('choices-container').innerHTML = ''

  // Ensure the story and choices containers are not displayed
  document.getElementById('story-container').style.display = 'none'
  document.getElementById('choices-container').style.display = 'none'

  // Clear the input field
  document.getElementById('name').value = ''
}

console.log(getStartingState())

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('start-button').addEventListener('click', startGame)
  document.getElementById('play-again-button').addEventListener('click', resetGame)
})