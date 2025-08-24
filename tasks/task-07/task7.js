// ============================
// Task 7 - CRUD without DOM
// ============================

// Initialize an empty array to store items
var items = [];

// Create
function createItem(newItem) {
  items.push(newItem);
  console.log(`Item "${newItem}" added successfully.`);
}

// Read
function readItems() {
  console.log("Current items:");
  items.forEach(function (item, index) {
    console.log(index + ": " + item);
  });
}

// Update
function updateItem(index, newValue) {
  if (index >= 0 && index < items.length) {
    console.log(`Item at index ${index} changed from "${items[index]}" to "${newValue}"`);
    items[index] = newValue;
  } else {
    console.log("Invalid index. Cannot update.");
  }
}

// Delete
function deleteItem(index) {
  if (index >= 0 && index < items.length) {
    var removed = items.splice(index, 1);
    console.log(`Item "${removed}" removed successfully.`);
  } else {
    console.log("Invalid index. Cannot delete.");
  }
}

// ====== Examples ======
createItem("Apple");
createItem("Banana");
createItem("Orange");

readItems();

updateItem(1, "Mango");

readItems();

deleteItem(0);

readItems();