function updatePoll() {
    const name = document.getElementById('name').value;
    const favoriteCat = document.getElementById('favorite-cat').value;
    if (!name || !favoriteCat) {
        alert('Please fill out the form!');
        return;
    }

    alert(`Thank you for voting, ${name}!`);
    const results = document.getElementById('poll-results');
    const items = results.getElementsByTagName('li');
    for (let item of items) {
        if (item.textContent.startsWith(favoriteCat)) {
            const parts = item.textContent.split(': ');
            const count = parseInt(parts[1]) + 1;
            item.textContent = `${favoriteCat}: ${count}`;
            break;
        }
    }
}