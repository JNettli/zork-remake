function handleCommand(command) {
    let output = '';

    switch(command) {
        case 'look':
        case 'l':
            output = rooms[currentRoom].description;
            break;

        case 'bag':
        case 'inventory':
        case 'inv':
        case 'i':
            if (inventory.length == 0) {
                output = "You have nothing in your inventory.";
            } else {
                for (var i = 0; i < inventory.length; i++) {
                    output = `${inventory[i]}`;
                }
            }
            break;

        case 'go north':
        case 'go n':
        case 'n':
        case 'north':
            if(rooms[currentRoom].exits.north) {
                currentRoom = rooms[currentRoom].exits.north;
                output = rooms[currentRoom].description;
            } else {
                output = "You can't go that way.";
            }
            break;
            
        case 'go south':
        case 'go s':
        case 's':
        case 'south':
            if(rooms[currentRoom].exits.south) {
                currentRoom = rooms[currentRoom].exits.south;
                output = rooms[currentRoom].description;
            } else {
                output = "You can't go that way.";
            }
            break;
                            
        case 'go east':
        case 'go e':
        case 'e':
        case 'east':
            if(rooms[currentRoom].exits.east) {
                currentRoom = rooms[currentRoom].exits.east;
                output = rooms[currentRoom].description;
            } else {
                output = "You can't go that way.";
            }
            break;

        case 'go west':
        case 'go w':
        case 'w':
        case 'west':
            if(rooms[currentRoom].exits.west) {
                currentRoom = rooms[currentRoom].exits.west;
                output = rooms[currentRoom].description;

            } else {
                output = "You can't go that way.";
            }
            break;

        case 'pickup':
            output = "What do you want to pickup?";
            break;
        
        case 'take':
            output = "What do you want to take?";
            break;

        
        case 'take lantern':
        case 'pickup lantern':
        case 'pick up lantern':
        case 'lantern':
            if (rooms[currentRoom].items.includes("Lantern")) {
                inventory.push("Lantern");
                output = "You have added lantern to your inventory.";
            } else {
                output = "There is no lantern here.";
            }
            break;

        case 'take sword':
        case 'pickup sword':
        case 'pick up sword':
            if(rooms[currentRoom].items.includes("Wooden Sword")) {
                inventory.push("Wooden Sword");
                output = "You picked up the wooden sword and added it to your inventory.";
            } else {
                output = "There is no sword here.";
            }
            break;

        default:
            output = "I don't know what " + command + " means."; 
    }

    outputEl.innerHTML += `<div class="prompt"></div><div>${command}</div><div>${output}</div>`;
}
