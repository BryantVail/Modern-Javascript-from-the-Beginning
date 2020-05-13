//TrackCalorie Project
// app.js

//Storage Controller
const StorageController = (function () {

  //public functions
  return {
    storeItem: function (item) {
      let items;

      //are there items? 
      if (localStorage.getItem("items") == null) {
        items = [];
        items.push(item);
        localStorage.setItem("items", JSON.stringify(items));
      } else {
        items = JSON.parse(localStorage.getItem("items"));
        items.push(item);
        localStorage.setItem("items", JSON.stringify(items));
      }
      return items;
    },
    getItemsFromStorage: function () {
      let items;
      if (localStorage.getItem("items") == null) {
        items = [];
      } else {
        items = JSON.parse(localStorage.getItem("items"));
      }
      return items;
    },
    updateItemStorage: function (updatedItem) {
      let items = JSON.parse(localStorage.getItem("items"));
      items.forEach((item, index) => {
        if (updatedItem.id = item.id) {
          items.splice(index, 1, updatedItem);
        }
      });

      localStorage.setItem("items", JSON.stringify(items));
    },
    deleteItemFromStorage: function (id) {
      let items = JSON.parse(localStorage.getItem("items"));
      items.forEach((item, index) => {
        if (item.id == id) {
          items.splice(index, 1);
        }
        localStorage.setItem("items", JSON.stringify(items));
      })
    },
    clearItemsFromStorage: function () {
      localStorage.removeItem("items");
    }
  };
})();

//Item Controller
//Item Controller
//Item Controller
const ItemController = (function () {
  //item constructor
  const Item = function (id, name, calories) {
    this.id = id;
    this.name = name;
    this.calories = calories;
  };

  // Data struct / State
  const data = {
    // items: [
    //   {
    //     id: 0,
    //     name: 'Steak Dinner',
    //     calories: 1200
    //   },
    //   {
    //     id: 1,
    //     name: 'Cookie',
    //     calories: 500
    //   },
    //   {
    //     id: 2,
    //     name: 'Salad',
    //     calories: 50
    //   },
    // ],
    items: StorageController.getItemsFromStorage(),
    currentItem: null,
    totalCalories: 0
  };


  //Public Methods
  return {
    getItems: function () {
      return data.items;
    },
    addItem: function (name, calories) {
      let id;
      //create Id
      if (data.items.length > 0) {
        id = data.items[data.items.length - 1].id + 1;
      } else {
        id = 0;
      }

      //calories to number
      calories = parseInt(calories);

      //create new item
      const newItem = new Item(id, name, calories);

      data.items.push(newItem);

      return newItem;
    },
    getItemById: function (id) {
      let found = null;

      //loop through items
      data.items.forEach((item) => {
        if (item.id == id) {
          found = item;
        }
      });
      return found;
    },
    getTotalCalories: function () {
      let total = 0;

      data.items.forEach((item) => {
        total += item.calories;
      });

      data.totalCalories = total;

      return total;
    },
    setCurrentItem: function (item) {
      data.currentItem = item;
    },
    updateItem: function (name, calories) {
      calories = parseInt(calories);

      let found = null;
      data.items.forEach((item) => {
        if (item.id == data.currentItem.id) {
          item.name = name;
          item.calories = calories;
          found = item;
        }
      });

      return found;
    },
    deleteItem: function (id) {
      //get ids
      ids = data.items.map(function (item) {
        return item.id;
      });

      //get index
      const index = ids.indexOf(id);

      //remove item from item list
      data.items.splice(index, 1); //remove item from given index, only that 1 item

    },
    clearItems: function (e) {
      data.items = [];
    },
    getCurrentItem: function () {
      return data.currentItem;
    },
    logData: function () {
      return data;
    },
  };

})();

