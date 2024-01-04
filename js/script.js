const inputEl = document.getElementById('input');
const outputEl = document.getElementById('output');

inputEl.focus();
inputEl.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        const command = inputEl.value;
        handleCommand(command);
        inputEl.value = '';
    }
});

let currentRoom = 'start';

const rooms = {
    start: {
        description: "You are in a clearing in the woods. A house is to your north.",
        exits: {north: 'houseFront'},
    },
    houseFront: {
        description: "You stand in front of the steps to a large house. It looks weathered and old. Several planks are nailed to the windows on the first floor.",
        exits: {north: 'houseFrontDoor', east: 'houseEastSide', south: 'start', west: 'houseWestSide'},
    },
    houseFrontDoor: {
        description: "You stand on the porch of the large house. The doorhandle has rusted, the windows on either side of the door are nailed shut.",
        exits: {north: 'houseEntryWay', south: 'houseFront'},
    },
};

function handleCommand(command) {
    let output = '';

    switch(command) {
        case 'look':
            output = rooms[currentRoom].description;
            break;
        
        case 'go north':
            if(rooms[currentRoom].exits.north) {
                currentRoom = rooms[currentRoom].exits.north;
                output = rooms[currentRoom].description;
            } else {
                output = "You can't go that way.";
            }
            break;

        case 'go east':
            if(rooms[currentRoom].exits.east) {
                currentRoom = rooms[currentRoom].exits.east;
                output = rooms[currentRoom].description;
            } else {
                output = "You can't go that way.";
            }
            break;

        case 'go south':
            if(rooms[currentRoom].exits.south) {
                currentRoom = rooms[currentRoom].exits.south;
                output = rooms[currentRoom].description;
            } else {
                output = "You can't go that way.";
            }
            break;

        case 'go west':
            if(rooms[currentRoom].exits.west) {
                currentRoom = rooms[currentRoom].exits.west;
                output = rooms[currentRoom].description;
            } else {
                output = "You can't go that way.";
            }
            break;

        default:
            output = "Unknown input: " + command;
    }

    outputEl.innerHTML += `<div class="prompt">$></div><div>${command}</div><div>${output}</div>`;
}

// Initial description:
outputEl.innerHTML += `<div class="prompt"></div><div>Welcome to  Zork Remake!</div><div>${rooms[currentRoom].description}</div>`;