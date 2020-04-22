//11_DesignPatterns
// appES6.js

class EventObserver {
  constructor() {
    this.observers = [];
  }

  subscribe(fn) {
    this.observers.push(fn);
    console.log(`Now subscribed to ${fn.name}`);
  }

  unsubscribe(fn) {
    this.observers = this.observers.filter((func) => {
      // if the fn passed in is not func in the list, return func for the new array to be returned after filtering
      if (fn !== func) {
        return func;
      }
      console.log(`Now unsubscribed from ${fn.name}`);
    });
  }

  fire() {
    this.observers.forEach((func) => {
      func.call();
    });
  }
} //end class EventObserver

const clickObserver = new EventObserver();

// DOM EventListeners

// subscribe to Millis
document.querySelector(".sub-milli").addEventListener("click", function () {
  clickObserver.subscribe(getCurrentMilliseconds);
});

//unsub millis
document.querySelector(".unsub-milli").addEventListener("click", function () {
  clickObserver.unsubscribe(getCurrentMilliseconds);
});

//sub seconds
document.querySelector(".sub-seconds").addEventListener("click", function () {
  clickObserver.subscribe(getCurrentSeconds);
});

//unsub seconds
document.querySelector(".unsub-seconds").addEventListener("click", function () {
  clickObserver.unsubscribe(getCurrentSeconds);
});

//fire
document.querySelector(".fire").addEventListener("click", function () {
  clickObserver.fire();
});

// FUNCTIONS

const getCurrentMilliseconds = function () {
  console.log(`Current Milliseconds: ${new Date().getMilliseconds()}`);
};

const getCurrentSeconds = function () {
  console.log(`CurrentSeconds: ${new Date().getSeconds()}`);
};
