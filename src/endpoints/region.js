class Region {
  constructor(client) {
    this.client = client;
  }

  /**
   * Get region by id
   * @param {String} id
   * @returns {Promise}
   */
  get(id) {
    return this.client.get(`/regions/${id}`);
  }
}

module.exports = Region;
