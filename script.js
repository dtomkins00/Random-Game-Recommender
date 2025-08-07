const gameDetails = {

    gameCost: ['Paid to play it', 'Free', '$1', '$5', '$10', '$20', '$30', '$40', '$50', '$60', '$70', '$80', '$100', 'Your life savings', 'Oops, its unavailable for purchase, sorry :('],

    gameGenre: ['Action', 'Adventure', 'Sports', 'FPS', 'Racing', 'Simulation', 'Visual Novel', 'Puzzle', 'Strategy', 'Platformer', 'Casual', 'Survival', 'Shoot-em-up', 'Multiplayer', 'Horror', 'Fighting', 'RPG', '???'],

    gameName: ['Manly Ultraviolent Warfare', 'Football Game #1998', 'Help There Are Too Many Bullets On Screen', 'Chess', 'Live Service Game (will get shut down in less than one year)', 'Cozy Teatime with Your Crush', 'The Spookening', 'Serious Business Fighting Game', 'Unholy School', 'Dead Stranded', 'Plumber Kart 9', 'Digcraft', 'Air Traffic Control Simulator', 'Super Green Plumber Platforming', 'Quest To Defeat God IX', 'Friends At The Campfire']

};

const randomName = gameDetails.gameName[Math.floor(Math.random() * gameDetails.gameName.length)];
const randomGenre = gameDetails.gameGenre[Math.floor(Math.random() * gameDetails.gameGenre.length)];
const randomCost = gameDetails.gameCost[Math.floor(Math.random() * gameDetails.gameCost.length)];

console.log(`Hello! Your recommended game is '${randomName}'! Its genre is ${randomGenre}, and the game can be purchased for: ${randomCost}.`);
