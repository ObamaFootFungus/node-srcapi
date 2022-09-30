class Level {
  constructor(client) {
    this.client = client;
  }

  /**
   *
   * @param {String} id
   * @returns {Promise}
   */
  get(id) {
    return this.client.get(`/levels/${id}`);
  }

  /**
   *
   * @param {String} id
   * @returns {Promise}
   */
  getCategories(id) {
    return this.client.get(`/levels/${id}/categories`);
  }

  /**
   *
   * @param {String} id
   * @returns {Promise}
   */
  getVariables(id) {
    return this.client.get(`/levels/${id}/variables`);
  }

  /**
   *
   * @param {String} id
   * @returns {Promise}
   */
  getRecords(id) {
    return this.client.get(`/levels/${id}/records`);
  }
}

module.exports = Level;
