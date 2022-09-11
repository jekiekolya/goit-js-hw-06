const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];
// Get link for element
const ingredientsEl = document.querySelector('#ingredients');

// Create empty array
const itemArray = [];

// Function for create items
function getListItems(ingredients) {
  for (const item of ingredients) {
    let itemEl = document.createElement('li');
    itemEl.textContent = item;
    itemEl.classList.add('item');

    itemArray.push(itemEl);
  }

  return itemArray;
}

// Call function
getListItems(ingredients);

// Add to HTML
ingredientsEl.append(...itemArray);
