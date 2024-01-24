var inventory = [];

function showInventory() {
  if (inventory.length == 0) {
    output = "You have nothing in your inventory.";
    } else {
        output = "You have the following items in your inventory:";
        for (var i = 0; i < inventory.length; i++) {
            output = `${i + 1}. ${inventory[i]}`;
        }
    }
}

// Create a function to add an item to the inventory
function addItem(item) {
    inventory.push(item);
    console.log("You have added " + item + " to your inventory.");
}

// Create a function to remove an item from the inventory
function removeItem(item) {
  // Find the index of the item in the inventory array
  var index = inventory.indexOf(item);
  // Check if the item exists in the inventory
  if (index > -1) {
    // If yes, splice the item from the inventory array
    inventory.splice(index, 1);
    // Print a message
    console.log("You have removed " + item + " from your inventory.");
  } else {
    // If not, print a message
    console.log("You don't have " + item + " in your inventory.");
  }
}

// // Test the inventory system
// showInventory(); // You have nothing in your inventory.
// addItem("sword"); // You have added sword to your inventory.
// addItem("shield"); // You have added shield to your inventory.
// showInventory(); // You have the following items in your inventory: 1. sword 2. shield
// removeItem("sword"); // You have removed sword from your inventory.
// showInventory(); // You have the following items in your inventory: 1. shield
// removeItem("key"); // You don't have key in your inventory.