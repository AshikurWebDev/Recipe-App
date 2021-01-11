// importing file
import "./importFile";

const searchForm = document.querySelector("form");
const searchResult = document.querySelector(".search-result");
const container = document.querySelector(".container");
let searchQuery = "";

// API data
const APP_ID = "a9dd08cc";
const APP_KEY = "020ab8bdaf8d67dd9080ed999a05a932";

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  searchQuery = e.target.querySelector("input").value;
  fetchAPI();
});

async function fetchAPI() {
  const baseUrl = `https://api.edamam.com/search?q=${searchQuery}&app_id=${APP_ID}&app_key=${APP_KEY}`;
  const response = await fetch(baseUrl);
  const data = await response.json();
  generateHtml(data.hits);
  console.log(data.hits)
}
function generateHtml(results) {
  if (results.length > 0) {
    let generatedHtml = "";
    results.map((result) => {
      generatedHtml += `
                <div class="item">
                    <img src="${result.recipe.image}" alt="">
                    <div class="flex-container">
                        <h1 class="title">${result.recipe.label}</h1>
                        <a href="${
                          result.recipe.url
                        }" target = "_blank" class="btn btn-primay">View</a>
                    </div>
                    <p class="item-data">Calories: ${result.recipe.calories.toFixed(
                      2
                    )}</p>
                     <p class="item-data">Diet Label: ${result.recipe.dietLabels.length > 0 ? result.recipe.dietLabels : "No data found"}</p>
                     <p class="item-data">Health Label: ${result.recipe.healthLabels}</p>
                </div>`;
    });
    searchResult.innerHTML = generatedHtml;
  } else {
    searchResult.innerHTML = `<h2 class = "text-center text-primary">No result found. Please enter a valid Food recipe name.</h2>`;
  }
}