//UI Controller
//UI Controller
//UI Controller
const UIController = (function () {

  const UISelectors = {
    itemList: '#item-list',
    listItems: ".calorie-list-item",
    addButton: ".add-btn",
    backButton: ".back-btn",
    updateButton: ".update-btn",
    deleteButton: ".delete-btn",
    updateButton: ".update-btn",
    clearButton: ".clear-btn",
    inputCalories: "#item-calories",
    inputName: "#item-name",
    totalCalories: ".total-calories",
  }

  //

  return {
    populateItemList: function (items) {

      items.forEach((item) => {
        this.addListItem(item);
      });

    },
    getSelectors: function () {
      return UISelectors;
    },
    getItemInput: function () {
      return {
        name: document.querySelector(UISelectors.inputName).value,
        calories: document.querySelector(UISelectors.inputCalories).value
      };
    },
    addListItem: function (item) {
      //create li element
      const li = document.createElement("li");
      // add class
      li.className = "collection-item calorie-list-item";
      li.id = `item-${item.id}`;

      li.innerHTML = `
        <strong class="list-item-name">${item.name}: </strong><em class="list-item-calories">${item.calories} Calories</em>
        <a href="#" class="secondary-content">
          <i class="edit-item fa fa-pencil"></i>
        </a>
      `;

      //insert item
      document.querySelector(UISelectors.itemList).insertAdjacentElement("beforeend", li);
    },
    addItemToForm: function () {
      document.querySelector(UISelectors.inputName).value = ItemController.getCurrentItem().name;
      document.querySelector(UISelectors.inputCalories).value = ItemController.getCurrentItem().calories;


    },
    updateItem: function (item) {
      //get node list, can't use forEach on a node list
      let listItems = document.querySelectorAll(UISelectors.listItems);

      //turn nodeList into array
      listItems = Array.from(listItems);

      listItems.forEach((listItem) => {
        const itemId = listItem.getAttribute("id");
        if (itemId === `item-${item.id}`) {
          listItem.querySelector(".list-item-name").innerHTML = `${item.name}: `;
          listItem.querySelector(".list-item-calories").innerHTML = `${item.calories} Calories`;
        }
      });
    },
    deleteItem: function (currentItemId) {

      const itemId = `#item-${currentItemId}`;

      const item = document.querySelector(itemId);
      item.remove();

    },
    clearItems: function () {
      let listItems = document.querySelectorAll(UISelectors.listItems);
      listItems = Array.from(listItems);

      listItems.forEach((listItem) => {
        listItem.remove();
      });
    },
    clearInputFields: function () {
      document.querySelector(UISelectors.inputName).value = "";
      document.querySelector(UISelectors.inputCalories).value = "";
    },
    setAddState: function () {
      UIController.clearInputFields();
      document.querySelector(UISelectors.updateButton).style.display = "none";
      document.querySelector(UISelectors.deleteButton).style.display = "none";
      document.querySelector(UISelectors.backButton).style.display = "none";
      document.querySelector(UISelectors.addButton).style.display = "inline";
    },
    setEditState: function () {
      document.querySelector(UISelectors.updateButton).style.display = "inline";
      document.querySelector(UISelectors.backButton).style.display = "inline";
      document.querySelector(UISelectors.deleteButton).style.display = "inline";
      document.querySelector(UISelectors.addButton).style.display = "none";
    },
    hideList: function () {
      document.querySelector(UISelectors.itemList).style.display = 'none';
    },
    revealList: function () {
      document.querySelector(UISelectors.itemList).style.display = "block";
    },
    showTotalCalories: function (total) {
      document.querySelector(UISelectors.totalCalories).textContent = total;
    }
  };
})();

