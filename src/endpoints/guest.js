class Guest {
  constructor(client) {
    this.client = client;
  }

  /**
   * Get guest by name
   * @param {String} name
   * @returns {Promise}
   */
  get(name) {
    return this.client.get(`/guests/${name}`);
  }
}

module.exports = Guest;
