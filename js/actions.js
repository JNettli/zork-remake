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
                output = "You have the following items in your inventory: ";
                for (var i = 0; i < inventory.length; i++) {
                    output += `<div>${[i + 1]}. ${inventory[i]}</div>\n`;
                }
            }
            break;

        case 'go north':
        case 'go n':
        case 'n':
        case 'north':
            if(rooms[currentRoom].exits.north) {
                var nextRoom = rooms[currentRoom].exits.north;
                if (rooms[nextRoom].dark == false || inventory.includes("Lantern")) {
                    currentRoom = nextRoom;
                    output = rooms[currentRoom].description;
                } else {
                    output = "The room is too dark to move.";
                }
            } else {
                output = "You can't go that way.";
            }
            break;
            
        case 'go south':
        case 'go s':
        case 's':
        case 'south':
            if(rooms[currentRoom].exits.south) {
                var nextRoom = rooms[currentRoom].exits.south;
                if (rooms[nextRoom].dark == false || inventory.includes("Lantern")) {
                    currentRoom = nextRoom;
                    output = rooms[currentRoom].description;
                } else {
                    output = "The room is too dark to move.";
                }
            } else {
                output = "You can't go that way.";
            }
            break;
                            
        case 'go east':
        case 'go e':
        case 'e':
        case 'east':
            if(rooms[currentRoom].exits.east) {
                var nextRoom = rooms[currentRoom].exits.east;
                if (rooms[nextRoom].dark == false || inventory.includes("Lantern")) {
                    currentRoom = nextRoom;
                    output = rooms[currentRoom].description;
                } else {
                    output = "The room is too dark to move.";
                }
            } else {
                output = "You can't go that way.";
            }
            break;

        case 'go west':
        case 'go w':
        case 'w':
        case 'west':
            if(rooms[currentRoom].exits.west) {
                var nextRoom = rooms[currentRoom].exits.west;
                if(rooms[nextRoom].dark == false || inventory.includes("Lantern")) {
                    currentRoom = rooms[currentRoom].exits.west;
                    output = rooms[currentRoom].description;
                } else {
                    output = "The room is too dark to move.";
                }
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

        case 'rock':
        case 'take rock':
        case 'pick up rock':
        case 'pickup rock':
            if (rooms[currentRoom].items.includes("Rock")) {
                inventory.push("Rock");
                output = "You have added Dwayne to your inventory.";
            } else {
                output = "There is no rock here.";
            }
            break;

        case 'reset':
        case 'reload':
            output = "Restarting game... Please hold...";
            function restart() {
                location.reload();
            }
            setTimeout(restart,666);
            break;

        default:
            output = "I don't know what " + command + " means."; 
    }

    outputEl.innerHTML += `<div class="prompt"></div><div>${command}</div><div>${output}</div>`;
}
