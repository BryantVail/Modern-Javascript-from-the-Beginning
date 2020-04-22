//00_github-api
// app.js

const github = new GitHub();
const ui = new UI();

const searchUser = document.querySelector("#search-user");
searchUser.addEventListener("keyup", (e) => {
  //get input text
  const userText = e.target.value;

  if (userText !== "") {
    //get user
    github
      .getUser(userText)
      .then((data) => {
        if (data.profile.message == "Not Found") {
          // show alert
          ui.clearProfile();

          ui.showAlert(
            "user not found",
            "alert profile-not-found alert-danger"
          );
        } else {
          //show profile
          ui.showProfile(data.profile);
          ui.showRepos(data.repos);
        }
      })
      .catch((err) => console.log(err));
  } else {
    //clear profile
    ui.clearProfile();
  }
});

//
