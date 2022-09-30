const fetch = require("node-fetch");

const {
  Category,
  Game,
  Guest,
  Leaderboard,
  Level,
  Notification,
  Platform,
  Profile,
  Region,
  Run,
  Serie,
  User,
  Variable,
} = require("./index");

const baseURL = "https://www.speedrun.com/api/v1";

class Client {
  constructor() {
    this.categories = new Category(this);
    this.games = new Game(this);
    this.guests = new Guest(this);
    this.leaderboards = new Leaderboard(this);
    this.levels = new Level(this);
    this.notifications = new Notification(this);
    this.platforms = new Platform(this);
    this.profiles = new Profile(this);
    this.regions = new Region(this);
    this.runs = new Run(this);
    this.series = new Serie(this);
    this.users = new User(this);
    this.variables = new Variable(this);
  }

  /**
   * Performs a GET request to an endpoint on the API
   * @param {String} endpoint
   * @returns
   */
  get(endpoint) {
    return fetch(`${baseURL}${endpoint}`, {
      headers: { "X-API-Key": this.key || null },
    }).then((data) => data.json());
  }

  /**
   * Performs a POST request to an endpoint on the API
   * @param {String} endpoint
   * @param {JSON} postBody
   * @returns
   */
  async post(endpoint, postBody) {
    const response = await fetch(`${baseURL}${endpoint}`, {
      method: "POST",
      body: JSON.stringify(postBody),
      headers: {
        "Content-Type": "application/json",
        "X-API-Key": this.key || null,
      },
    });
    const data = await response.json();
    return data;
  }

  /**
   * Performs a DELETE request to an endpoint on the API
   * @param {String} endpoint
   * @returns {Promise}
   */
  delete(endpoint) {
    return fetch(`${baseURL}${endpoint}`, {
      method: "DELETE",
      headers: { "X-API-Key": this.key || null },
    });
  }

  /**
   * Performs a PUT request to an endpoint on the API
   * @param {String} endpoint
   * @param {JSON} postBody
   * @returns
   */
  async put(endpoint, postBody) {
    const response = await fetch(`${baseURL}${endpoint}`, {
      method: "PUT",
      body: JSON.stringify(postBody),
      headers: {
        "Content-Type": "application/json",
        "X-API-Key": this.key || null,
      },
    });
    const data = await response.json();
    return data;
  }

  /**
   * Sets the key to be used for authenticated requests
   * @param {String} key
   */
  setAPIKey(key) {
    this.key = key;
  }
}

module.exports = Client;
