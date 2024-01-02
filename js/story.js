const storyData = {
  startState: {
      text: "Welcome to the world of Pokemon, Trainer! Choose your path.",
      choices: [
          {
              text: "Go to Professor Oak's lab",
              nextState: "professorLab"
          },
          {
              text: "Explore the town",
              nextState: "exploreTown"
          }
      ]
  },
  professorLab: {
      text: "You arrive at Professor Oak's lab. He gives you a choice of three Pokemon. Choose one.",
      choices: [
          {
              text: "Select Bulbasaur",
              nextState: "bulbasaurRoute"
          },
          {
              text: "Select Charmander",
              nextState: "charmanderRoute"
          },
          {
              text: "Select Squirtle",
              nextState: "squirtleRoute"
          }
      ]
  },
  // More states and choices
  bulbasaurRoute: {
      text: "You chose Bulbasaur! Your adventure begins with your new Pokemon.",
      choices: [],
      isEnd: true  // Indicates this is an ending state
  },
  charmanderRoute: {
      text: "You chose Charmander! Get ready for fiery battles!",
      choices: [],
      isEnd: true
  },
  squirtleRoute: {
      text: "You chose Squirtle! Prepare for watery adventures!",
      choices: [],
      isEnd: true
  },
  exploreTown: {
      text: "You decide to explore the town. What area would you like to visit?",
      choices: [
          {
              text: "Visit the Pokemon Center",
              nextState: "pokemonCenter"
          },
          {
              text: "Go to the Mart",
              nextState: "mart"
          },
          {
              text: "Head towards the outskirts",
              nextState: "outskirts"
          }
      ]
  },
  // More states and choices
};
