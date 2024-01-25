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

// Initial description
outputEl.innerHTML += `<div class="prompt"></div><div>Welcome to my Zork Remake!</div><div>${rooms[currentRoom].description}</div>`;
