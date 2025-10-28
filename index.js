shoppingList = []

function addItem(item) {
    if (shoppingList.includes(item)) {  // check for duplicate entries
        return alert(`${item} already on list`)
    } else {
        shoppingList.push(item)
    }
}

function removeLastItem() {
    shoppingList.pop()
}

function displayList() {
    console.log(shoppingList)
}

function filterItems(searchTerm) {
  return shoppingList.filter(x=>x.includes(searchTerm))
}

itemInput = document.getElementById("itemInput");
addItemButton = document.getElementById("addItemButton");
removeItemButton = document.getElementById("removeItemButton");
itemList = document.getElementById("itemList");

function updateCart() {
  itemList.innerHTML = ""
  for (i=0;i<shoppingList.length;i++) {
    listItem = document.createElement("li")
    listItem.innerText = shoppingList[i]
    itemList.appendChild(listItem)
  }
}

addItemButton.addEventListener("click", function () {
  itemText = itemInput.value
 
  if (itemText === "") {
    alert("Please enter an item!")
    return
  }
  addItem(itemText)
  updateCart()
  itemInput.value = "" // Clear the input field
})

removeItemButton.addEventListener("click", function () {
  removeLastItem()
  updateCart()
})
