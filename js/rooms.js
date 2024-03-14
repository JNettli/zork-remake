let currentRoom = "start";

const rooms = {
    start: {
        description:
            `You wake up in a dark and damp dungeon cell. You have no idea how you got here or who put you here. You only know that you have to escape.<br><br>All you have on you are some rags covering you and a keyring.<br><br>Maybe you should take a look around?`,
        shortDescription: 
            `You look around and see a rusty iron door to the north, a small window with iron bars to the west, a straw mattress, a wooden bucket, and a flickering torch on the wall. The light from the torch makes something on top of the bucket shimmer. It looks like a key.`,
        altDescription: 
            "You see a flickering where the bucket previously stood on the floor. It looks like a key!",
        exits: { north: "dungeonCorridor" },
        items: ["Bucket"],
        keyObscured: true,
        keys: ["Your Cell Key"],
        dark: false,
        death: false,
        isLocked: false,
        isOpen: true,
        keyId: "",
    },
    dungeonCorridor: {
        description:
            `You find yourself in a large octagonal jail room, with iron cell doors on all sides and a heavy wooden door to the north. The only light comes from a small window high above, where you can see a sliver of sky. The floor is cold and damp, but underneath you can see a compass etched into the stone floor.<br><br>The door you came from is to the south and is numbered Cell #1.<br><br>To the north is the heavy wooden door. To the northwest is a cell door where you can hear faint moaning and clanking of chains.<br><br>To the east, southeast, southwest, west and northwest are open cell doors.<br><br>What do you do?`,
        shortDescription: 
            "To the north is the heavy wooden door. To the northwest is a cell door where you can hear faint moaning and clanking of chains.<br><br>To the east, southeast, southwest, west and northwest are open cell doors.",
        exits: { south: "start", west: "dungeonCell4" },
        items: [],
        keyObscured: false,
        dark: false,
        death: false,
        isLocked: true,
        isOpen: false,
        keyId: "Your Cell Key",
    },
    dungeonCell4: {
        description:
            "You enter the cell and see a straw mattress and a bucket but what catches your eye is a dark hole in the floor. It looks like you could fit in it, but looking into the hole you see nothing but the abyss.",
        shortDescription: 
            "You look around the cell and see nothing interesting except the hole in the floor. Looking down in the hole",
        exits: { east: "dungeonCorridor", down: "deathHoleInFloor"},
        items: [],
        dark: false,
        death: false,
        isLocked: false,
        isOpen: true,
        keyId: "",
    },
    deathHoleInFloor: {
        description: 
            `You jumped down the dark hole with no regard for your own safety. You fall for an abnormally long time before hitting the floor at great speed. You didn't feel a thing because you died instantly.<br><br>Type reset or restart to try again!`,
        exits: {},
        items: [],
        dark: false,
        death: true,
        isLocked: false,
        isOpen: true,
        keyId: "",
    },
};
