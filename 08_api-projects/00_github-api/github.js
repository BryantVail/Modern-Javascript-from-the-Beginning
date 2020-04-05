class GitHub {
  constructor() {
    this.clientId = "f5cb428c82893b840254";
    this.clientSecret = "9f0ed9fbe82387adf98f26dd91610278b4b7ab43";
    this.usersApiURL = "https://api.github.com/users/";
    this.repos_count = 5;
    this.repos_sort = "created: asc";
  }

  // get
  async getUser(user) {
    const profileResponse = await fetch(
      `${this.usersApiURL}${user}?client_id=${this.clientId}&client_secret=${this.clientSecret}`
    );
    const profile = await profileResponse.json();
    const repos = await this.getRepos(user)
      .then(data => data)
      .catch(err => console.log(err));

    return {
      profile: profile,
      repos: repos
    };
  }

  async getRepos(user) {
    const repoResponse = await fetch(
      `${this.usersApiURL}${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.clientId}&client_secret=${this.clientSecret}`
    );
    const repos = await repoResponse.json();
    return repos;
  }
}
