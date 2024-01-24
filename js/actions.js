

function handleCommand(command) {
    let output = '';

    switch(command) {
        case 'look', 'l':
            output = rooms[currentRoom].description;
            break;

        case 'bag', 'inventory', 'inv', 'i':
            if (inventory.length == 0) {
                output = "You have nothing in your inventory.";
            } else {
                output = "You have the following items in your inventory:";
                for (var i = 0; i < inventory.length; i++) {
                    output = `${i + 1}. ${inventory[i]}`;
                }
            }
            break;

        case 'go north', 'go n', 'n', 'north':
            if(rooms[currentRoom].exits.north) {
                currentRoom = rooms[currentRoom].exits.north;
                output = rooms[currentRoom].description;
            } else {
                output = "You can't go that way.";
            }
            break;

        case 'go south', 'go s', 's', 'south':
            if(rooms[currentRoom].exits.south) {
                currentRoom = rooms[currentRoom].exits.south;
                output = rooms[currentRoom].description;
            } else {
                output = "You can't go that way.";
            }
            break;

        case 'go east', 'go e', 'e', 'east':
            if(rooms[currentRoom].exits.east) {
                currentRoom = rooms[currentRoom].exits.east;
                output = rooms[currentRoom].description;
            } else {
                output = "You can't go that way.";
            }
            break;

        case 'go west', 'go w', 'w', 'west':
            if(rooms[currentRoom].exits.west) {
                currentRoom = rooms[currentRoom].exits.west;
                output = rooms[currentRoom].description;
            } else {
                output = "You can't go that way.";
            }
            break;

        default:
            output = 'Unknown command: ' + command;
    }

    outputEl.innerHTML += `<div class="prompt"></div><div>${command}</div><div>${output}</div>`;
}