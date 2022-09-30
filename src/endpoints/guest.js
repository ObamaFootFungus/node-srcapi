class Guest {
  constructor(client) {
    this.client = client;
  }

  /**
   *
   * @param {String} name
   * @returns {Promise}
   */
  get(name) {
    return this.client.get(`/guests/${name}`);
  }
}

module.exports = Guest;
