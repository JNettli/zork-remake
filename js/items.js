var inventory = [];
var keyring = [];
const items = ["Lantern", "Rusty Dagger", "Rock", "Bucket"];
const keys = ["Your Cell Key", "Dungeon Corridor North",];

// room: {
//     description: "",
//     shortDescription: "",
//     altDescription: "",
//     exits: {north: '', south: '', east: '', west: '', up: '', down: ''},
//     items: [],
//     keyObscured: false,
//     keys: [],
//     dark: false,
//     death: false,
//     isLocked: false,
//     isOpen: true,
//     keyId: "",
//     setAltDesc: false,
//     setAltDescTwo: false,
// },

// case "ITEM":
//     case "take ITEM":
//     case "pick up ITEM":
//     case "pickup ITEM":
//         if (rooms[currentRoom].items.includes("ITEM")) {
//             inventory.push("ITEM");
//             output = "You have added ITEM to your inventory.";
//         } else {
//             output = "There is no ITEM here.";
//         }
//         break;