//11_DesignPatterns
// 05_Observer-Pattern
// -> angular uses this pattern

function EventObservers() {
  this.observers = [];
}

EventObservers.prototype = {
  subscribe: function (fn) {
    this.observers.push(fn);
    console.log(`you are now subscribed to ${fn.name}`);
  },
  unsubscribe: function (fn) {
    // filter out from the list whatever matches the callback function. If there is no match, the callback gets to stay on the list. The filter returns a new list and reassigns the list of observers.
    // function passed into 'filter' passes in each function as 'func', then compares it to the 'fn' passed into 'unsubscribe'
    this.observers = this.observers.filter(function (func) {
      if (func !== fn) {
        // forEach func in observers, return the function to the new array if its not the fn that needs to be removed/filtered out
        return func;
      }
    });

    console.log(`You have unsubscribed from ${fn.name}`);
  },
  fire: function () {
    this.observers.forEach(function (func) {
      func.call();
    });
  },
};

// call() method:
//The call() allows for a function/method belonging to one object to be assigned and called for a different object.

// call() provides a new value of this to the function/method. With call(), you can write a method once and then inherit it in another object, without having to rewrite the method for the new object.

const clickObserver = new EventObservers();

//Event Listeners

//subscribe milliseconds
document.querySelector(".sub-milli").addEventListener("click", function () {
  clickObserver.subscribe(getCurrentMilliseconds);
});

// unsubscribe milliseconds
document.querySelector(".unsub-milli").addEventListener("click", function () {
  clickObserver.unsubscribe(getCurrentMilliseconds);
});

// subscribe seconds
document.querySelector(".sub-seconds").addEventListener("click", function () {
  clickObserver.subscribe(getCurrentSeconds);
});

//unsubscribe seconds
document.querySelector(".unsub-seconds").addEventListener("click", function () {
  clickObserver.unsubscribe(getCurrentSeconds);
});

//fire
document.querySelector(".fire").addEventListener("click", function () {
  clickObserver.fire();
});

// FUNCTIONS

// getCurrentMilliseconds
const getCurrentMilliseconds = function () {
  console.log(`current milliseconds: ${new Date().getMilliseconds()}`);
};

//getCurrentSeconds
const getCurrentSeconds = function () {
  console.log(`Current Seconds: ${new Date().getSeconds()}`);
};
