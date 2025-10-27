shoppingList = []

// Task 1
function addItem(item) {
shoppingList.push(item)
}
addItem("banananas")
addItem("aple")
displayList()

function removeLastItem() {
    shoppingList.pop()
}
removeLastItem()
displayList()

function displayList() {
    console.log(shoppingList)
}

