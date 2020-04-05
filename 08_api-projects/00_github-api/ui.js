class UI {
  constructor() {
    this.profile = document.querySelector("#profile-info");
  }

  async showProfile(profile) {
    this.profile.innerHTML = `
      <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-3">
            <img class="img-fluid mb-2" src="${profile.avatar_url}">
            <a href="${profile.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
          </div>
          <div class="col-md-9">
            <span class="badge badge-primary">Public Repos: ${profile.public_repos}</span>
            <span class="badge badge-secondary">Public Gists: ${profile.public_gists}</span>
            <span class="badge badge-success">Followers: ${profile.followers} </span>
            <span class="badge badge-info">Following: ${profile.following}</span>
            <br><br>
            <ul class="list-group">
              <li class="list-group-item">Company: ${profile.company}</li>
              <li class="list-group-item">Website/Blog: ${profile.blog}</li>
              <li class="list-group-item">Location: ${profile.location}</li>
              <li class="list-group-item">Member Since: ${profile.created_at}</li>
            </ul>
          </div>
        </div>
      </div>
      <h3 class="page-heading md-3">Latest Repos</h3>
      <div id="repos"></div>
    `;
  }

  //show repos
  showRepos(repos) {
    let output = "";

    repos.forEach((repo, index) => {
      output += `
        <div class="card card-body mb-2>
          <div class="row">
            <div class="col-md-6">
              <a href="${repo.html_url}" target="_blank" >${repo.name}</a>
            </div>
            <div class="col-md-6">
              <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
              <span class="badge badge-secondary">Watchers: ${repo.watchers}</span>
              <span class="badge badge-success">Forks: ${repo.forks_count}</span>
            </div>
          </div>
        </div>
      `;
    });

    //output
    document.querySelector("#repos").innerHTML = output;
  }

  // show alert when there's not a profile with that name
  async showAlert(message, cssClasses) {
    //clear any remaining alerts
    this.clearAlert();
    //create div
    const div = document.createElement("div");
    div.className = cssClasses;
    div.appendChild(document.createTextNode(message));

    //get parent
    const container = document.querySelector(".search-container");

    //get search card
    const search = document.querySelector(".search");

    container.insertBefore(div, search);

    //timeout after 3 seconds
    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }

  clearAlert() {
    const currentAlert = document.querySelector(".profile-not-found");
    if (currentAlert) {
      currentAlert.remove();
    }
  }

  clearProfile() {
    this.profile.innerHTML = "";
  }
}
