// 11_Design Patterns
// Module Pattern

//IIFE
// (function(){
//   //Declare private variables and functions

//   return {
//     //declare public variables & functions
//   }
// })();

//
// Standard Module Pattern
//

// const UICtrl = (function () {
//   const text = "hello world";

//   const changeText = function () {
//     const element = document.querySelector("#mainHeading");
//     element.textContent = text;
//   };

//   return {
//     callChangeText: function () {
//       changeText();
//       console.log(text); // able to reach the scope of the module
//     },
//   };
// })();

// UICtrl.callChangeText();

// UICtrl.changeText(); // not a function bc UICtrl does not return that function as available
//console.log(UICtrl.text); //undefined

//
//Revealing Module Pattern
//

const ItemCtrl = (function () {
  // may see '_data' for private variables
  let data = [];

  function add(item) {
    data.push(item);
    console.log(`id: ${item.id}, name: ${item.name} added...`);
  }

  function get(id) {
    console.log(
      data.find((item) => {
        return item.id === id;
      })
    );

    return data.find((item) => {
      return item.id === id;
    });
  }

  return {
    //revealing the methods
    add: add,
    get: get,
  };
})();

ItemCtrl.add({
  id: 1,
  name: "Bryant",
});

ItemCtrl.get(1);

//
