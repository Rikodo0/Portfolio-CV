document.getElementById('searchBtn').addEventListener('click', function() {
    var searchInput = document.getElementById('search').value.toLowerCase();
    var searchResults = document.getElementById('searchResults');

    if (searchInput.trim() === '') {
        searchResults.classList.add('hidden');
        searchResults.innerHTML = '';
        return;
    }

    var data = [
        'Apple',
        'Banana',
        'Cherry',
        'Date',
        'Fig',
        'Grape',
        'Kiwi'
    ];

    var results = data.filter(function(item) {
        return item.toLowerCase().includes(searchInput);
    });

    searchResults.innerHTML = '';
    results.forEach(function(result) {
        var li = document.createElement('li');
        li.textContent = result;
        searchResults.appendChild(li);
    });

    if (results.length > 0) {
        searchResults.classList.remove('hidden');
    } else {
        searchResults.classList.add('hidden');
    }
});

document.getElementById('modeToggle').addEventListener('click', function() {
    var body = document.body;
    var isDarkMode = body.classList.toggle('dark-mode');
    this.textContent = isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode';
});
