// Ex. 1 - Task 1 ---------------------------------------------------------

const arrayCategories = document.querySelectorAll('ul#categories li.item');

function getLengthNumberOfCategories() {
  return arrayCategories.length;
}

console.log('Number of categories:', getLengthNumberOfCategories());

// Ex. 1 - Task 2 ----------------------------------------------------------

function getNameCategoryAndNumberOfElements(array) {
  // Through FOR..OF
  //   for (const item of arrayCategories) {
  //     let nameEl = item.querySelector('h2').textContent;
  //     let numberElements = item.querySelectorAll('li').length;

  //     console.log('Category:', nameEl);
  //     console.log('Elements:', numberElements);
  //   }

  // Through Map()
  let test = Array.from(array).map(item => {
    let nameEl = item.querySelector('h2').textContent;
    let numberElements = item.querySelectorAll('li').length;

    console.log('Category:', nameEl);
    console.log('Elements:', numberElements);
  });
}

getNameCategoryAndNumberOfElements(arrayCategories);
