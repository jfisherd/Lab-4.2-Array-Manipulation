shoppingList = []

// Task 1
function addItem(item) {
shoppingList.push(item)
}

// addItem("Alice") // PLACEHOLDER LIST ITEMS FOR DEV TESTING 
// addItem("Bob")
// addItem("Charlie")
// addItem("aaaa")
// addItem("a")
// addItem("David")
// displayList()

function removeLastItem() {
    shoppingList.pop()
}
// removeLastItem() // PLACEHOLDER FUNCTION CALLS FOR DEV TESTING
// displayList()

function displayList() {
    console.log(shoppingList)
}

// Task 2
function addItem(item) {
    if (shoppingList.includes(item)) {
        return console.log(`${item} already on list`)
    } else {
        shoppingList.push(item)
    }
}
// addItem("Alice") // PLACEHOLDER FUNCTION CALLS FOR DEV TESTING
// displayList()

function filterItems(searchTerm) {
    shoppingListFiltered = []
    for (i=0;i<shoppingList.length;i++) {
        if (shoppingList[i].includes(searchTerm)) {
            shoppingListFiltered.push(shoppingList[i])
        }
    }
    return shoppingListFiltered
}
// console.log(filterItems("a")) // PLACEHOLDER FUNCTION CALL FOR DEV TESTING

// Task 3
itemInput = document.getElementById("itemInput");
additemButton = document.getElementById("addItemButton");
removeitemButton = document.getElementById("removeItemButton");
itemList = document.getElementById("itemList");

addItemButton.addEventListener("click", function () {
  itemText = itemInput.value
 
  if (itemText === "") {
    alert("Please enter an item!")
    return
  }
 
  listItem = document.createElement("li");
  listItem.innerText = itemText;
 
  itemList.appendChild(listItem)
  itemInput.value = "" // Clear the input field
})

itemList.addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    itemList.removeChild(event.target)
  }
})