// story.js
export let player = {
    name: "",
    party: []
}
export let storyData = {
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
      choices: [
        {
            text: "Head back to town with your new friend!",
            nextState: "exploreTown"
        }
      ]
  },
  charmanderRoute: {
      text: "You chose Charmander! Get ready for fiery battles!",
      choices: [
        {
            text: "Head back to town with your new friend!",
            nextState: "exploreTown"
        }
      ]
  },
  squirtleRoute: {
      text: "You chose Squirtle! Prepare for watery adventures!",
      choices: [
        {
            text: "Head back to town with your new friend!",
            nextState: "exploreTown"
        }
      ]
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
  outskirts:  {
    text: "You decide to venture away from town. You discover a path through the woods, but it's guarded by an angry Caterpie!",
    choices: (player.party.length === 0) ?
        [
            {
                text: `Battle it!`,
                nextState: "caterpieFight"
            },
            {
                text: "Run past it!",
                nextState: "routeOne"
            }
        ]
        :
        [
            {
                text: "Run back to town before it gets you!",
                nextState: "exploreTown"
            },
            {
              text: "Run back to town before it gets you!",
              nextState: "exploreTown"
            },
            {
            text: "Run back to town before it gets you!",
            nextState: "exploreTown"
            }
        ]
},
  // More states and choices
  caterpieFight: {
    text: "You're winning easily! Would like to defeat it or catch it?",
    choices: [
        {
            text: "Defeat it!",
            nextState: "routeOne"
        },
        {
            text: "Catch it!",
            nextState: "routeOneCaterpie"
        }
    ]
},

routeOne: {
  text: "You walk further into the beautiful nature trail. Would you like to explore or quickly follow the path?",
  choices: [
      {
          text: "Follow the path, bugs are gross!",
          nextState: "viridianCity"
      },
      {
          text: "Explore!",
          nextState: "routeOneTreasure"
      }
  ]
},

routeOneCaterpie: {
  text: "You walk further into the beautiful nature trail. Would you like to explore or quickly follow the path?",
  choices: [
      {
          text: "Follow the path, bugs are gross!",
          nextState: "viridianCity"
      },
      {
          text: "Explore!",
          nextState: "routeOneTreasure"
      }
  ]
},

routeOneTreasure: {
  text: "You're curiosity paid off, you found a SUPER rare candy!",
  choices: [
      {
          text: "Pick it up, and head to the next town!",
          nextState: "viridianCity"
      }
    ]
},

viridianCity: {
  text: "As soon as you take one step past the welcome sign, a mysterious woman approaches you.",
  choices: [
      {
          text: "Ask what she wants.",
          nextState: "crimsonBattle"
      },
      {
          text: "Walk past her.",
          nextState: "viridianTownCenter"
      }
  ]
},




crimsonBattle:  {
  text: "She looks pleased, then sends out an incredibly-strong-looking pikachu!",
  choices: (player.party.length === 3) ?
      [
          {
              text: "The SUPER rare candy in your bag starts shaking and your 2 pokemon evolve right in front you gaining SUPER strength! >>> ATTACK!",
              nextState: "crimsonBattleWin"
          }
      ]
      :
      [
          {
              text: "Send out your pokemon and ATTACK!",
              nextState: "crimsonBattleLose"
          }
      ]
},


routeOneTreasure: {
  text: "You're curiosity paid off, you found a SUPER rare candy!",
  choices: [
      {
          text: "Pick it up, and head to the next town!",
          nextState: "viridianCity"
      }
    ]
},


}


console.log(player)
