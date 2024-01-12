const fruits = ['Apple', 'Banana', 'Orange', 'Grape', 'Kiwi', 'Pineapple', 'Mango'];

const searchBar = document.getElementById('search-bar');
const searchResults = document.getElementById('search-results');

searchBar.addEventListener('input', search);

document.addEventListener('click', function(event) {
  if (event.target !== searchResults && !searchResults.contains(event.target)) {
    searchResults.style.display = 'none';
  }
});

searchResults.addEventListener('mouseover', highlightSuggestion);
searchResults.addEventListener('click', useSuggestion);

function search() {
  const userInput = searchBar.value.toLowerCase();
  const results = fruits.filter(fruit => fruit.toLowerCase().includes(userInput));
  displayResults(results);
}

function displayResults(results) {
  searchResults.innerHTML = '';

  if (results.length > 0) {
    results.forEach(result => {
      const li = document.createElement('li');
      li.textContent = result;
      searchResults.appendChild(li);
    });

    searchResults.style.display = 'block';
  } else {
    searchResults.style.display = 'none';
  }
}

function highlightSuggestion(event) {
  const highlightedItem = event.target;
  const suggestions = searchResults.getElementsByTagName('li');

  for (const suggestion of suggestions) {
    suggestion.style.backgroundColor = suggestion === highlightedItem ? '#f0f0f0' : 'white';
  }
}

function useSuggestion(event) {
  const selectedSuggestion = event.target.textContent;
  searchBar.value = selectedSuggestion;
  searchResults.style.display = 'none';
}

 
