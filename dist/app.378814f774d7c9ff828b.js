(()=>{"use strict";const e=document.querySelector("form"),t=document.querySelector(".search-result");document.querySelector(".container");let a="";e.addEventListener("submit",(e=>{e.preventDefault(),a=e.target.querySelector("input").value,async function(){const e=`https://api.edamam.com/search?q=${a}&app_id=a9dd08cc&app_key=020ab8bdaf8d67dd9080ed999a05a932`,i=await fetch(e),n=await i.json();(function(e){if(e.length>0){let a="";e.map((e=>{a+=`\n                <div class="item">\n                    <img src="${e.recipe.image}" alt="">\n                    <div class="flex-container">\n                        <h1 class="title">${e.recipe.label}</h1>\n                        <a href="${e.recipe.url}" target = "_blank" class="btn btn-primay">View</a>\n                    </div>\n                    <p class="item-data">Calories: ${e.recipe.calories.toFixed(2)}</p>\n                     <p class="item-data">Diet Label: ${e.recipe.dietLabels.length>0?e.recipe.dietLabels:"No data found"}</p>\n                     <p class="item-data">Health Label: ${e.recipe.healthLabels}</p>\n                </div>`})),t.innerHTML=a}else t.innerHTML='<h2 class = "text-center text-primary">No result found. Please enter a valid Food recipe name.</h2>'})(n.hits),console.log(n.hits)}()}))})();