// App Controller
// App Controller
// App Controller
const App = (function (ItemController, UIController, StorageController) {

  //load event listeners
  const loadEventListeners = function () {
    const UISelectors = UIController.getSelectors();

    //add item event
    document.querySelector(UISelectors.addButton).addEventListener("click", itemAddSubmit);

    //disable submit on enter
    document.addEventListener("keypress", function (e) {
      if (e.keyCode === 13 || e.which === 13) {
        e.preventDefault();
        return false;
      }
    });

    //back button
    document.querySelector(UISelectors.backButton).addEventListener('click', UIController.setAddState);

    //edit item event
    document.querySelector(UISelectors.itemList).addEventListener("click", itemEditClick);

    //update button
    document.querySelector(UISelectors.updateButton).addEventListener("click", itemUpdateSubmit);

    document.querySelector(UISelectors.deleteButton).addEventListener("click", itemDeleteSubmit);

    document.querySelector(UISelectors.clearButton).addEventListener("click", clearAllItemsClick);

  };//end loadEventListeners

  // Add Item Submit
  const itemAddSubmit = function (e) {
    //get input values from UIController
    const input = UIController.getItemInput();

    //check for calorie and name input
    if (input.name !== "" && input.calories !== "" && typeof Number(input.calories) == "number") {
      // addItem
      const newItem = ItemController.addItem(input.name, input.calories);

      //Add Item to UI List
      UIController.addListItem(newItem);

      UIController.revealList();

      // get total calories
      const totalCalories = ItemController.getTotalCalories();

      //add total calories to the UI
      UIController.showTotalCalories(totalCalories);

      StorageController.storeItem(newItem);

      //clear input fields
      UIController.clearInputFields();

    }

    e.preventDefault();
  }//end itemAddSubmit(e)

  // update item click
  const itemEditClick = function (e) {
    if (e.target.classList.contains("edit-item")) {
      const listItemId = e.target.parentNode.parentNode.id;

      //break id at the dash
      const listIdArray = listItemId.split('-');

      //return id
      const id = parseInt(listIdArray[1]); //second half of the split

      //get item
      const itemToEdit = ItemController.getItemById(id);

      //set current item
      ItemController.setCurrentItem(itemToEdit);

      //add item to form
      UIController.addItemToForm();

      //set edit state
      UIController.setEditState();

    }

    e.preventDefault();
  }

  const itemUpdateSubmit = function (e) {

    // returns object with 'name' and 'calorie' properties
    const input = UIController.getItemInput();

    //update item
    const updatedItem = ItemController.updateItem(input.name, input.calories);

    UIController.updateItem(updatedItem);

    //update total calories
    const totalCalories = ItemController.getTotalCalories();
    UIController.showTotalCalories(totalCalories);

    //update local storage
    StorageController.updateItemStorage(updatedItem);

    //paint items
    // UIController.populateItemList(ItemController.getItems());
    UIController.setAddState();

    e.preventDefault();
  }

  //delete item
  const itemDeleteSubmit = function (e) {

    const currentItem = ItemController.getCurrentItem();

    ItemController.deleteItem(ItemController.getCurrentItem().id);

    UIController.deleteItem(ItemController.getCurrentItem().id);

    const totalCalories = ItemController.getTotalCalories();
    UIController.showTotalCalories(totalCalories);

    //delete from local storage
    StorageController.deleteItemFromStorage(currentItem.id);

    UIController.setAddState();

    e.preventDefault();
  };

  const clearAllItemsClick = function (e) {


    ItemController.clearItems();
    UIController.showTotalCalories(ItemController.getTotalCalories());
    UIController.clearItems();
    StorageController.clearItemsFromStorage();
    UIController.setAddState();
    UIController.hideList();

    e.preventDefault();
  };


  //Public Methods
  return {
    init: function () {
      console.log("initializing app");
      UIController.setAddState();

      // fetch items from ItemsController
      const items = ItemController.getItems();

      //check if items are present
      if (items.length == 0) {
        UIController.hideList();
      } else {
        UIController.populateItemList(items);
        UIController.revealList();
        // get total calories
        const totalCalories = ItemController.getTotalCalories();

        //add total calories to the UI
        UIController.showTotalCalories(totalCalories);
      }

      loadEventListeners();
    }
  };
})(ItemController, UIController, StorageController);

//initialize app
App.init();







