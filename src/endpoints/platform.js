class Platform {
  constructor(client) {
    this.client = client;
  }

  /**
   * Get platform by id
   * @param {String} id
   * @returns {Promise}
   */
  get(id) {
    return this.client.get(`/platforms/${id}`);
  }
}

module.exports = Platform;
