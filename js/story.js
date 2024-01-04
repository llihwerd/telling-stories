

export let storyData = {
startState: {
    text: `Welcome to the world of Pokemon! Choose your path.`,
    choices: [
        {
            text: "Go to Professor Oak's lab",
            nextState: "professorLab"
        },
        {
            text: "Visit the Pokemon Center",
            nextState: "pokemonCenter"
        }
    ]
},

professorLab: {
    text: "You arrive at Professor Oak's lab. He gives you a choice of three Pokemon. Choose wisely.",
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

bulbasaurRoute: {
    text: "You chose Bulbasaur! You've chosen wisely.",
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
            text: "Head towards the outskirts",
            nextState: "outskirts"
        }
    ]
},

pokemonCenter: {
    text: "You see nurse Joy, who eagerly asks for your help.",
    choices: [
        {
            text: "Become a PokeDoctor and dedicate your life to healing pokemon.",
            nextState: "doctorEnding"
        },
        {
            text: "That's too much pressure, go back outside.",
            nextState: "exploreTown"
        }
    ]
},

doctorEnding: {
    text: "You spend the rest of your days working with Nurse Joy to help Pokemon!",
    choices: [],
    isEnd: true
},

outskirts:  {
    text: "You decide to venture away from town. You discover a path through the woods, but it's guarded by an angry Caterpie!",
    choices: [
        {
            text: `Battle it!`,
            nextState: "caterpieFight"
        },
        {
            text: "Run past it!",
            nextState: "routeOne"
        }
    ]
},

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
            nextState: "viridianCitySuper"
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


viridianCitySuper: {
    text: "As soon as you take one step past the welcome sign, a mysterious woman approaches you.",
    choices: [
        {
            text: "Ask what she wants.",
            nextState: "crimsonBattleSuper"
        },
        {
            text: "Walk past her.",
            nextState: "viridianTownCenter"
        }
    ]
},

crimsonBattleSuper:  {
    text: "She looks pleased, then sends out an incredibly-strong-looking pikachu!",
    choices:
    [
        {
            text: "The SUPER rare candy in your bag starts shaking and your pokemon evolve right in front you gaining SUPER strength! >>> ATTACK!",
            nextState: "crimsonBattleWin"
        }
    ]
},

crimsonBattle:  {
    text: "She looks pleased, then sends out an incredibly-strong-looking pikachu!",
    choices: [
        {
            text: "Send out your pokemon and ATTACK!",
            nextState: "crimsonBattleLoss"
        }
    ]
},

crimsonBattleWin: {
    text: "You've just defeated Crimson, the Pokemon League Champion! You're officially a Pokemon Master!",
    choices: [],
    isEnd: true
},


crimsonBattleLoss: {
    text: "You've just been defeated by Crimson, the Pokemon League Champion! You're definitely not a Pokemon Master!",
    choices: [],
    isEnd: true
},

viridianTownCenter: {
    text: "A bustling downtown full of smells and sounds!",
    choices: [
        {
            text: "The aroma is irrisistible! Walk into the bakery.",
            nextState: "fullTummy"
        },
        {
            text: "You've had a long day, take a seat on the bench.",
            nextState: "relaxed"
        }
    ]
},

relaxed: {
    text: "You watch people walk past until you doze off for a quick nap",
    choices: [],
    isEnd: true
},


fullTummy: {
    text: "You eat all the pastries you can, and head back home.",
    choices: [],
    isEnd: true
}
}
