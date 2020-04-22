//02_iterators-generators_profile-scroller
//app.js

const data = [
  {
    name: "Stephanie Coral",
    age: "30",
    gender: "female",
    lookingFor: "male",
    location: "Vega Baja, PR",
    image: "https://randomuser.me/api/portraits/women/22.jpg",
  },
  {
    name: "Bryant Vail",
    age: "30",
    gender: "male",
    lookingFor: "female",
    location: "Orlando, FL",
    image: "https://randomuser.me/api/portraits/men/33.jpg",
  },
  {
    name: "Shirley Brinson",
    age: "58",
    gender: "female",
    lookingFor: "male",
    location: "Orlando, FL",
    image: "https://randomuser.me/api/portraits/women/81.jpg",
  },
  {
    name: "John Vail",
    age: "27",
    gender: "Male",
    lookingFor: "female",
    location: "Orlando, FL",
    image: "https://randomuser.me/api/portraits/men/8.jpg",
  },
  {
    name: "Lewie Vail",
    age: "33",
    gender: "male",
    lookingFor: "female",
    location: "Orlando, FL",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
];

const profiles = profileIterator(data);

//Next Event
document.querySelector("#next").addEventListener("click", nextProfile);
// call first profile
document.addEventListener("DOMContentLoaded", nextProfile);

//NextProfile Display
function nextProfile() {
  currentProfile = profiles.next().value; // assign object

  if (currentProfile !== undefined) {
    const profileDisplay = document.querySelector("#profile-display");
    profileDisplay.innerHTML = `
      <ul class="list-group">
        <li class="list-group-item">Name: ${currentProfile.name}</li>
        <li class="list-group-item">Age: ${currentProfile.age}</li>
        <li class="list-group-item">Location: ${currentProfile.location}</li>
        <li class="list-group-item">Gender: ${currentProfile.gender}</li>
        <li class="list-group-item">Looking For: ${currentProfile.lookingFor}</li>
        
      </ul>
    `;

    document.querySelector("#image-display").innerHTML = `
      <img src="${currentProfile.image}">
    `;
  } else {
    //No more profiles
    //reload the page
    window.location.reload();
  }
}

//Profile Iterator
function profileIterator(profiles) {
  let nextIndex = 0;

  return {
    next: function () {
      if (nextIndex < profiles.length) {
        return {
          value: profiles[nextIndex++],
          done: false,
        };
      } else {
        return {
          done: true,
        };
      }
    },
  };
}

//
