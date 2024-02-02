let currentRoom = "start";

const rooms = {
    start: {
        description:
            `You wake up in a dark and damp dungeon cell. You have no idea how you got here or who put you here. You only know that you have to escape. <br><br>You look around and see a rusty iron door, a small window with iron bars, a straw mattress, a wooden bucket, and a flickering torch on the wall. <br><br>What do you do?`,
        shortDescription: "You look around and see a rusty iron door, a small window with iron bars, a straw mattress, a wooden bucket, and a flickering torch on the wall.",
        exits: { north: "hallway" },
        items: ["Torch", "Bucket"],
        dark: false,
    },
    hallway: {
        description:
            "You are in a long hallway. There is a door to the south and another one to the east.",
        exits: { south: "start", east: "treasureRoom" },
        items: ["Wooden Sword"],
        dark: false,
    },
    treasureRoom: {
        description:
            "You've found the treasure room! There's a massive chest in the center. Congratulations!",
        exits: { west: "hallway" },
        items: ["Rock"],
        dark: true,
    },
    room: {
        description: "",
        exits: {north: '', south: '', east: '', west: ''},
        items: [],
        dark: false,
    },
};

// room: {
//     description: "",
//     exits: {north: '', south: '', east: '', west: ''},
//     items: [],
//     dark: false,
// },
