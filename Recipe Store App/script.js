const searchBox = document.querySelector(".searchBox");
const searchBtn = document.querySelector(".searchBtn");
const recipeContainer = document.querySelector(".recipe-container");

//Function to get recipes
const fetchRecipes = async (query) => {
  recipeContainer.innerHTML = "<h2>Featching Receipes...</h2>";
  const data = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
  );
  const response = await data.json();
  //console.log(response.meals[0]);

  recipeContainer.innerHTML = "";
  response.meals.forEach((meal) => {
    //console.log(meal);
    const recipeDiv = document.createElement("div");
    recipeDiv.classList.add("recipe");
    recipeDiv.innerHTML = `
        <img src="${meal.strMealThumb}"/>
        <h3>${meal.strMeal}</h3>
        <p><span>${meal.strArea}</span> Dish</p>
        <p>Belongs to <span>${meal.strCategory}</span> Category</p>
        `;
    const button = document.createElement("button");
    button.textContent = "view Recipe";
    recipeDiv.appendChild(button);
    // Adding event Listner to recipe button
    button.addEventListener("click", (e) => {
      ButItem(e);
    });
    recipeContainer.appendChild(recipeDiv);
  });
};
function ButItem(e) {
  alert(`👩‍🍳
  Hi! You Can Buy Testy Recipe Here..🍔`);
  location.replace("https://www.swiggy.com/");
}

searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  //console.log("button click");
  const searchInput = searchBox.value.trim();
  fetchRecipes(searchInput);
});
