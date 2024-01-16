let currentRoom = 'start';

const rooms = {
    start: {
        description: "You are in a dark room. There is a door to the north.",
        exits: {north: 'hallway'},
    },
    hallway: {
        description: "You are in a long hallway. There is a door to the south and another one to the east.",
        exits: {south: 'start', east: 'treasureRoom'},
    },
    treasureRoom: {
        description: "You've found the treasure room! There's a massive chest in the center. Congratulations!",
        exits: {west: 'hallway'},
    }
};