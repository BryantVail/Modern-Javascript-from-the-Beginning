// 11_DesignPatterns
//mediator: chatroom

const User = function (name) {
  this.name = name;
  this.chatroom = null;
};

User.prototype = {
  send: function (message, to) {
    //using the chatroom to send the message
    this.chatroom.send(message, this /*the user*/, to);
  },
  receive: function (message, from) {
    //chatroom object uses this function within its definition
    console.log(`${from.name} to ${this.name}: ${message}`);
  },
};

const Chatroom = function () {
  let users = {}; //list of users

  return {
    register: function (user) {
      users[user.name] = user;
      user.chatroom = this;
    },
    send: function (message, from, to) {
      if (to) {
        //single user message
        to.receive(message, from);
      } else {
        // chatroom message
        for (key in users) {
          if (users[key] != from) {
            users[key].receive(message, from);
          }
        }
      }
    },
  };
};

const john = new User("john");
const bryant = new User("bryant");
const steph = new User("steph");
const lewie = new User("lewie");
const userArray = new Array(john, bryant, steph, lewie);

const chatroom = new Chatroom();
userArray.forEach((user) => {
  chatroom.register(user);
});

john.send("hey bry", bryant);
bryant.send("hey johnny! Lets get everyone else included!", john);
john.send("okay!", bryant);
john.send("Hey Everyone!");
steph.send("Hey John!");
lewie.send("hey all you cats & kittens!");
