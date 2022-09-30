class Level {
  constructor(client) {
    this.client = client;
  }

  /**
   * Get level by id
   * @param {String} id
   * @returns {Promise}
   */
  get(id) {
    return this.client.get(`/levels/${id}`);
  }

  /**
   * Get level categories
   * @param {String} id
   * @returns {Promise}
   */
  getCategories(id) {
    return this.client.get(`/levels/${id}/categories`);
  }

  /**
   * Get level variables
   * @param {String} id
   * @returns {Promise}
   */
  getVariables(id) {
    return this.client.get(`/levels/${id}/variables`);
  }

  /**
   * Get level records
   * @param {String} id
   * @returns {Promise}
   */
  getRecords(id) {
    return this.client.get(`/levels/${id}/records`);
  }
}

module.exports = Level;
