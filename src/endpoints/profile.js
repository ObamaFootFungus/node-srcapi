class Profile {
  constructor(client) {
    this.client = client;
  }

  /**
   * Gets the profile of the currently authenticated user
   * @returns {Promise}
   */
  get() {
    return this.client.get(`/profile`);
  }
}

module.exports = Profile;
