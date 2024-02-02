let currentRoom = "start";

const rooms = {
    start: {
        description:
            `You wake up in a dark and damp dungeon cell. You have no idea how you got here or who put you here. You only know that you have to escape.<br><br>You look around and see a rusty iron door to the north, a small window with iron bars to the west, a straw mattress, a wooden bucket, and a flickering torch on the wall.<br><br>What do you do?`,
        shortDescription: 
            "You look around and see a rusty iron door to the north, a small window with iron bars to the west, a straw mattress, a wooden bucket, and a flickering torch on the wall.",
        exits: { north: "dungeonCorridor" },
        items: ["Torch", "Bucket", "Your Cell Key"],
        dark: false,
    },
    dungeonCorridor: {
        description:
            `You step out of the cell and into the corridor. It is long and narrow, with stone walls and a low ceiling. You see more iron doors on both sides, some open and some closed. <br><br>The door you came from, to the south, is numbered Cell #1.<br><br>You see a staircase at the end of the corridor, leading up to a wooden door.<br><br>What do you do?`,
        shortDescription: 
            "You take a look around and see more iron doors on both sides. They are numbered. Cell #2, which is open, Cell #3 which is closed and Cell #4 which is open. There is a wooden door at the top of a staircase at the end of the corridor to the north. Behind you to the south is an iron door numbered Cell #1. This is where you woke up.",
        exits: { south: "start", west: "dungeonCell4" },
        items: [],
        dark: false,
    },
    dungeonCell4: {
        description:
            "You enter the cell and see a straw mattress and a bucket but what catches your eye is a dark hole in the floor. It looks like you could fit in it, but looking into the hole you see nothing but the abyss.",
        shortDescription: 
            "You look around the cell and see nothing interesting except the hole in the floor. Looking down in the hole",
        exits: { east: "dungeonCorridor", down: "deathHoleInFloor"},
        items: [],
        dark: false,
    },
    deathHoleInFloor: {
        description: 
            `You jumped down the dark hole with no regard for your own safety. You fall for an abnormally long time before hitting the floor at great speed. You didn't feel a thing because you died instantly.<br><br>Type reset or restart to try again!`,
        exits: {},
        items: [],
        dark: false,
    },
};

// room: {
//     description: "",
//     shortDescription: "",
//     altDescription: "",
//     exits: {north: '', south: '', east: '', west: '', up: '', down: ''},
//     items: [],
//     dark: false,
// },
