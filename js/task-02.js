const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

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

// Get link for element
const ingredientsEl = document.querySelector('ul#ingredients');

// Call function
getListItems(ingredients);

// Add to HTML
ingredientsEl.append(...itemArray);
