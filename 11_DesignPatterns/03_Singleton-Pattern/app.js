//11_Design-Patterns
// Singleton Pattern

const Singleton = (function () {
  let instance;

  function createInstance() {
    const object = new Object({ name: "bryant", id: 1 });

    return object;
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

const instanceA = Singleton.getInstance();
console.log(instanceA);
const instanceB = Singleton.getInstance();

console.log(instanceA === instanceB);
//
