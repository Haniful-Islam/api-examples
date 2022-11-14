const searchMealDb = () => {
  const searchField = document.getElementById("searchInput");
  const searchText = searchField.value;
  // console.log(searchText);

  searchField.value = "";
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => displayMealDb(data.meals));
};

const displayMealDb = (meals) => {
  const searchResult = document.getElementById("search-result");
  meals.forEach((meal) => {
    // console.log(meal)
    const div = document.createElement("div");
    div.innerHTML = `
        <div class="card h-100">
          <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
             <div class="">
                <h5 class="">${meal.strMeal}</h5>
                <p class="px-2 card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
              <button onclick = "loadMealDetails('${meal.idMeal}')">Meal Details<button/> 
         </div>
    `;
    searchResult.appendChild(div);
  });
};

const loadMealDetails = (mealId) => {

  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
  fetch(url)
      .then(response => response.json())
      .then(data => displayMealDetails(data.meals[0]))
}

const displayMealDetails = (meal) =>{
  const mealDetails = document.getElementById('meal-details');
  mealDetails.classList.add('card')
  mealDetails.innerHTML = `
          <img class='img-fluid' src="${meal.strMealThumb}" class="card-img-top" alt="...">
             <div class="">
                <h5 class="">${meal.strMeal}</h5>
                <p class="px-2 card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
  `
}