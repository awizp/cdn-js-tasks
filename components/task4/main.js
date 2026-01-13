// products list
const productsList = ["Product1", "Product2", "Product3", "Product4", "Product5", "Product6", "Product7", "Product8", "Product9", "Product10", "Product11", "Product12", "Product13", "Product14", "Product15", "Product16", "Product17", "Product18", "Product19", "Product20", "Product21", "Product22", "Product23", "Product24", "Product25", "Product26", "Product27", "Product28", "Product29", "Product30", "Product31", "Product32", "Product33", "Product34", "Product35", "Product36", "Product37", "Product38", "Product39", "Product40", "Product41", "Product42", "Product43", "Product44", "Product45", "Product46", "Product47", "Product48", "Product49", "Product50"];

// elements variables
let productsContainerEl = document.getElementById('products_container');
let fragmentEl = document.createDocumentFragment();

// see the performance with time
console.time("fragment way");

// looping through array to get products in document,
for (let i = 0; i < productsList.length; i++) {
    let listEl = document.createElement('li');
    listEl.classList.add("list");
    listEl.textContent = productsList[i];
    fragmentEl.append(listEl);
}

// append the fragment in document,
productsContainerEl.append(fragmentEl);

console.timeEnd("fragment way");