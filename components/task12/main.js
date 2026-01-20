// container variables,
const productsContainer = document.getElementById('products-container');
const loadingMessage = document.getElementById('loading-message');
const cartContainer = document.getElementById("cart-div");
const cartBadgeEl = document.getElementById("cart-badge");
const fragmentEl = document.createDocumentFragment();

let foodItems;
let count = 0;

// fetching the foods,
const fetchingProducts = async () => {
    let foodUrl = 'https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian';

    let res = await fetch(foodUrl);
    let data = await res.json();
    foodItems = await data.meals;
};

// creating and append the elements,
const appendFoods = () => {
    foodItems.forEach(meals => {
        // food item for each one and style class,
        let itemDivEl = document.createElement('div');
        let foodBodyEl = document.createElement('div');
        let foodTitle = document.createElement('h3');
        let countDiv = document.createElement('div');

        itemDivEl.classList.add('food-item');
        foodBodyEl.classList.add('food-body');
        foodTitle.className = 'text-white text-sm font-semibold';
        foodTitle.textContent = meals.strMeal;
        countDiv.innerHTML = '<div class="plus-icon"><ion-icon name="add-outline"></ion-icon></div><div class="minus-icon"><ion-icon name="remove-outline"></ion-icon></div>';
        countDiv.classList.add('btn-container');
        foodBodyEl.append(foodTitle, countDiv);

        // food image
        let imageDivEl = document.createElement('div');
        imageDivEl.classList.add('food-image');
        let imgEl = document.createElement('img');
        imgEl.setAttribute('src', meals?.strMealThumb);
        imgEl.setAttribute('alt', meals?.strMeal);
        imgEl.className = 'w-full h-full object-cover rounded-xl';
        imageDivEl.append(imgEl);

        itemDivEl.append(imageDivEl, foodBodyEl);

        fragmentEl.append(itemDivEl);
    });
    productsContainer.append(fragmentEl);
};

// badge colour set,
const badgeColourFunc = () => {
    if (count === 0) {
        cartBadgeEl.classList.add('bg-red-500', 'text-black');
        cartBadgeEl.classList.remove('bg-green-500', 'text-black');
        return;
    }

    if (count > 0) {
        cartBadgeEl.classList.remove('bg-red-500', 'text-black');
        cartBadgeEl.classList.add('bg-green-500', 'text-black');
        return;
    }
};

cartContainer.addEventListener('click', () => {
    count = 0;
    cartBadgeEl.textContent = count;
    cartBadgeEl.classList.add('bg-red-500', 'text-black');
});

// while loading windows load the components,
window.addEventListener('load', () => {
    fetchingProducts();

    // loading message,
    loadingMessage.style.display = 'block';
    loadingMessage.innerHTML = 'Loading food items...';

    // badge colour set,
    badgeColourFunc();

    setTimeout(() => {
        loadingMessage.style.display = 'none';
        appendFoods();

        // button containers,
        const addBtnEls = document.querySelectorAll(".plus-icon");
        const substractBtnEls = document.querySelectorAll(".minus-icon");

        // adding count in cart,
        const addCountFunc = () => {
            if (count < 50) {
                count = count + 1;
                cartBadgeEl.textContent = count;
                // badge colour,
                badgeColourFunc();
            }
        };

        addBtnEls.forEach((addBtn) => {
            addBtn.addEventListener('click', addCountFunc);
        });

        // substract count in cart,
        const substractCountFunc = () => {
            if (count > 0) {
                count = count - 1;
                cartBadgeEl.textContent = count;
                // badge colour,
                badgeColourFunc();
            }
        };

        substractBtnEls.forEach((subBtn) => {
            subBtn.addEventListener('click', substractCountFunc);
        });

        // food items error means,
        if (!foodItems) {
            loadingMessage.innerHTML = 'No food items found!';
            return;
        }
    }, 2000);
});