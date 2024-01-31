let currentRoom = "start";

const rooms = {
    start: {
        description:
            "You are in a dark room. There is a door to the north. There is a lantern by the north door.",
        exits: { north: "hallway" },
        items: ["Lantern"],
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
};

//room: {
//    description: "",
//    exits: {north: '', south: '', east: '', west: ''},
//    items: [],
//    dark: false,
//},
