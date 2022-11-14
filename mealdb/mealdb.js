const searchMealDb = () => {
  const searchField = document.getElementById('searchInput');
  const searchText = searchField.value;
  // console.log(searchText);

  searchField.value = "";
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
  fetch(url)
      .then(response => response.json())
      .then(data => console.log(data.meals))
}